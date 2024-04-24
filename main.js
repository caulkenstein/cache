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
    localStorage.setItem('audioMuted', 'false');
    console.log('Audio unmuted. localStorage set to:', localStorage.getItem('audioMuted'));
  } else {
    backgroundAudio.muted = true;
    audioButton.classList.add('muted');
    localStorage.setItem('audioMuted', 'true');
    console.log('Audio muted. localStorage set to:', localStorage.getItem('audioMuted'));
  }
}

// Add click event listener to the audio button
audioButton.addEventListener('click', handleAudioButtonClick);

// Check if the audio muted value exists in localStorage
var audioMutedValue = localStorage.getItem('audioMuted');

// Mute the audio initially if the browser is Chrome or if the audio muted value is set to 'true'
if (isChrome || audioMutedValue === 'true') {
  backgroundAudio.muted = true;
  audioButton.classList.add('muted');
}