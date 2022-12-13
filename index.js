

//variables
const agregar=document.querySelectorAll('button')[0]
const borrarTodo=document.querySelectorAll('button')[1]
const caja2=document.querySelector('.caja2')


//variables input
const nombre=document.querySelector('.nombre')
const telefono=document.querySelector('.telefono')
const email=document.querySelector('.email')

//array de datos
let datos=[]

//eventos
agregar.addEventListener('click',agregando)
borrarTodo.addEventListener('click',borrarTODO)
caja2.addEventListener('click',eliminarUnidad)

//funciones
function agregando(){
 
  if(nombre.value.trim() ==''||telefono.value===''||email.value===''){
    alert('llene todo las cacillas')

  }else{
    let datosObejto={
      name:nombre.value,
      phone:telefono.value,
      email:email.value 
    }

    let repetido=false
    for (let x = 0; x < datos.length; x++) {
      if(datos[x].name==nombre.value){
         alert('usuario repetido')
         return
      }
     
    }
    if(repetido==false){
      
      datos.push(datosObejto)
    crearHTML(datos)
          limpiar()
    
    }
    
  }

}
function limpiar(){
  nombre.value=''
  telefono.value=''
  email.value=''
  nombre.focus()
}
function borrarTODO(){
  nombre.value=''
  telefono.value=''
  email.value=''
  nombre.focus()
  datos=[]
  caja2.innerHTML=''

}
function crearHTML(infor){
  caja2.innerHTML=''
  for (let x = 0; x < infor.length; x++) {
     const row=document.createElement('div')
     row.classList.add('contenedor')
     row.innerHTML=`<h4>${infor[x].name}</h4><p class="nTelefono">${infor[x].phone}</p><p class="nEdad">${infor[x].email}</p><p class="borrarU">X</p>  
     `

    caja2.appendChild(row)
  }
}
function eliminarUnidad(e){
  if(e.target.className!=='borrarU'){
  
     return
  }else{
    const nombreB=e.target.parentElement.childNodes[0].textContent
    console.log(nombreB)

    const newArray= datos.filter(dat=>dat.name!=nombreB)

    datos =newArray
    
        crearHTML(datos)
}

}