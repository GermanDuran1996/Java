alert('Bienvenido a la casa de cambio');
alert('Estamos a tu completa disposición ');
confirm('¿Necesitas cambiar dinero?');
confirm('Tenemos para cambiar dolares , reales y euros')
prompt('Ingresa ingresa el monto y que tipo de moneda que necesitas cambiar');
alert('Tambien tenemos un nuevo sistema de creditos sin tasa de interes')
alert('A continuacion le dejaremos un detalle')

let nombre = prompt ('Ingresa tu nombre completo')

let cantidad = prompt ('Bienvenido a la casa de cambio' + nombre +',ingresa la cantidad de devisas que vas a ingresar para sacar tu promedio')
let suma = 0
let nota = 0

for (let d = 1 ; d <= cantidad ; d++ ){
    let nota = parseInt(prompt ('ingresa tu nota'))
    suma = suma+nota
}

let promedio= suma/cantidad;
if (promedio >= 7){
    alert(nombre + 'felicitaciones , tu promedio supera el minimo requerido para poder ingresar, tu nota promedio final es de' + promedio)
}

else  {
    nombre + 'Lamentamos informarte que tu promedio es de' + promedio + 'y no supera el minimo requerido para apobar' 
}



function convertir (){
    let valor = parseInt (document.getElementById("valor").valeu);
    let resultado = 0;
    let dolares = 147;
    let real = 25;
    var euro = 240;
    if (document.getElementById("uno").checked){
        resultado = valor / dolares ;
        confirm("El cambio de pesos a dolares es: $" + resultado);
    }


else if(document.getElementById(dos).checked){
    resultado = valor / real;
    confirm ("El cambio de reales es: R" + resultado);

}

else if (document.getElementById(tres).checked){
    resultado = valor / euro;
    confirm ("El cambio de euros es: E" + resultado);
}

else {
    confirm ("Tiene s que com,pletar todos los requisitos necesarios");
}


}

/*Variables 2da Entrega*/


let sobrenombre;                 
let cuotasTres;
let cuotasSeis;
let cuotasDoce;
let sueldo;
let maxCredito;
let credito;
let montoCuotas;
let cantCuotas;
let arregloContenedor;
let opcion;
let terminar;
let montoFiltrado;
let filtrados;
let busqueda;
let result;

/* clases */ 

class Credito {
    constructor(nombre,sueldo,monto,cuotas,valorCuota){
        this.sobrenombre=nombre;        
        this.sueldo=sueldo;
        this.monto=monto;
        this.cuotas=cuotas;
        this.valorCuota=valorCuota;
    }
    verInfo(){
        console.log(`el nombre es : ${this.sobrenombre} y el credito solicitado es  : ${this.monto} en ${this.cuotas} cuotas de ${this.valorCuota}`);
    }
}

function comprobarNombre(){                                          
    let nombreAux = prompt('escriba el nombre');
    while (!isNaN(nombreAux)){              
        alert('esta ecribiendo numeros escriba un nombre')                          
        nombreAux =(prompt('Escriba el nombre '));
    }
    return nombreAux;
}

function comprobarNumero(texto){                                        
    let numero =  prompt('escriba en numero : '+texto);
    while (isNaN(numero)){                                        
        alert('esta escribiendo un texto escriba un numero'); 
        numero =(prompt('escriba en numero : '+texto));
    }  
    return numero
}

function comprabarCreditoMenorAMax (maxCredito){                                              
        alert('cual es el monto que desea sacar ?');
        let creditoAux = comprobarNumero('el monto a sacar');                                        
        creditoAux=parseInt(creditoAux);
        while (creditoAux > maxCredito){
            alert('usted no puede sacar mas credito de lo permitido ');
            alert('el credito maximo que usteded puede sacar es de '+ maxCredito);
            creditoAux = comprobarNumero('el monto a sacar');                                       
            creditoAux=parseInt(creditoAux);
        }        
        return creditoAux;

}

function afectacionMensualPermitida(sueldo,credito){                        
    if ((sueldo *0.2)>=(credito/3)){                
        cuotasTres =true;
    } 
    if ((sueldo *0.2)>=(credito/6)){            
        cuotasSeis =true;
    } 
    if ((sueldo *0.2)>=(credito/12)){            
        cuotasDoce =true;
    }     
}

function cantidadCuotasPermitida (cuotasTres,cuotasSeis,cuotasDoce,credito){                            
    let eleccion;
    let correcto;
    if ((cuotasTres==true) && (cuotasSeis==true) && (cuotasDoce==true)) {                                  
        correcto=true;
        while (correcto){
            alert('usted lo puede realizar en 3 , 6 y 12 cuotas elija en cuantas sacara el credito');            
            eleccion = comprobarNumero('de cuotas');     
            eleccion = parseInt(eleccion);
            switch (eleccion){
                case 3:                
                    alert('son 3 cuotas de '+(credito/3));  
                    correcto=false;                           
                break;
                case 6:               
                    alert('son 6 cuotas de '+(credito/6));  
                    correcto=false;                                                 
                break;
                case 12:                        
                        alert('son 12 cuotas de '+(credito/12));     
                        correcto=false;                                                 
                break;
                default:
                        alert('no esta ingresando 3, 6 , o 12 ');                 
                break;             
            } 
        }        
    }
    else if ((cuotasTres == false) && (cuotasSeis == true) && (cuotasDoce == true)){                        
        correcto=true;
        while (correcto){
            alert('usted lo puede realizar en 6 y 12 cuotas elija en cuantas cuotas lo quiere realizar ');
            eleccion = comprobarNumero('de cuotas');     
            eleccion = parseInt(eleccion);
            switch (eleccion){            
                case 6:               
                    alert('son 6 cuotas de '+(credito/6));  
                    correcto=false;                                                 
                break;
                case 12:
                    alert('son 12 cuotas de '+(credito/12));    
                    correcto=false;                                             
                break;
                default:    
                    alert('no esta ingresando  6 , o 12 ');              
                break; 
            }
        }    
    }   
    else if ((cuotasTres == false) && (cuotasSeis == false) && (cuotasDoce == true)){        
        eleccion=12;
        alert('usted lo puede realizar en 12 cuotas ');
        alert('son 12 cuotas de '+(credito/12));                                      
    }
    return eleccion;     
}


/*Sistema de creditos*/

terminar =true; 
arregloContenedor=[];
while (terminar){    
    alert('elija una opcion : '); 
    opcion = comprobarNumero("-1 cargar creditos (hasta que el nombre sea Finalizar), -2 borrar creditos ,-3 buscar un credito,-4 mostrar todos los creditos,-5 filtrar creditos por monto sacado ,-6 terminar");
    switch (opcion){
        case "1":                                                                                   
            nombre='';            
            while (nombre !='Finalizar') { 
                alert('Nuevo Credito');   
                nombre =comprobarNombre();       
                if (nombre !='Finalizar' ){                                                           
                    alert('escriba el sueldo que gana mensualmente');
                    sueldo = comprobarNumero('el sueldo');
                    sueldo=parseInt(sueldo); 
                    maxCredito = sueldo * 2 ;                                                    
                    alert('el credito maximo que usteded puede sacar es de '+ maxCredito); 
                    cuotasTres = false;
                    cuotasSeis = false;
                    cuotasDoce = false;               
                    credito= comprabarCreditoMenorAMax (maxCredito);        
                    afectacionMensualPermitida(sueldo,credito);       
                    cantCuotas = cantidadCuotasPermitida (cuotasTres,cuotasSeis,cuotasDoce,credito);
                    montoCuotas=credito/cantCuotas;
                    arregloContenedor.push(new Credito(nombre,sueldo,credito,cantCuotas,montoCuotas));       
                }
            }        
        break;        
        case "2":                                                                               
                alert("Escriba un nombre para borrar el Credito");
                nombre =comprobarNombre(); 
                result = arregloContenedor.findIndex(item => item.nombre === nombre);                
                if (result===-1){
                    alert("no se encuentra el credito a Borrar");                    
                } 
                else{
                    arregloContenedor.splice(result,1);
                    alert("se borro perfectamente"); 
                }
        break;
        case "3":                                                                                           
                alert("Escriba un nombre para buscar el credito");
                nombre =comprobarNombre();    
                console.log("===========================Mostrar Credito Buscado ===========================");            
                busqueda = arregloContenedor.find(item => item.nombre === nombre);                
                if (busqueda===undefined){
                    alert("no se encuentra el credito a Buscar");
                }
                else{                                    
                    busqueda.verInfo();
                }
        break;
        case "4":          
            console.log("===========================Mostrar Contenido Arreglo ===========================");                                                        
            arregloContenedor.forEach((element)=>{
                element.verInfo();
            });
        break;
        case "5":                                                                         
                alert("escriba un monto para filtrar en la busqueda");
                montoFiltrado = comprobarNumero("monto a filtrar");
                console.log("===========================Mostrar Contenido Arreglo Filtrado ===========================");
                filtrados = arregloContenedor.filter(item => item.monto > montoFiltrado);                
                filtrados.forEach((element)=>{ 
                    element.verInfo();
                })                                
        break;
        case "6":
              terminar=false;                           
        break;
    }
}

const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }

  carrito.push(newItem)

  renderCarrito()
} 
/* Entrgega numero 3*/

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}