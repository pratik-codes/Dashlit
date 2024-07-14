console.log('background script init...')

chrome.runtime.onStartup.addListener(() => {
  console.log(`onStartup()`)
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered.')
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error)
    })
}

// Add an event listener for the 'fetch' event.
self.addEventListener('fetch', (event) => {
  if (event.request.url === 'https://your-extension-url.com/fetch-bookmarks') {
    // Fetch all bookmarks.
    chrome.bookmarks.getTree((bookmarkTree) => {
      console.log('Fetched bookmarks:', bookmarkTree)
      // You can send the bookmarks data to your extension's UI here.
    })
  }
})

// fetches all the bookmarks of the user sends it to the dashboard UI
console.log('generating bookmarks...')
chrome.bookmarks.getTree((bookmarkTree) => {
  // Send the bookmarkTree to your React UI using chrome.runtime.sendMessage
  chrome.runtime.sendMessage({
    bookmarks: bookmarkTree,
    type: 'fetchBookmarks'
  })
})
