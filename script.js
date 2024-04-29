const sidebar = document.querySelector('.sidebar');
const menuBtn = document.getElementById('menuline');
const closeBtn = document.querySelectorAll('.closeBtn');



menuBtn.addEventListener('click', function displaySidebar(event){
  event.preventDefault();
  sidebar.style.display = 'flex';
  
});

closeBtn.forEach(btn =>{
  btn.addEventListener('click', function hideSidebar(){
    
  sidebar.style.display = 'none';
  
  
});
});



