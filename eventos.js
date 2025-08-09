console.log('eventos.js cargado');
const cont = document.getElementById('contenedor');
if (!cont) {
  console.error('No se encontró #contenedor');
} else {
  cont.addEventListener('click', (e)=>{
    if (e.target.id !== 'btn') alert('Hola! Soy el div');
  });
}