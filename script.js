async function foo(){
let cc=document.getElementById("main").value;
console.log(cc);
let res=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${cc}`);
let res1=await res.json();
console.log(res1);

const container=document.querySelector(".container")
let html="";
for(let i=0;i<res1.length;i++)
{
    html+=`<div class="card">
    <img src=${res1[i]?.image_link} alt="make up">
        <p>${res1[i]?.brand} </p>
        <p>${res1[i]?.name} </p>
        <p>${res1[i]?.price}</p>
        <p>${res1[i]?.product_link}</p>
        <p>${res1[i]?.description}</p>
    </div>`
}

 container.innerHTML=html       

}
