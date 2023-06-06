function adjustVolume(volume) {
  // Obtener el ID de la pestaña activa
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tabId = tabs[0].id;

    // Ejecutar un script en la pestaña activa para ajustar el volumen
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: function(tab) {
        // Comprobar si el sitio web tiene un elemento de audio o video
        const mediaElements = tab.querySelectorAll('audio, video');
        if (mediaElements.length > 0) {
          // Ajustar el volumen de cada elemento de audio o video encontrado
          mediaElements.forEach(function(element) {
            element.volume = volume;
          });
        }
      },
    });
  });
}