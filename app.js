let amigos = [];

function agregarAmigo() { 
    let amigo = document.getElementById('amigo').value;

    if (amigo === ''){
        alert('Por favor, ingresa un nombre válido');
    }

    amigos.push(amigo); 
    document.getElementById('amigo').value = '';

    console.log(amigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach(a => {
        //ul id=listaAmigos
        document.getElementById('listaAmigos').innerHTML +=`<li> ${a} </li>`;
        console.log(a);
    });    
}
