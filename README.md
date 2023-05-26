# Extension_de_sonido
Se elabora una extensión para navegadores que estén basados en Chromium, que ajusta el sonido de algún audio o video de las pestañas individualmente

Se manejan cómo tal 5 archivos:
- manifest.json
Es la base de la extensión contiene los metadatos y los permisos que requiere la extensión para funcionar correctamente

- popup.html ("popup" es la nomenclatura estandar para las ventanas emergentes que se manejan en las extensiones)
Es el popup o la vista por default de la extensión, y básicamente la unica en donde se agrega la barra vertical para ajustar el sonido

- popup.css
El complemento del popup.html permite darle estilo a la ventana

- popup.js
Este archivo se usa para controlar la lógica y la interacción con la página emergente de la extensión

- background.js
Se utiliza para controlar la lógica en segundo plano de la extensión

Estos ultimos dos archivos aunque luzcan similares desempeñan 2 roles completamente diferentes.

