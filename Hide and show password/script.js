 let eyeicon = document.querySelector('#eyeicon');
 let password = document.querySelector('#password');

   eyeicon.onclick = function() {
      if(password.type == "password"){
          password.type = "text";
          eyeicon.src = "eye-open.png";
      } else {
           password.type = "password";
           eyeicon.src = "eye-close.png";
      }
   }

