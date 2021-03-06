function changelyrics() {
    document.getElementById("lyrics").value = "";
    document.getElementById("track").value = "";
    var request = new XMLHttpRequest();
    var x = getURL();
    request.open('GET', x[0]);
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            var obj = JSON.parse(this.responseText);
            var list = obj.lyrics.split("\n");
            list = list.filter(item => item);
            /*number of lines*/
            var lines = getRandomInt(1,3);
            /*start of the phrase*/
            var start = getRandomInt(1,list.length-lines-1)
            /*get lyrics*/
            var lyrics = ""
            for(let i=1;i<=lines;i++){
                lyrics = lyrics + list[start] + "\n";
                start++;
            }
            // to remove "undefined" from lyrics
            if(lyrics.includes("undefined")) {
                lyrics = lyrics.replace("undefined","");
            }
            /*set lyrics*/
            document.getElementById("lyrics").innerHTML = lyrics;
            document.getElementById("track").innerHTML = x[1];
        }
    };
    request.send();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

songs = ["My Boy (Twin Fantasy)","Beach Life-in-Death", "Stop Smoking (We Love You)","Sober to Death","Nervous Young Inhumans","Bodys","Cute Thing","High to Death","Famous Prophets (Stars)","Twin Fantasy (Those Boys)"]

function getURL() {
    song = songs[getRandomInt(0,9)];
    url = "https://api.lyrics.ovh/v1/Car Seat Headrest/" + song;
    x = [url,song]
    return x;
}