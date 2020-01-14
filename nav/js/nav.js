//hamburger menu
document.querySelector(".hamburgerCont").addEventListener("click", function () {
  document.querySelector(".navContainer").classList.add("menuSlide");
});

// closing nav
document.querySelector(".navTitle .fas").addEventListener("click", function () {
    document.querySelector(".navContainer").classList.remove("menuSlide");
});


//closing sub menu
let subMenuClose = document.querySelectorAll(".subMenuContTitle .fas");
for (let i = 0; i < subMenuClose.length; i++) {
    subMenuClose[i].addEventListener("click", function () {        
        let parent = this.parentElement;
        let grandparent = parent.parentElement;        
        grandparent.parentElement.classList.remove("menuSlide");
    });
}

//closing sub menu on clinking outside of limks container
let subMenu = document.querySelectorAll(".subLinksCont, .navContainer");
for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].addEventListener("click", function () {
        event.stopPropagation();
        if (event.target.classList.contains('subLinksCont') || event.target.classList.contains('navContainer')) {            
            this.classList.remove("menuSlide");
        }
    });
}

//sub menu slide 
let mainMenu = document.getElementsByClassName("mainMenu");
for (let i = 0; i < mainMenu.length; i++) {
    mainMenu[i].addEventListener("click", function () {
        let subMenu = this.nextElementSibling;
        subMenu.classList.add("menuSlide");
    }); 
}

//sub menu slide down on clicking submenu title
let subMenuTitle = document.getElementsByClassName("subMenuTitle");
for (let i = 0; i < subMenuTitle.length; i++) {
    subMenuTitle[i].addEventListener("click", function() {    
    let panel = this.nextElementSibling;
    if (panel.style.height) {
      panel.style.height = null;
      this.classList.remove("active");
    } else {
        for (i = 0; i < subMenuTitle.length; i++) {
            subMenuTitle[i].nextElementSibling.style.height = null;
            subMenuTitle[i].classList.remove("active");
    	}
      panel.style.height = panel.scrollHeight + "px";
      this.classList.add("active");
    } 
  });
}