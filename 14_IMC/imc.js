let peso =document.querySelector("#peso")
let altura =document.querySelector("#altura")
let res=document.querySelector("#res")
let con=document.querySelector("#con")
peso.oninput=()=>{calcular()}
altura.oninput=()=>{calcular()}

const calcular=()=>{
    let vpeso=parseInt(peso.value)
    let valtura=parseFloat(altura.value)
    document.querySelector("#vpeso").innerHTML=vpeso+"Kg"
    document.querySelector("#valtura").innerHTML=valtura+"m"
    
    res.innerHTML="<img src='imc.gif' width='200px' height='100px'>";
    setTimeout(()=>{   
     let imc=vpeso/(valtura*valtura);
     let con="";
     if(imc<18.5){ con="BAJ0 PES0" }
     else if(imc>=18.5&&imc<25){ con="NORMAL" }
     else if (imc>=25&&imc<30) { con="SOBREPESO" } 
     else if (imc>=30&&imc<35) { con="OBESIDAD 1"}
     else if (imc>=35&&imc<40){ con="OBESIDAD 2"  }
     else{con="OBESIDAD 3"}
     res.innerHTML=`<div>
     IMC
     <div><label>${imc.toFixed(2)}</label></div>
     CONDICIÓN
     <div><label>${con}</label></div>
     </div>`
},2000);
}