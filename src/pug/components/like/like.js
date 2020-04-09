let allLikeBtns = document.querySelectorAll('.like');

allLikeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    let amountOfLikes = btn.querySelector('.amout-of-likes');
    if (btn.classList.contains('liked')) {
      amountOfLikes.innerHTML = +amountOfLikes.innerHTML - 1;
    }else{
      amountOfLikes.innerHTML = +amountOfLikes.innerHTML + 1;
    }
    btn.classList.toggle('liked');    
  })
});