function agregar(){	
//11.para eliminar llamada onclick="agregar del #boton"
/*window.onload= function(){
	document.getElementById('boton').addEventListener('click', agregar);
}
ademas eliminar en HTMlel atributo onclick*/

//1.recuperar texto ingresado en textarea y limpiar
var tareas= document.getElementById('tarea').value;
document.getElementById('tarea').value='';

//2.Indicar donde van a estar las tareas que recupere de textarea
var cont= document.getElementById('contenedor');

//3.creamos nuestros nuevos nodos elementos
var nuevasTareas= document.createElement('div');
var textoNuevaTarea= document.createTextNode('tareas');
var elementoContenedor= document.createElement('span');

//4.asignamos padres a nodos creados
elementoContenedor.appendChild(textoNuevaTarea);
nuevasTareas.appendChild(elementoContenedor);
cont.appendChild(nuevasTareas);

//5.creamos checkbox e iconos, les asignamos atributos y clases
var chck= document.createElement('input');
chck.type= 'checkbox';
chck.setAttribute('class','check');
var basura= document.createElement('span');
basura.classList.add('fa','fa-trash-o');
var cora= document.createElement('span');
cora.classList.add('fa','fa-heart');

//6.asignamos padres a nodos creados
nuevasTareas.appendChild(chck);
nuevasTareas.appendChild(basura);
nuevasTareas.appendChild(cora);

//7.agregamos un evento al hacer click, para que elimine o agregue tachado al elementoContenedor
chck.addEventListener('click', function(){
	elementoContenedor.classList.toggle('tachado');
})

//8.removemos el icono basurero al hacerle click sobre el
basura.addEventListener('click', function(){
	cont.removeChild(nuevasTareas);
})

//9.creamos funcion click para el corazon y asignamos clase red de css
cora.addEventListener('click', function(){
	cora.classList.toggle('red');
})

//10.valida que textarea no este vacía al presionar aceptar
if(tareas == null || tareas.length == 0){
	alert('¡Error! Debe ingresar tarea');
	return false;
}
}
