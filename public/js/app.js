// BUTTON IN NAVBAR
let btn = document.querySelector(".btn")
let modal = document.querySelector(".modal")
let overlay = document.querySelector(".overlay")
let closeBtn = document.querySelector(".close")

btn.addEventListener("click", () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
})

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
})

overlay.addEventListener("click", () => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
})

// button the home 
  let btnScroll = document.querySelector('.btn-home');
  let reservationSection = document.getElementById('reservation');

  btnScroll.addEventListener('click', function () {
    reservationSection.scrollIntoView({ behavior: 'smooth' });
  });

// carousel testimonial

  const slides = document.querySelectorAll('#carousel1 .slide')
  let currentSlide = 0 

  function hideAllSlides() {
    slides.forEach(slide => {
      slide.style.display = 'none'
    })
  }

  function showSlide(index) {
    hideAllSlides()
    slides[index].style.display = 'block'
  }

 
  showSlide(currentSlide)
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }, 4000)


// BOOK A TABLE
let nameInput = document.querySelector('input[placeholder="your name"]');
let emailInput = document.querySelector('input[placeholder="your email"]');
let phoneInput = document.querySelector('input[placeholder="your phone"]');
let dateInput = document.querySelector('input[type="date"]');
let timeInput = document.querySelector('input[type="time"]');
let peopleInput = document.querySelector('input[placeholder="# of people"]');
let messageInput = document.querySelector('textarea');

let button = document.querySelector('.button');

button.addEventListener('click', function () {

  let name = nameInput.value;
  console.log("Name:", name);
  nameInput.value = '';


  let email = emailInput.value;
  console.log("Email:", email);
  emailInput.value = '';

  let phone = phoneInput.value;
  console.log("Phone:", phone);
  phoneInput.value = '';

  let date = dateInput.value;
  console.log("Date:", date);
  dateInput.value = '';

  let time = timeInput.value;
  console.log("Time:", time);
  timeInput.value = '';


  let people = peopleInput.value;
  console.log("People:", people);
  peopleInput.value = '';

  let message = messageInput.value;
  console.log("Message:", message);
  messageInput.value = '';


});



// contact us
  let contactName = document.querySelector('.input-contacte input[placeholder="your name"]');
  let contactEmail = document.querySelector('.input-contacte input[placeholder="your email"]');
  let contactSubject = document.querySelector('.input-contacte input[placeholder="subject"]');
  let contactMessage = document.querySelector('.input-contacte textarea');

let contactBtn = document.querySelector('.button-contact');

  contactBtn.addEventListener('click', function () {
   let name = contactName.value;
    console.log("Name:", name);
        contactName.value = '';

    let email = contactEmail.value;
    console.log("Email:", email);
     contactEmail.value = '';

   let subject = contactSubject.value;
    console.log("Subject:", subject);
    contactSubject.value = '';


    let message = contactMessage.value;
    console.log("Message:", message);
    contactMessage.value = '';
   
  });
