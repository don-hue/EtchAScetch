const container=document.querySelector('#container');
const btn=document.querySelector('#btn');
let strDimension="";
let test=0
let priorGridCount=0;


function colorHover(){
    console.log("hello");
}


//-----------------------calculate rows----------------------------
function multi(){
    const input=document.getElementById('margin').value;
    let heightWidth=0;

    if (input>0 && input<11){ 
        row=input*input;
        heightWidth=(300/input)-2;
        strDimension=heightWidth.toString()+"px";
        return row;
    }
    else {
        error=document.getElementById('margin').placeholder="Max Rows are 10";
    }
}
//-----------------------------------------------------------------

//----------------------create grid and play---------------------------------
function createGrid() {
    if(test==0){
        for(i=0;i<multi();i++) {
            const div=document.createElement('div');
            div.id=('square');
            container.appendChild(div).classList.add('box');
            div.style.height=strDimension;
            div.style.width=strDimension;
        }
        test=1;
        priorGridCount=i;
    }
    else if(test==1){
        for(i=0;i<priorGridCount; i++){
            const nice=document.getElementById('square');
            container.removeChild(nice);
        }
        for(i=0;i<multi();i++) {
            const div=document.createElement('div');
            div.id=('square');
            container.appendChild(div).classList.add('box');
            div.style.height=strDimension;
            div.style.width=strDimension;
        }
        priorGridCount=i;
    }
    function greyColor() {
        const boxs=container.querySelectorAll('.box');
        boxs.forEach(box => box.addEventListener('mouseover',()=> {
            let R=Math.floor(Math.random()*255);
            let G=Math.floor(Math.random()*255);
            let B=Math.floor(Math.random()*255);
            box.style.background = `rgb(${R},${G},${B})`;
        }))  
    }
    greyColor();
}
btn.addEventListener("click", createGrid);



