import { createApp } from 'vue'
import Popup from './Popup.vue'

createApp(Popup).mount('#app')

// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', ({ color }) => {
  if (changeColor) {
    changeColor.style.backgroundColor = color
  }
})

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor!.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    function: setPageBackgroundColor,
  } as any)
})

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color
  })
}