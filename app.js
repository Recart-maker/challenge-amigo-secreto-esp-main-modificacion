// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array que contendrá los nombres de los amigos

function agregarAmigo() { // Función que agrega un amigo a la lista
    const input = document.getElementById('amigo'); // Obtenemos el input
    const nombre = input.value.trim(); // Obtenemos el valor del input y eliminamos los espacios en blanco al inicio y al final
    if (nombre) { // Si el nombre no está vacío
        amigos.push(nombre); // Agregamos el nombre al array de amigos
        actualizarListaAmigos(); // Actualizamos la lista de amigos en el DOM
        input.value = ''; // Limpiamos el input
    }
}

function actualizarListaAmigos() { // Función que actualiza la lista de amigos en el DOM
    const lista = document.getElementById('listaAmigos'); // Obtenemos el elemento <ul> donde se mostrarán los amigos
    lista.innerHTML = ''; // Limpiamos la lista
    amigos.forEach((amigo, index) => { // Recorremos el array de amigos
        const li = document.createElement('li'); // Creamos un elemento <li>
        li.textContent = amigo; // Asignamos el nombre del amigo al elemento <li>
        lista.appendChild(li); // Agregamos el elemento <li> a la lista
    });
}

function sortearAmigo() { // Función que sortea los amigos secretos
    if (amigos.length < 2) { // Si hay menos de dos amigos
        alert('Debe haber al menos dos amigos para sortear.'); // Mostramos un mensaje de alerta
        return; // Salimos de la función
    }

    const resultado = document.getElementById('resultado'); // Obtenemos el elemento <ul> donde se mostrarán los resultados
    resultado.innerHTML = ''; // Limpiamos la lista de resultados

    let amigosCopia = [...amigos]; // Creamos una copia del array de amigos
    amigos.forEach(amigo => {  // Recorremos el array de amigos
        let indiceAleatorio;  // Variable que almacenará el índice aleatorio de la copia del array de amigos
        do {
            indiceAleatorio = Math.floor(Math.random() * amigosCopia.length);  // Generamos un índice aleatorio
        } while (amigosCopia[indiceAleatorio] === amigo);  // Mientras el amigo secreto sea igual al amigo actual, generamos un nuevo índice aleatorio

        const li = document.createElement('li');  // Creamos un elemento <li>
        li.textContent = `${amigo} es el amigo secreto de ${amigosCopia[indiceAleatorio]}`; // Asignamos el mensaje al elemento <li>
        resultado.appendChild(li);  // Agregamos el elemento <li> a la lista de resultados

        amigosCopia.splice(indiceAleatorio, 1);  // Eliminamos el amigo secreto de la copia del array de amigos
    });
}

