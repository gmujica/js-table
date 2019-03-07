window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const item = document.querySelector('.item');

    btn.addEventListener('click', function(){
      var ctr = 1;
      item.className = item.className !== 'show' ? 'show' : 'hide';
      if (item.className === 'show') {
        item.style.display = 'block';
        window.setTimeout(function(){
          item.style.opacity = 1;
          item.style.transform = 'scale(1)';
        },0);
      }
      if (item.className === 'hide') {
        item.style.opacity = 0;
        item.style.transform = 'scale(0)';
        window.setTimeout(function(){
          item.style.display = 'none';
        },700); 
      }
     
    });

});




