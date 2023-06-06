document.addEventListener('DOMContentLoaded', function() {
  const volumeSlider = document.getElementById('volumeSlider');

  // Escuchar cambios en el control deslizante de volumen
  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];

      if (activeTab.url.startsWith('http') || activeTab.url.startsWith('https')) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: adjustVolume,
          args: [volume],
        });
      }
    });
  });
});

function adjustVolume(volume) {
  const mediaElements = document.querySelectorAll('audio, video');
  if (mediaElements.length > 0) {
    mediaElements.forEach(function(element) {
      element.volume = volume / 100;
    });
  }
}
