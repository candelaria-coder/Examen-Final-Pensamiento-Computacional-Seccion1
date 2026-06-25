//array de emojis
let emojis = ['🫀','⚜️','🍁','🌿','🍥'];

//variable para guardar el indice del arreglo de emojis
let indice;

function setup() {
  createCanvas(400, 400);
  
  
  textAlign(CENTER, CENTER);
  textSize(100)
}

function draw() {
  background(230, 100, 24);
  
  //mostrar el emoji segun el indice
  text(emojis[indice], width / 2, height / 2);
}

function mousePressed() { //funcion para randomizar el indice del array
  
  // al hacer click vamops a determinar un numero random entre el 0  y el largo del array
  indice = floor(random(emojis.length));
  
  //vamos a escribir
  console.log(indice)
}