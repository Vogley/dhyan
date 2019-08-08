/************ Music Player ************/
var audio = new Audio('static/media/intro.mp3');
audio.volume = 1;

function playPause(){
  if (audio.paused == false) {
      audio.pause();
      $('.icon-play').show();
      $('.icon-pause').hide();
      $('.music-card').removeClass('playing');
  } else {
      audio.play();
      $('.icon-pause').show();
      $('.icon-play').hide();
      $('.music-card').addClass('playing');
  }
};

var toggle = false;
function toggleSongs() {
  if(toggle)
    document.getElementById("song-list").style.display = "block";
  else
    document.getElementById("song-list").style.display = "none";
  toggle = !toggle;
}

/*********** Song Change ************/
var currSong = "intro";  //Back in Business Starts
function changeSong(song) {
  if(currSong != song) {
    
    var songTitle = document.getElementById("song-title");
    
    audio.pause();
    $('.icon-play').show();
    $('.icon-pause').hide();
    $('.music-card').removeClass('playing');

    if(song == "intro") {
      audio = new Audio('static/media/intro.mp3');
      songTitle.innerHTML = "Intro";
      currSong = song;
    }
    else if(song == "lady") {
      audio = new Audio('static/media/lady_in_the_shadows.mp3');
      songTitle.innerHTML = "Lady in the Shadows";
      currSong = song;
    }
    else if(song == "speak") {
      audio = new Audio('static/media/speak_of_the_devil.mp3');
      songTitle.innerHTML = "Speak of the Devil";
      currSong = song;
    }
    else if(song == "fire") {
      audio = new Audio('static/media/fire.mp3');
      songTitle.innerHTML = "Fire";
      currSong = song;
    }
    else if(song == "back") {
      audio = new Audio('static/media/back_in_business.mp3');
      songTitle.innerHTML = "Back in Business";
      currSong = song;
    }
    else if(song == "hypocrites") {
      audio = new Audio('static/media/hypocrites.mp3');
      songTitle.innerHTML = "Hypocrites";
      currSong = song;
    }
    else if(song == "butter") {
      audio = new Audio('static/media/butter.mp3');
      songTitle.innerHTML = "Butter";
      currSong = song;
    }
    else if(song == "sun") {
      audio = new Audio('static/media/the_sun_never_says.mp3');
      songTitle.innerHTML = "The Sun Never Says";
      currSong = song;
    }
    else {
      audio = new Audio('static/media/intro.mp3');
      songTitle.innerHTML = "Intro";
      currSong = "back";
    }


    audio.play();
    $('.icon-pause').show();
    $('.icon-play').hide();
    $('.music-card').addClass('playing');
  }
}


/*********** Background Audio ************/
var width = 0;
var prevWidth;
$(window).resize(function() {
  prevWidth=width;
  width = $(window).width();
  if(width < 550 && prevWidth > 550) {
    document.getElementById("playAudio").play();
    document.getElementById("playAudio").muted = false;
    audio.pause();
    $('.icon-play').show();
    $('.icon-pause').hide();
    $('.music-card').removeClass('playing');
  }
  else if(width > 550 && prevWidth < 550){
    document.getElementById("playAudio").pause();
  }
});

window.onload = function() {
  width = $(window).width();
  if(width < 550) {
    document.getElementById("playAudio").muted = false;
    console.log(document.getElementById("playAudio").muted);
  }
};