const container=document.querySelector('#container');
const btn=document.querySelector('#btn');
let strDimension="";
let test=0
let priorGridCount=0;

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
function createGrid() {
    if(test==0){
        for(i=0;i<multi();i++) {
            let i=document.createElement('div');
            i.id=('square');
            container.appendChild(i);
            i.style.height=strDimension;
            i.style.width=strDimension;
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
            let i=document.createElement('div');
            i.id=('square');
            container.appendChild(i);
            i.style.height=strDimension;
            i.style.width=strDimension;
        }
        priorGridCount=i
    }
}

btn.addEventListener("click", createGrid);

