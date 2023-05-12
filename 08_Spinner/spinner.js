const generar=()=>{
    let n=parseInt(document.querySelector("#n").value);
      let div=document.querySelector("#res");
      document.querySelector("#vn").innerHTML=n;
       div.innerHTML="<img src='hola.gif' width='200px' height=200px'>";
      
      setTimeout(()=>{
        tablaHTML="<table>"
        for(i=1; i<=10; i++){
          tablaHTML +="<tr><td>" +n+ "x" +i+ "=" +(i*n)+"</td></tr>";
        }
        div.innerHTML=tablaHTML + "</table>";
      },2000);
    }