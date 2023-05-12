let r1=document.querySelector("#r1")
let r2=document.querySelector("#r2")
let g1=document.querySelector("#g1")
let g2=document.querySelector("#g2")
let b1=document.querySelector("#b1")
let b2=document.querySelector("#b2")
let fondo=document.querySelector("#body")

r1.oninput=()=>{cambiarFondo()}
r2.oninput=()=>{cambiarFondo()}
g1.oninput=()=>{cambiarFondo()}
g2.oninput=()=>{cambiarFondo()}
b1.oninput=()=>{cambiarFondo()}
b2.oninput=()=>{cambiarFondo()}

const cambiarFondo=()=>{
    let vr1=parseInt(r1.value)
    let vr2=parseInt(r2.value)
    let vg1=parseInt(g1.value)
    let vg2=parseInt(g2.value)
    let vb1=parseInt(b1.value)
    let vb2=parseInt(b2.value)
    document.querySelector("#vr1").innerHTML=vr1
    document.querySelector("#vr2").innerHTML=vr2
    document.querySelector("#vg1").innerHTML=vg1
    document.querySelector("#vg2").innerHTML=vg2
    document.querySelector("#vb1").innerHTML=vb1
    document.querySelector("#vb2").innerHTML=vb2
    body.style.background=`linear-gradient(90deg, rgba(${vr1},${vb1},1)0%, rgba(${vr2},${vb2},1)100%)`
}