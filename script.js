const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Async Function to select a media screen and pass to video element, and play.

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Catch Error
    console.log('Error Showing')
  }
}

button.addEventListener('click', async () => {
  // Disable the Button
  // button.disable = true
  // Start Picture in Picture Mode
  await videoElement.requestPictureInPicture()
  // Reset Button
  // button.disable = false
})

// On Load
selectMediaStream()
