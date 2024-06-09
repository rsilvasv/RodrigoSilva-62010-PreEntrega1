// ----> SALUDO

function saludar() {
    alert('¡Bienvenidos a mi primer entrega!');
}
 saludar();

const usuarios = [
  { username: 'Pablo', password: '123'},
  { username: 'Charlie', password: '789' },
  { username: 'Liv', password: '111'}
];
console.log('Usuarios registrados: ', usuarios);


// ----> REGISTRO
const registrar = () => {
  const username = prompt('Ingrese su nombre:');
  console.log('Nombre de usuario ingresado:', username);
  const password = prompt('Ingrese su contraseña:');
  console.log('Contraseña ingresada:', password);


  let usuarioExistente = false;

  for (let i = 0; i < usuarios.length; i++) {
    console.log('Comparando con el usuario ingresado:', username);

    if (username === usuarios[i].username) {
      usuarioExistente = true;
      console.log('Este usuario ya existe:', usuarios[i].username);
      break; 
    }
  }

  if (usuarioExistente) {
    alert('El usuario ingresado ya existe, vuelva a intentarlo.');
  } else {
    usuarios.push({ username, password });
    alert('¡Usuario registrado con éxito!');
    console.log('Usuarios registrados después de registrar:', usuarios);
  }
};

// ----> LOGIN

const login = () => {
  const username = prompt('Ingrese su usuario:');
  const password = prompt('Ingrese su contraseña:');

  let usuarioValido = false;

  for (let i = 0; i < usuarios.length; i++) {
    console.log('Comparando con el usuario en la lista:', usuarios[i].username);

    if (username === usuarios[i].username && password === usuarios[i].password) {
      usuarioValido = true;
      console.log('Usuario y contraseña correctos:', usuarios[i].username + " , " + usuarios[i].password);
      break; 
    }
  }

  if (usuarioValido) {
    alert(`Bienvenido, ${username}!`);
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }

  console.log('Usuarios registrados después de login:', usuarios);
};

const menu = () => {
    let opcion;
    do {
      opcion = prompt("¡Bienvenidos al sistema login!\nSeleccione una opción:\n1. Registrar\n2. Login\n3. Salir");
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
