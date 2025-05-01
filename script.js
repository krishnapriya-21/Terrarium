//  Creating a Function Drag Element. passing  Plant ID ( Terarrium Object ID) as Argument in DOM and returns ID's Respective Element.
// This function will make the element drag


function dragElement(terrariumElement){

//  Creating variables to store cursor  current position and find Initial Position using Change In cursor position on x and y axis

let InitialPosX =0;
let InitialPosY=0;
let currentPosX=0;
let currentPosY=0;

terrariumElement.onpointerdown= PointerDrag;


function PointerDrag(e){

  e.preventDefault();
  console.log(e);

  currentPosX= e.clientX;
  currentPosY= e.clientY;

  document.onpointermove= ElementDrag;
  document.onpointerup= StopDrag;
  
}

function ElementDrag(e){

InitialPosX= currentPosX-e.clientX;
InitialPosY= currentPosY-e.clientY;

currentPosX=e.clientX;
currentPosY= e.clientY;

terrariumElement.style.top= (terrariumElement.offsetTop-InitialPosY) +"px";
terrariumElement.style.left= (terrariumElement.offsetLeft-InitialPosX) + "px";

}

function StopDrag(){
 
  document.onpointerup=null;
  document.onpointermove= null;

}

}

// Selecting Elements to Give Drag Access

// Passing HTML ID of DragElement and receiving Every Dragable Elements 

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

