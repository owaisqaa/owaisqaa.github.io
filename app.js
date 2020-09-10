const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');


  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

  });
};

navSlide();


$(document).ready(function (){
  $('#submit').click(function (event){

    console.log('clicked button');

    var name = $('#name').val();
    var email = $('#email').val();
    var text = $('#text-area').val();
    var statusElm = $('#status')
    statusElm.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div> Email is Valid</div>');
    }else{
      event.preventDefault();
      statusElm.append('<div>Email is not valid</div>');
    };

    if (text.length >= 2) {
      statusElm.append('<div>Subject is valid </div>')

    }else {
      event.preventDefault();
        statusElm.append('<div>Subject is not valid </div>')
    };
    if (name.length < 6 ) {
      statusElm.append('<div>Name is not valid </div>')
    }else {
      event.preventDefault();
        statusElm.append('<div>Name is valid </div>')
    };
  })
});
