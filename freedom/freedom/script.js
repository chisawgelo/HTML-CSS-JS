const openPopup = document.getElementById('open_pop_up');
const closePopup = document.getElementById('close_pop_up');
const popUp = document.getElementById('pop_up');

openPopup.addEventListener('click', function(e){
   e.preventDefault();
   popUp.classList.add('active');
})

closePopup.addEventListener('click', () => {
   popUp.classList.remove('active');
})