var audio = document.getElementById("myaudio");
  audio.volume = 0.4;

function typeWrite(elemento1, elemento2, elemento3){
    const texto1Array = elemento1.innerHTML.split('');
    elemento1.innerHTML = ' ';
    const texto2Array = elemento2.innerHTML.split('');
    elemento2.innerHTML = ' ';
    const texto3Array = elemento3.innerHTML.split('');
    elemento3.innerHTML = ' ';

    texto1Array.forEach(function(letra, i){ 

    setTimeout(function(){
        elemento1.innerHTML += letra;
    }, 75 * i)

  });

  texto2Array.forEach(function(letra, i){   
      
    setTimeout(function() {
    setTimeout(function(){
        elemento2.innerHTML += letra;
    }, 75 * i)}, 3000);

  });

  texto3Array.forEach(function(letra, i){   

    setTimeout(function() {
    setTimeout(function(){
        elemento3.innerHTML += letra;
    }, 75 * i)}, 7000);

  });

  setTimeout(()=>{
    document.getElementById("icons").innerHTML = " <a href='https://www.instagram.com/dementadores.ofc/'><i class='fa-brands fa-instagram'></i></a><a href='https://www.tiktok.com/@dementadores.ofc'><i class='fa-brands fa-tiktok'></i></a>"
}, 9000);

  setTimeout(()=>{
    document.getElementById("text4").style.display = "inline";
}, 11000);

}
const texto1 = document.querySelector('.text1');
const texto2 = document.querySelector('.text2');
const texto3 = document.querySelector('.text3');

typeWrite(texto1, texto2, texto3);