const names = document.getElementById('name');
const surname = document.getElementById('surname');
const country = document.getElementById('country');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const userinfo = document.querySelector('.UserInfo');
const form = document.querySelector('form');

function userdata() {
    return `
     <div class="formdiv">
      <h1>${names.value}</h1>
    <p>
       <b><span>Surname:</span></b>
       <span>${surname.value}</span>
    </p>
    <p>
       <b><span>Country:</span></b>
       <span>${country.value}</span>
    </p>
    <p>
       <b><span>Email Adress:</span></b>
       <span>${email.value}</span>
     </p>
     </div>
    `
}


btn.addEventListener('click', function(){
    userinfo.classList.remove('hidden') 
    userinfo.innerHTML += userdata()
    form.reset()
})

