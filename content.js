
//Appena il documento viene caricato, assegniamo al body la funzione
//addElement, che andiamo a definire

document.body.onload = addElement;

function addElement () {
  //Creiamo i due elementi div

  const newDiv1 = document.createElement("div1");
  const newDiv2 = document.createElement("div2");

  //Gli diamo gli attributi statici; il colore nero, la larghezza,
  //la posizione fixed e il z-index che deve necessariamente essere così 
  //alto, altrimenti alcuni elementi non verranno oscurati

  newDiv1.setAttribute('style', 'background-color: black;  width: 100%; position: fixed; top: 0; left: 0; z-index: 100000; ');
  newDiv2.setAttribute('style', 'background-color: black;  width: 100%; position: fixed; bottom: 0; left: 0; z-index: 100000;  ');
  
  //Questi sono i parametri altezza e opacità, che
  //saranno modificabili in futuro da options.html

  const parametroAltezza = 200;
  const opacity = 0.93;

  //Settiamo l'opacità dei div al valore scelto in precedenza

  newDiv1.style.opacity = opacity;
  newDiv2.style.opacity = opacity;
  
  //Agiamo sul documento, quando si muove il mouse parte
  //una funzione che assegna all'altezza dei divisori 1 e 2
  //le coordinate y del mouse + il numero di pixel che abbiamo
  //scelto in precedenza con parametroAltezza

  document.onmousemove = function(event) {
    const altezza1 = -parametroAltezza + event.clientY;
    newDiv1.style.height = altezza1 + 'px';
    const altezza2 = +parametroAltezza + event.clientY;
    newDiv2.style.height = "calc(100% - "+ altezza2 + 'px';
    
  }
  
  //Infine aggiungiamo i div che abbiamo appena creato al DOM

  document.body.appendChild(newDiv1);
  document.body.appendChild(newDiv2);

}