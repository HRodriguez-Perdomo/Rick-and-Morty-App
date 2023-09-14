// const signUpBtnLink =document.querySelector('.SignUpBtn')
// const signInBtnLink =document.querySelector('.SignInBtn')
// const wrapper =document.querySelector('.wrapper')
// signUpBtnLink.addEventListener('click' ()=>{wrapper.classList.toggle('active')})   
// signInBtnLink.addEventListener('click' ()=>{wrapper.classList.toggle('active')})   
const signUpBtnLink = document.querySelector('.SignUpBtn');
const signInBtnLink = document.querySelector('.SignInBtn');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});
