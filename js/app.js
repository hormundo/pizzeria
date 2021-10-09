// MENU RESPONSIVE
var  btnMenuOpen = document.getElementById("btnMenuOpen"),
     btnMenuClose = document.getElementById("btnMenuClose"),
     menuResponsive = document.getElementById("menuBar"),
     enlaces = document.getElementById("enlaces");

     // Click abrir
     btnMenuOpen.addEventListener("click", function () {
          menuResponsive.classList.add("active");
     });

     // Click cerrar
     btnMenuClose.addEventListener("click", function () {
          menuResponsive.classList.remove("active");
     });

     // Cerrar menu con elementos de enlace
     enlaces.addEventListener("click", function () {
          menuResponsive.style.transitionDelay = "0.5s";
          menuResponsive.classList.remove("active");
     });

//SLIDER PRODUCTOS
var contenedor = document.querySelector(".slider"), //igual que el getElementById
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //Evento para botón derecho
    btnDerecho.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth; //El scroll del contenedor va a ser su scroll más el tamaño total del contenedor

    });

    //Evento para botón izquierdo
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth; //El scroll del contenedor va a ser su scroll menos el tamaño total del contenedor
        
    });

//VALIDACIÓN FORMULARIO CONTACTO
var formulario = document.getElementById("formulario");

    function validar(e){
         var inputNombre = document.getElementById("nombre"),
             inputEmail = document.getElementById("email"),
             inputComents = document.getElementById("comentarios"),
             alertSuccess = document.getElementById("alertSuccess"),
             alertError = document.getElementById("alertError");

          if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0){
               e.preventDefault();
               alertError.classList.remove("hide"); /*quita la clase hide*/
               alertError.classList.add("show");

               setTimeout(function(){
                    alertError.classList.remove("show"); /*quita la clase hide*/
                    alertError.classList.add("hide");
               }, 2000);
               // alert("Datos vacíos");
          }
          else{
               e.preventDefault();
               alertSuccess.classList.remove("hide"); /*quita la clase hide*/
               alertSuccess.classList.add("show");

               setTimeout(function(){
                    alertSuccess.classList.remove("show"); /*quita la clase hide*/
                    alertSuccess.classList.add("hide");
               }, 2000);

               // alert("Datos enviados");
               inputNombre.value = "";
               inputEmail.value = "";
               inputComents.value = "";
          }
    }

//Eventos del formulario
formulario.addEventListener("submit", validar);

//BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");

//Detectamos scroll en nuestra página web
window.addEventListener("scroll", function(){
     var scroll = document.documentElement.scrollTop,
         fullSize = document.documentElement.offsetHeight,/* Alto completo de la página */
         sizeVP = document.scrollingElement.clientHeight; /* VP significa view port. Es el alto de lo que se está viendo de la página. Lo que está en pantalla */
     if (scroll > 100){ /* Se muestra el botón si se ha hecho un scroll de más de 100 píxeles*/
          btnTop.classList.add("show");
     }else{
          btnTop.classList.remove("show")
     }

     //Modificar el botón cunado llega al final de la página
     if(fullSize == (scroll + sizeVP)){
          btnTop.classList.add("scrollFinal");
     }
     else{
          btnTop.classList.remove("scrollFinal");
     }
});

//Detectar evento click en el botón
btnTop.addEventListener("click", function(){
     window.scrollTo(0,0); //Hace scroll al principio de la página
});

//Detectar evento en el logo
logo.addEventListener("click", function(){
     window.scrollTo(0,0); //Hace scroll al principio de la página
});