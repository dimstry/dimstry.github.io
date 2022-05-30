const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=> {
  document.body.classList.toggle('dark');
})

$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active');
  $('this').addClass('active');
});