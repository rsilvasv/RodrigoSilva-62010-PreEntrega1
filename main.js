// ----> SALUDO
// Funcion Saludar

function saludar() {
    alert('¡Bienvenidos a mi primer entrega!');
}
saludar();

const usuarios = [
    { username: 'Pablo', password: '123456'},
    { username: 'Charlie', password: '789' },
    { username: 'Liv', password: '111'}
];
console.log(usuarios.length);

const registrar = () => {
    const username = prompt('Ingrese su nombre:')
    const password = prompt('Ingrese su contraseña:')

    const usuarioExistente = usuarios.find(user => user.username === username)
    if (usuarioExistente){
        alert('El usuario ingresado ya existe')
    }else {
        usuarios.push({username, password});
        alert('¡Usuario registrado con exito!')
        console.log("Usuarios registrados:", usuarios);
    }
}


// ----> LOGIN
// Funcion para logear a un usuario

const login = () => {
    const username = prompt('Ingrese su usuario:')
    const password = prompt('Ingrese su contraseña:')

    const usuario = usuarios.find( user => user.username === username && user.password === password)
    if (usuario){
        alert("Bienvenido, ${username}!");
        console.log(usuario)
    }else {
        alert("Nombre de usuario o contraseña incorrectos.")
    }
};

const menu = () => {
    let opcion;
    do {
      opcion = prompt("Seleccione una opción:\n1. Registrar\n2. Login\n3. Salir");
      switch(opcion) {
        case '1':
          registrar();
          break;
        case '2':
          login();
          break;
        case '3':
          alert("Saliendo...");
          break;
        default:
          alert("Opción no válida. Intente de nuevo.");
      }
    } while(opcion !== '3');
};

menu();
