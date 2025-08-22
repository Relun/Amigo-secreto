let amigos = [];

function agregarAmigo() { 
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(amigo); 
    document.getElementById('amigo').value = '';

    console.log(amigos);
    mostrarAmigos();
}

function mostrarAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach(a => {
        document.getElementById('listaAmigos').innerHTML +=`<li> ${a} </li>`;
        console.log(a);
    });    
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('No hay amigos para hacer el sorteo, ingresa algunos amigos');
        return;    
    }

    let amigoSorteado =  Math.floor(Math.random() * amigos.length);
    document.getElementById('resultado').innerHTML =`Tu amigo secreto es: ${amigos[amigoSorteado]}`;
    console.log(amigoSorteado);
}