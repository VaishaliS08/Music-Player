console.log("Welcome to spotify");
//Inititalize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: " Warriyo - Mortals (ft. Laura Brehm)", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: " So Happy - Raden Siwa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: " DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: " Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: " Janji - Heroes Tonight (feat. Johnning)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: " Ride It- JaySean", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: " Tere Nainon Mein (The Bilz N Kashif)", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: " With You Ft. Jay Sean", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: " Woman - Doja Cat", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: " Get Low (Furious 7) Dillon Francis N Dj Snake", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((elements, i) => {
    // console.log(elements ,i);
    elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elements.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName; 
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

