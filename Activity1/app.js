import {leftdiv} from "./info.js"
import { rightdiv } from "./img.js"
const data ={
    nav1: "Home",
    nav2: "What I learned",
    nav3:"Activity 2",
    title : "Dog Adoption",
    title2: "Are you interested?",
    para: "Saving one dog will not change the world, but surely for that one dog, the world will change forever.",
    para2: "By choosing to adopt, you are giving an animal the chance to find a new home and to feel the love and security they deserve. You are also helping free up more space in our shelters, allowing us to rescue and rehabilate more animals.",
    button1 :"Contact us",
    button2:"About us",
    button3 :"View more",
    button4:"Message",
    image: "stray.jpg",
}
const {nav1,nav2,nav3,title,title2, para,para2, button1,button2,button3,button4, image} = data
let container = document.getElementById("container")
container.append(leftdiv(nav1,nav2,nav3,title,title2, para,para2, button1,button2,button3,button4))
container.append(rightdiv(image))