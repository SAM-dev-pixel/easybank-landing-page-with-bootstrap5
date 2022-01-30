// nav link line animation
((navLink) => {
  
  navLink.forEach(link => {
    link.addEventListener('mouseenter', ()=> {
      
      link.classList.remove('back');
      link.classList.remove('move');
      link.classList.add('show');
      
    });
    link.addEventListener('mouseleave', ()=> {
      
      link.classList.remove('show');
      link.classList.add('move');
      setTimeout(()=> link.classList.add('back'), 200);
      
    });
  });
  
})(document.querySelectorAll('.nav-link'))