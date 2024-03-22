import{upper} from "./info2.js"
import{down,P1,b1,b2,b3} from "./card2.js"
import{fp,sp,tp,frp} from "./img2.js"
const one={
  nav1: "Home",
  nav2: "What I learned",
  nav3:"Activity 1",
  Title: "Welcome to Wattpad",
  Paragraph: "Wattpad is a free social-storytelling app which enables users to connect with and read content by writers from around the world, as well as creating and sharing their own original stories. With over 90 million users, it is a popular platform with those who enjoy reading and writing, especially teens and young adults.",
  Cbtn: "Contact us",
  image:"Wattpad.png",
}
const two={
  Header: "Favorite Authors",
  p1:"Jonaxx is a Filipino author, born on 23 January 1991 and hailing from Cagayan de Oro, Philippines. She is currently the most followed Wattpad author worldwide with over 5 million followers and is widely known as the Wattpad Queen and Pop Fiction Queen.",
  p2:"Knight in Black, born on February 10, 1998, resides in Pampanga. He joined Wattpad in November 2015 and penned 'HU' on February 8, 2016. An IT student. Notable works include 'Hell University, Chasing Hell, Trapped (1 & 2), Escaped, Taste of Blood, etc.<br>",
  p3:"Jamille Fumah (@JFStories) is one of the most exciting Wattpad writers in the Philippines, with 1.5 million followers on the platform. With more than 30 stories published on Wattpad, her work has accumulated more than 336 million total reads.3" ,
  image1:"Jonaxx.jpg",
  image2:"Knight.jpg",
  image3:"Jammile.jpg",
  Btn1:"Read more",
  Btn2:"Read more",
  Btn3:"Read more",
}

const{nav1,nav2,nav3,Title,Paragraph,Cbtn,image}= one
const {Header,p1,p2,p3,Btn1,Btn2,Btn3,image1,image2,image3}=two
let sectionOne=document.getElementById("sectionOne")
let sectionTwo=document.getElementById("sectionTwo")
sectionOne.append(fp(image))
sectionOne.append(upper(nav1,nav2,nav3,Title, Paragraph,Cbtn))
sectionTwo.append(down(Header))
sectionTwo.append(sp(image1))
sectionTwo.append(tp(image2))
sectionTwo.append(frp(image3))
sectionTwo.append(P1(p1,p2,p3))
sectionTwo.append(b1(Btn1))
sectionTwo.append(b2(Btn2))
sectionTwo.append(b3(Btn3))
