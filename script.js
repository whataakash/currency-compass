const api="https://api.frankfurter.dev/v2/rates?base=USD"
let v1=document.getElementById("dataset")
let mc=document.querySelector(".maincontent")
let RealTimeChart=document.querySelector(".RealTimeChart")
fetch(api)
.then((res)=>res.json())
.then((data)=>{
console.log(data)

for(let i=0;i<data.length;i++){
        v1.innerText+=`1 ${data[i].base} = ${data[i].rate} ${data[i].quote} \n`
        RealTimeChart.appendChild(v1)
}
})