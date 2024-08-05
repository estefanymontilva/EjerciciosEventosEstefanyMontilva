let notasGuardadas = [{
    id:1,
    titulo:'sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false

},

{
    id:2,
    titulo:'comer',
    texto: 'quedo comida de ayer',
    realizada: true
    
    
}]

let idGlobal = 1
function guardarNota() {
    const titulo = document.getElementById('tituloNota').value;
    const texto = document.getElementById('textoNota').value;

    if (titulo && texto) {
        agregarNota(titulo, texto);
        limpiarCampos();
    } else {
        alert('Por favor, rellena ambos campos.');
    }
}

function limpiarCampos() {
    document.getElementById('tituloNota').value = '';
    document.getElementById('textoNota').value = '';
}

function agregarNota(titulo, texto) {
    idGlobal += 1;
    const nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notasGuardadas.push(nuevaNota);
    pintarNotas();
}


function pintarNotas() {
    const contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.innerHTML = '';

    if (notasGuardadas.length === 0) {
        contenedorNotas.innerHTML = '<p>No hay notas para mostrar.</p>';
        return;
    }

    const filtroTexto = document.getElementById('filtroTexto').value.toLowerCase();
    const filtroRealizadas = document.getElementById('filtroRealizadas').checked;

    const notasFiltradas = notasGuardadas.filter(nota => {
        const textoMatch = nota.titulo.toLowerCase().includes(filtroTexto) || nota.texto.toLowerCase().includes(filtroTexto);
        const realizadaMatch = !filtroRealizadas || nota.realizada;
        return textoMatch && realizadaMatch;
    });

    notasFiltradas.forEach(nota => {
        const notaDiv = document.createElement('div');
        notaDiv.className = 'nota';
        notaDiv.innerHTML = `

        <div class="card" style="width: 18rem;">
     
           <div class="card-body">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                <h5 class="card-title">${nota.titulo}</h5>
            </label>
          <p class="card-text">${nota.texto}</p>
          <button class="btn btn-primary" onclick="borrarNota(${nota.id})">Borrar Nota</button>
        </div>
      </div>
        `;
        contenedorNotas.appendChild(notaDiv);
    });
}

function borrarNota(id) {
    notasGuardadas = notasGuardadas.filter(nota => nota.id !== id);
    pintarNotas();
}

function marcarRealizada(id) {
    const nota = notasGuardadas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
}
function filtrarRealizadas(array) {
    return array.filter(nota => nota.realizada);
}

function filtrarPorTexto(array, texto) {
    if (!texto) return array;
    return array.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}


document.getElementById('filtroTexto').addEventListener('input', pintarNotas);
document.getElementById('filtroRealizadas').addEventListener('change', pintarNotas);


pintarNotas();
