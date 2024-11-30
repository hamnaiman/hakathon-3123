
const arrowButton = document.getElementById('arrowButton');


arrowButton.addEventListener('click', function() {

    window.location.href = 'signup.html';  
});

document.getElementById('switch_sign_in').addEventListener('click', function() {
    document.getElementById('signUp').classList.add('hidden');
    document.getElementById('signInForm').classList.remove('hidden');
  });
  
  document.getElementById('switch_sign_up').addEventListener('click', function() {
    document.getElementById('signInForm').classList.add('hidden');
    document.getElementById('signUp').classList.remove('hidden');
  });
  