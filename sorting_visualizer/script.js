const n=50;
const arr=[];
function init(){
for(let i=0;i<n;i++){
    arr[i]=Math.random();

}
showBars();
}
function play(){
    const copy=[...arr];
    const swaps=bubbleSort(copy);
    animate(swaps);
    showBars();
}
function animate(swaps){
    if(swaps.length==0){
        showBars();
        return;
    }
    const [i,j]=swaps.shift();
    [arr[i],arr[j]]=[arr[j],arr[i]];
    showBars([i,j]);
    setTimeout(function()  {
        animate(swaps);
    }, 50);
}
function bubbleSort(arr){
    const swaps=[];
do{
    var swapped=false;
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
            swapped=true;
            swaps.push([i-1,i]);
            [arr[i-1],arr[i]]=[arr[i],arr[i-1]];
        }
    }
}while(swapped);
return swaps;
}
function showBars(indices){
    container.innerHTML="";
for(let i=0;i<arr.length;i++){
    const bar=document.createElement("div");
    bar.style.height=arr[i]*100+"%";
    bar.style.width="5px";
    bar.style.backgroundColor="purple";
    if(indices && indices.includes(i)){
        bar.style.backgroundColor="white";
    }
    container.appendChild(bar);
}
}