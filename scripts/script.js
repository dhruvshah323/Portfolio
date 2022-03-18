
var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-80px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});

const button = document.querySelector('.toggle-button')

button.addEventListener('click', function(){
  this.classList.toggle('active');
})


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function ()  {
  navbarLinks.classList.toggle('active')

})




   


