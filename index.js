// apps/pollsstudio/index.js - Aplicación Polls.Studio que maneja múltiples dominios
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9004;

// Middleware para manejar las rutas basadas en el dominio de origen
app.use((req, res, next) => {
    const domain = req.headers.host.toLowerCase(); // Obtiene el dominio desde el request y lo convierte a minúsculas

/*
elbuentono.com - squarespace
elbuentono.com.mx - squarespace
mexicoencuesta.com - squarespace
mexicoencuesta.mx - squarespace
méxicoencuesta.com - squarespace
wreckthemedia.com - fatcow.com
wreckthemediac.com - fatcow.com
*/

    // Lógica para redirigir a diferentes secciones según el dominio
    switch (domain) {
        case 'elbuentono.com':
        case 'elbuentono.com.mx':
            // Redirigir a la sección específica para El Buen Tono
            res.redirect('/elbuentono');
            break;
        case 'mexicoencuesta.com':
        case 'mexicoencuesta.mx':
        case 'méxicoencuesta.com':
            // Redirigir a la sección específica para México Encuesta
            res.redirect('/mexicoencuesta');
            break;
        case 'wreckthemedia.com':
        case 'wreckthemediac.com':
            // Redirigir a la sección específica para Wreck The Media
            res.redirect('/wreckthemedia');
            break;
        default:
            // Redirigir a una página por defecto o mostrar un error si el dominio no es reconocido
            res.redirect('/not-found');
            break;
    }
});

// Definición de las rutas específicas para cada sección

app.get('/elbuentono', (req, res) => {
    // Renderiza o maneja la lógica para elbuentono.com y elbuentono.com.mx
    res.send('Bienvenido a El Buen Tono.');
});

app.get('/mexicoencuesta', (req, res) => {
    // Renderiza o maneja la lógica para mexicoencuesta.com, mexicoencuesta.mx, y méxicoencuesta.com
    res.send('Bienvenido a México Encuesta.');
});

app.get('/wreckthemedia', (req, res) => {
    // Renderiza o maneja la lógica para wreckthemedia.com y wreckthemediac.com
    res.send('Bienvenido a Wreck The Media.');
});

app.get('/not-found', (req, res) => {
    // Muestra una página de error o un mensaje de dominio no reconocido
    res.status(404).send('Dominio no reconocido.');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Polls.Studio está escuchando en el puerto ${PORT}`);
    // Aquí puedes agregar la lógica para reportarte con Netget si es necesario
});