
 validateForm = () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm').value;
    var address = document.getElementById('name').value;

    if(name.length = 0){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Name Error !</strong> Enter Your Name. Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
    if(address.length = 0){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Address Error !</strong> Enter Your Address. Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
    if(password.length = 0){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Password Error !</strong> Enter Password. Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
    if(confirmPassword.length = 0){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Confirm Password Error !</strong> Enter Confirm Password. Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
    if(name.length <= 4){
        const div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
        <strong>Name Error !</strong> Enter Valid Name. Try Again
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.querySelector('.message').appendChild(div);
    return false;
    }
    if(password != confirmPassword){
        const div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
        <strong>Password Error !</strong> Password not Matching. Try Again
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.querySelector('.message').appendChild(div);
    return false;
    }
    if(phone.length <= 10){
        const div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
        <strong>Phone Error !</strong> Enter Valid Phone Number. Try Again
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.querySelector('.message').appendChild(div);
    return false;
    }
    if(address.length <= 5){
        const div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
        <strong>Address Error !</strong> Enter Valide Address. Try Again
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.querySelector('.message').appendChild(div);
    return false;
    }
    
    if(email.length <=8){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Email Error !</strong> Enter Valid Email. Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
    if(email.length = 0){
      const div = document.createElement('div');
      div.className = 'row';
      div.innerHTML = `<div class="alert alert-danger alert-dismissible fade show shadow-lg" role="alert">
      <strong>Email Error !</strong> Enter Email . Try Again
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
      document.querySelector('.message').appendChild(div);
  return false;
    }
}