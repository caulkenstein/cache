// Check if the browser is Chrome
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// Get the necessary elements
var audioButton = document.querySelector('.audio-btn');
var backgroundAudio = document.getElementById('backgroundAudio');

// Function to handle the audio button click event
function handleAudioButtonClick() {
  if (backgroundAudio.muted) {
    backgroundAudio.muted = false;
    audioButton.classList.remove('muted');
  } else {
    backgroundAudio.muted = true;
    audioButton.classList.add('muted');
  }
}

// Add click event listener to the audio button
audioButton.addEventListener('click', handleAudioButtonClick);

// Mute the audio initially if the browser is Chrome
if (isChrome) {
  backgroundAudio.muted = true;
  audioButton.classList.add('muted');
}