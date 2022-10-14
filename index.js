const menu=document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.Navmenu');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-links').forEach((navLink) => navLink.addEventListener('click', () => {
    menu.classList.remove('active');
    navMenu.classList.remove('active');
  }));


const projectlist=[
  {
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  }, {
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },

]

window.addEventListener('load', ()=>{

  const untitlelist=document.querySelector('.works')

  const li=document.createElement('ul')
  li.classList.add('works-ul')
  const insertitems=(name,description,featured,live,source,technologies)=>{
  return `

  <div class="top-notch">
    <img class="imagedescription" src="https://wallpaperaccess.com/full/220746.jpg" alt='capstone' />
    <div class="top-notch-content">
      <h3 class="top-tag">
        <span>${name}</span>
      </h3>
      <ul class="top-notch-content-ul">
      
        <li class="top-notch-content-ul-li">${technologies[0]}</li>
        <li class="top-notch-content-ul-li">${technologies[1]}</li>
        <li class="top-notch-content-ul-li">${technologies[2]}</li>
        <li class="top-notch-content-ul-li">${technologies[3]}</li>
      </ul>
      <br />
      <button class="top-notch-content-a" id='seeproject'>See Project</b>
      <br />
    </div>
  </div>
 
  `
   }
   projectlist.map((item)=>{
    const lists=document.createElement('li')
    lists.classList='list-item'
    lists.innerHTML=insertitems(item.name, item.description, item.featured, item.live, item.source,item.technologies)
    li.appendChild(lists)
   })
   untitlelist.append(li)
});



window.onload = function() {
if (window.matchMedia("(max-width: 680px)").matches) {
const btnclick=document.querySelector('#seeproject')
console.log(btnclick)

let pop = document.createElement('div')
  pop.classList.add('popout')
  pop.innerHTML=`
  
      <img src="../Assets/Images/SnapshootPortfolio.png" alt="Portifolio image"  class="p-image">
    <h3 class='taghead'>Keeping track of hundreds of components</h3>
  <h6 class='tagline'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </h6>
 
  <div class="btnwrappers">
    <a href="#"  class="see">See Live <img src='../Assets/Images/seeliveicon.png' alt="hello" /></a>
    <a href="#" class="see">See Source <img src='../Assets/Images/Vector.png' alt="hello" /></a>
  </div>
  `;
  
  const btnsee=document.querySelector('.popupContainer')
  btnsee.appendChild(pop)
  btnsee.classList.remove('popupContainer')
  btnsee.classList.add('popout-container')
  btnsee.style.display='none'
  const btnclose=document.querySelector('.p-image')

const btx=document.querySelectorAll('#seeproject').forEach((project) => {

  project.onclick = () =>{
  console.log('itemes')
  btnsee.style.display='flex'
 }
 btnclose.addEventListener('click',()=>{
  btnsee.style.display='none'
 })

})

} else {
  const btnclick=document.querySelector('#seeproject')
  console.log(btnclick)
  
  let pop = document.createElement('div')
    pop.classList.add('popout')
    pop.innerHTML=`
    <div class="desktop-popup">
    <div class="desktop-inner">
    <img class="desktop-innerimg" src="/Assets/Images/ICancel.png" alt="SnapshootPortfolioDesktop">
    <img class="project-img" src="/Assets/Images/SnapshootPortfolioDesktop.png" alt="SnapshootPortfolioDesktop">
    <div class="headbuttons">
      <div>
        <h3 class="itemheader">Keeping track of hundreds of components</h3>
      </div>
      <div class="btnwrappers">
        <a href="#"  class="see">See Live <img src='../Assets/Images/seeliveicon.png' alt="hello" /></a>
        <a href="#" class="see">See Source <img src='../Assets/Images/Vector.png' alt="hello" /></a>
      </div>
    </div>
    <div class="listech">
      <ul>
        <li>codekit</li>
        <li>Github</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>Terminal</li>
        <li>codepen</li>
      </ul>
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</span>
    </div>

    </div>
    `;

  const btnsee=document.querySelector('.popupContainer')
  btnsee.appendChild(pop)
  btnsee.classList.remove('popupContainer')
  btnsee.classList.add('popout-container')
  btnsee.style.display='none'
  const btnclose=document.querySelector('.p-image')
const deskclose=document.querySelector('.desktop-innerimg')

const btx=document.querySelectorAll('#seeproject').forEach((project) => {
console.log(project)
    deskclose.onclick=()=>{
      btnsee.style.display='none' 
    } 
  project.onclick=()=>{

    btnsee.style.display='flex'
  }
})
}}

