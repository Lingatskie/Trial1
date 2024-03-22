const down=(Header)=>{
  let div =document.createElement("div")
  div.className="Title"
  div.innerHTML=`<h1>${Header}</h1>
  `
 return div
}
const P1=(p1,p2,p3)=>{
  let div =document.createElement("div")
  div.className="Para1"
  div.innerHTML=`<p>${p1}</p>
  <p>${p2}</p>
  <p>${p3}</p>
  `
 return div
}
const b1 =(Btn1)=>{
  let div =document.createElement("div")
  div.className="Button1"
  div.innerHTML=`<button>${Btn1}</button>
  `
 return div
}
const b2 =(Btn2)=>{
  let div =document.createElement("div")
  div.className="Button2"
  div.innerHTML=`<button>${Btn2}</button>
  `
 return div
}
const b3 =(Btn3)=>{
  let div =document.createElement("div")
  div.className="Button3"
  div.innerHTML=`<button>${Btn3}</button>
  `
 return div
}
export{down,P1,b1,b2,b3}