document.addEventListener("keypress", function(e) {
  if(e.key === '=') {
  
      var btn = document.querySelector("#equals");
    
    btn.click();
  
  }
});

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#submit");
    
    btn.click();
  
  }
});

document.querySelector("#formCalculadora").addEventListener("submit", function(event){
  event.preventDefault();
});


