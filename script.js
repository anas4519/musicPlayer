console.log("Welcome to Spotify");
let songIndex = 0;
const audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Stronger", filePath: "songs/1.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "Flashing Lights", filePath: "songs/2.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "Can't Tell me nothing", filePath: "songs/3.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "4-5 seconds - ft. Rihanna, Paul McCartney", filePath: "songs/4.mp3", coverPath:"covers/45seconds.png"},
    {songName: "Dark fantasy", filePath: "songs/5.mp3", coverPath:"covers/cover.jpg"},
    {songName: "Gold digger - ft. Jamie Foxx", filePath: "songs/6.mp3", coverPath:"covers/goldDigger.jpg"},
    {songName: "I Wonder", filePath: "songs/7.mp3", coverPath:"covers/cover2.jpg"},
    {songName: "OTIS - ft. JAY-Z, Otis Reddig", filePath: "songs/8.mp3", coverPath:"covers/throne.jpg"},
    {songName: "***gas in Paris - ft. JAY-Z", filePath: "songs/9.mp3", coverPath:"covers/throne.jpg"},
    {songName: "Touch the Sky - ft. Lupe Fiasco", filePath: "songs/10.mp3", coverPath:"covers/sky.jpg"},
]
songItems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-sharp", "fa-solid", "fa-circle-play");
        masterPlay.classList.add("fa-sharp", "fa-solid", "fa-circle-pause"); 
    } else{
        audioElement.pause();
        masterPlay.classList.remove("fa-sharp", "fa-solid", "fa-circle-pause");
        masterPlay.classList.add("fa-sharp", "fa-solid", "fa-circle-play");
        
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-sharp", "fa-solid", "fa-circle-pause");
        element.classList.add("fa-sharp", "fa-solid", "fa-circle-play");
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-sharp", "fa-solid", "fa-circle-play");
        e.target.classList.add("fa-sharp", "fa-solid", "fa-circle-pause");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-sharp", "fa-solid", "fa-circle-play");
        masterPlay.classList.add("fa-sharp", "fa-solid", "fa-circle-pause");

})

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    } else{
        songIndex+=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-sharp", "fa-solid", "fa-circle-play");
        masterPlay.classList.add("fa-sharp", "fa-solid", "fa-circle-pause");

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    } else{
        songIndex-=1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-sharp", "fa-solid", "fa-circle-play");
        masterPlay.classList.add("fa-sharp", "fa-solid", "fa-circle-pause");

})