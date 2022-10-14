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
     "description":"This is a website developed using html,css and javascript following best cl/ci practices Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practices Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", 
     "featured":"../Assets/Images/header-illsutration-mobile@2x.png", 
     "technologies":["Ruby on rails","css","javascript","html"],
     "live":"ldouglasot.github.io",
     "source":"https://github.com/LDouglasOT/ldouglasot.github.io"
  },{
    "name":"Multi-Post Stories</span><span>Gain+Glory",
     "description":"This is a website developed using html,css and javascript following best cl/ci practicesSometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", 
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
  const insertitems=(name,description,featured,live,source,technologies,index)=>{
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
      <button class="top-notch-content-a" id='seeproject' value=${index}>See Project</b>
      <br />
    </div>
  </div>
 
  `
   }
   projectlist.map((item,index)=>{
    const lists=document.createElement('li')
    lists.classList='list-item'
    lists.innerHTML=insertitems(item.name, item.description, item.featured, item.live, item.source,item.technologies,index)
    li.appendChild(lists)
   })
   untitlelist.append(li)
});



window.onload = function() {
  const btnclick=document.querySelector('#seeproject')
  let pop = document.createElement('div')
    pop.classList.add('popout')

    pop.innerHTML=`
    <div class="desktop-popup">
    <div class="desktop-inner">
    <img class="desktop-innerimg" src="/Assets/Images/ICancel.png" alt="SnapshootPortfolioDesktop">
    <img class="project-img" src="/Assets/Images/SnapshootPortfolioDesktop.png" alt="SnapshootPortfolioDesktop">
    <img class="projectimgmob" src="/Assets/Images/SnapshootPortfolio.png" alt="SnapshootPortfolioDesktop">
   
    <div class="headbuttons">
      <div class='headerfullwrapper'>
        <h3 class="itemheader">Keeping track of hundreds of components</h3>
        <ul class='languages-used'>
        <li class='languages-used-li'>Ruby on Rails</li>
        <li class='languages-used-li'>css</li>
        <li class='languages-used-li'>html</li>
        </ul>
      </div>

      <span class='mobile-tag'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release</span>
      <div class="btnwrappers">
        <a href="#" id="btnwrappers-a" class="see">See Live <img src='../Assets/Images/seeliveicon.png' alt="hello" /></a>
        <a href="#" id="btnwrappers-a" class="see">See Source <img src='../Assets/Images/Vector.png' alt="hello" /></a>
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
  // btnsee.style.display='none'
  const btnclose=document.querySelector('.p-image')
const deskclose=document.querySelector('.desktop-innerimg')
const mobileclose=document.querySelector('.projectimgmob')
const btx=document.querySelectorAll('#seeproject').forEach((project) => {
    deskclose.onclick=()=>{
      btnsee.style.display='none' 
    } 
    mobileclose.onclick=()=>{
      btnsee.style.display='none' 
    }
  project.onclick=()=>{
    btnsee.style.display='flex'
  }
})
}

