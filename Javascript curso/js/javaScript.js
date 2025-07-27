function agregarTarea(){
    //pongo el valor del imput en esta variable
    let tarea = document.getElementById("inputTarea").value;
    
    //verifico que no este vacio
    if(tarea == ""){
        alert("La tarea no puede estar vacia");
        return;
    }

    //agregamos la nueva tarea a la lista
    let agregacionTarea = document.createElement("li");
    agregacionTarea.textContent = tarea + " ";

    //creamos el botom eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function eliminar(){agregacionTarea.remove();};

    //ahora usamos los appendChild para poder mostrar en la pagina
    //sicronizamos el hijo boton al padre tarea
    agregacionTarea.appendChild(btnEliminar);

    //ahora sicronizamos este padre agregacion tarea que sera hijo del HTML
    document.getElementById("listaTareas").appendChild(agregacionTarea);

    //limpiamos el textField
    document.getElementById("inputTarea").value = "";
}