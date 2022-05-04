
let maindiv = document.createElement("div");
document.body.appendChild(maindiv);

let heading =document.createElement("h1");
heading.innerText="Call the Kural For Better Life";
maindiv.appendChild(heading);

let heading1 =document.createElement("h3");
heading1.innerText="Enter The Thirukural No.";
maindiv.appendChild(heading1);

// let inputdiv=document.createElement("div");
// document.body.appendChild(inputdiv);

let input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","input");
maindiv.appendChild(input1);


let btn = document.createElement("button");
btn.setAttribute("type","submit");
btn.innerText="Search";
btn.setAttribute("onclick","thirukural(input1.value)");
maindiv.appendChild(btn);

let displaydiv=document.createElement("div");
displaydiv.classList.add("container");
document.body.appendChild(displaydiv);

let number =document.createElement("p");
displaydiv.appendChild(number);

let sect =document.createElement("p");
displaydiv.appendChild(sect);

let chap=document.createElement("p");
displaydiv.appendChild(chap);

let chaptamil=document.createElement("p");
displaydiv.appendChild(chaptamil);

let line1=document.createElement("p");
displaydiv.appendChild(line1);

let line2=document.createElement("p");
displaydiv.appendChild(line2);

let tam_exp=document.createElement("p");
displaydiv.appendChild(tam_exp);

let sect_eng=document.createElement("p");
displaydiv.appendChild(sect_eng);

let chapgrp_eng=document.createElement("p");
displaydiv.appendChild(chapgrp_eng);

let chap_eng=document.createElement("p");
displaydiv.appendChild(chap_eng);

let eng=document.createElement("p");
displaydiv.appendChild(eng);

let eng_exp=document.createElement("p");
displaydiv.appendChild(eng_exp);

function thirukural(x){
          if(x>0 && x<=1330){
             let y =parseInt(x);

             fetch(`https://api-thirukkural.vercel.app/api?num=${y}`)
             .then((response)=>{return response.json();})
             .then((data)=>{
                  number.innerText="Number: "+data.number;

                  sect.innerText="Section: "+data.sect_tam;
                  
                  chap.innerText="Chapter"+data.chapgrp_tam;

                  chaptamil.innerText="ChapterName"+data.chap_tam;

                  line1.innerText="Line1"+data.line1;

                  line2.innerText="Line2"+data.line2;

                  tam_exp.innerText="TamilExp"+data.tam_exp;

                  sect_eng.innerText="English Section"+data.sect_eng;

                  chapgrp_eng.innerText="Engalish Chapter"+data.chapgrp_eng;
                  
                  chap_eng.innerText="English"+data.chap_eng;

                  eng.innerText="English kural"+data.eng;

                  eng_exp.innerText="English explanation"+data.eng_exp;

             })
          }
          else{
              alert("Enter Kural from 1 to 1330");
          }

}








