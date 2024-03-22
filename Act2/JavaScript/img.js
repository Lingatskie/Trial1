
const fp=(image)=>{
  let div=document.createElement("div")
  div.className="pic1"
  div.innerHTML=`<img src="./Act2/${image}" alt="Picture">
`
return div 
}
const sp=(image1)=>{
  let div=document.createElement("div")
  div.className="pic2"
  div.innerHTML=`<img src="./Act2/${image1}" alt="Picture">
`
return div 
}
const tp=(image2)=>{
  let div=document.createElement("div")
  div.className="pic3"
  div.innerHTML=`<img src="./Act2/${image2}" alt="Picture">
`
return div 
}
const frp=(image3)=>{
  let div=document.createElement("div")
  div.className="pic4"
  div.innerHTML=`<img src="./Act2/${image3}" alt="Picture">
`
return div 
}
export {fp,sp,tp,frp}