const uPass = document.querySelector('#u_pass');
const uPass2 = document.querySelector('#u_cpass');
const btnSubmit = document.querySelector('#submit')



uPass2.addEventListener('input', function () {
  
  if (uPass.value === this.value) {
    uPass.classList = 'green-line';
    this.classList = 'green-line';
  } else {
    uPass.classList = 'red-line';
    this.classList = 'red-line'
  } 
  
})

// btnSubmit.addEventListener('click', ()=> {
//   uPass.value === uPass2.value ? console.log('okay') : console.log('no');
// })
