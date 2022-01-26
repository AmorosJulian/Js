const arrayAutos = [
        {id: 1 , marca: 'Nissan' , modelo: 'Versa' , año: 2020 , precioDia: 9300 , img: './src/images/nissan.jpeg'},
        {id: 2 , marca: 'Chevrolet' , modelo: 'Onix' , año: 2018 , precioDia: 7500 , img: './src/images/onix.jpg'},
        {id: 3 , marca: 'Chevrolet' , modelo: 'Corsa' , año: 2014 , precioDia: 5500 , img: './src/images/corsa.jpg'},
        {id: 4 , marca: 'Volkswagen' , modelo: 'Fox' , año: 2020 , precioDia: 7900 , img: './src/images/fox.jpg'},
        {id: 5 , marca: 'Fiat' , modelo: 'Cronos' , año: 2021 , precioDia: 8400 , img: './src/images/cronos.jpg'},
        {id: 6 , marca: 'Volkswagen' , modelo: 'Vento' , año: 2010 , precioDia: 8100 , img: './src/images/vento.jpeg'},
        {id: 7 , marca: 'Renault' , modelo: 'Sandero' , año: 2021 , precioDia: 8250 , img: './src/images/sandero.jpg'},
        {id: 8 , marca: 'Honda' , modelo: 'City' , año: 2017 , precioDia: 8000 , img: './src/images/city.jpg'},
        {id: 9 , marca: 'Toyota' , modelo: 'Corolla' , año: 2019 , precioDia: 8600 , img: './src/images/corolla.jpg'},
        {id: 10 , marca: 'Ford' , modelo: 'Focus' , año: 2020 , precioDia: 9000 , img: './src/images/focus.jpg'},
        {id: 11 , marca: 'Peugeot' , modelo: '208' , año: 2019 , precioDia: 8300 , img: './src/images/208.jpeg'},
        {id: 12 , marca: 'Peugeot' , modelo: '2008' , año: 2019 , precioDia: 9100 , img: './src/images/2008.jpg'}
    ];

    const productos = document.getElementById('productos');

    arrayAutos.forEach((prod) => {
        const article = document.createElement('article');
        article.classList.add('col-4')

        article.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${prod.img} class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${prod.marca} ${prod.modelo}</h5>
            <p>Año: ${prod.año}</p>
            <p>Precio x dia: $${prod.precioDia}</p>
            <p>Kilometros: Libre</p>
            <p>Id de producto: #0000${prod.id}</p>
            <p class="card-text">Unica unidad disponible</p>
            <a href="#" class="btn btn-primary">Reservar</a>
            </div>
        </div>
        `
        productos.append(article);
    })
    const boton = document.createElement('button')
    boton.innerHTML = `
        <button>Boton</button>
    `
    boton.addEventListener('click' , () => {
        alert('Para reservar un vehiculo, primero debe registrarse!');
    })

// formulario de registro para reservar vehiculo

const inputUsuario = document.getElementById("usuario");
const inputClave = document.querySelector("#clave");
const form = document.getElementById("form");

inputUsuario.addEventListener('change' , () => {
    const valor = inputUsuario.value

    if ( valor.length < 6 ) {
        inputUsuario.classList.add('invalido');
    } else {
        inputUsuario.classList.remove('invalido')
        inputUsuario.classList.add('valido');
    }
    
})

inputClave.addEventListener('change' , () => {
    const valor = inputClave.value

    if ( valor.length < 6 ) {
        inputClave.classList.add('invalido');
    } else {
        inputClave.classList.remove('invalido')
        inputClave.classList.add('valido');
    }
    
})

const usuarios = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = inputUsuario.value
    const clave = inputClave.value

    if (usuario.length < 6) {
        alert('El campo de Usuario debe tener al menos 6 caracteres');
        return
    }
    if (clave.length < 6) {
        alert('El campo de Clave debe tener al menos 6 caracteres');
        return
    }

    const usuarioCreado = {
        usuario: usuario,
        clave: clave
    }

    usuarios.push(usuarioCreado);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert(`El usuario ${usuarioCreado.usuario} se registro correctamente! Bienvenido a RENT A CAR`);
    console.log(`Usuario: ${usuarioCreado.usuario} // Clave: ${usuarioCreado.clave}`);
    form.reset();
})

   