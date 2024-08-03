      const submit =  document.querySelector('#btn');
      const popup = document.querySelector('#popup')
      const clbtn =   document.querySelector('#cl-btn');

      submit.addEventListener("click", function openPopup(){
        popup.classList.add("open-popup");
      })

      clbtn.addEventListener("click", function closePopup() {
        popup.classList.remove("open-popup");
      })