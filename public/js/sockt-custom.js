var socket = io();

socket.on('connect', function() {

        console.log('conectado al servidor');
    })
    // ON es para escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexion con el servidor');

})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Juan Escamilla',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor: ', mensaje);

})