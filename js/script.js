$("#formLogin").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function(respuesta) {
            let datos = respuesta;
            let nombre;
            for (let item of datos) {
                if (item.email == $("#inputUsuarioL").val()) {
                    nombre = item.name;
                }
            }
            if (nombre != null) {
                alert("Usuario encontrado:" + nombre);
            } else {
                alert("Usuario no encontrado");
            }
        },
        error: function() {
            console.log("no se ha podido pbtener informacion");
        }
    });
});