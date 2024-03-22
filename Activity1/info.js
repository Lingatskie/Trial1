const leftdiv=(nav1,nav2,nav3,title,title2, para,para2, button1,button2,button3,button4)=>{
    let div =document.createElement("div")
    div.className ="ClassL"
    div.innerHTML =`
    <nav class="navi">
      <ul>
        <li><a href="index.html">${nav1}<a></li>
        <li><a href="what.html">${nav2}</a></li>
        <li><a href="act2.html">${nav3}</a></li>
      </ul>
      </nav>
    <h1>${title}</h1>
    <h1>${title2}</h1>
    <p>${para}</p>
    <p>${para2}</p>
    <button>${button1}</button>
    <button>${button2}</button>
    <button>${button3}</button>
    <button>${button4}</button>`
    return div
}
export{leftdiv}