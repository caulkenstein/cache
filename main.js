// Get the necessary elements
var audioButton = document.querySelector('.audio-btn');
var backgroundAudio = document.getElementById('backgroundAudio');

// Function to handle the audio button click event
function handleAudioButtonClick() {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    audioButton.classList.remove('muted');
    localStorage.setItem('audioMuted', 'false');
    console.log('Audio played. localStorage set to:', localStorage.getItem('audioMuted'));
  } else {
    backgroundAudio.pause();
    audioButton.classList.add('muted');
    localStorage.setItem('audioMuted', 'true');
    console.log('Audio paused. localStorage set to:', localStorage.getItem('audioMuted'));
  }
}

// Add click event listener to the audio button
audioButton.addEventListener('click', handleAudioButtonClick);

// Check if the audio muted value exists in localStorage
var audioMutedValue = localStorage.getItem('audioMuted');

// Pause the audio initially if the audio muted value is set to 'true'
if (audioMutedValue === 'true') {
  backgroundAudio.pause();
  audioButton.classList.add('muted');
} else {
  backgroundAudio.play();
  audioButton.classList.remove('muted');
}
