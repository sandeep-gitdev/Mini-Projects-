
            const imgBox = document.querySelector('#imgBox')
            const qrImg = document.querySelector('#qrImg')
            const qrText = document.querySelector('#qrText')
            const btn = document.querySelector('button');

    btn.addEventListener("click",  function generateQR(){
        if(qrText.value.length > 0){ 
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
        } else {
            qrText.classList.add('error');
            setTimeout(() => {
                  qrText.classList.remove('error');
            },1000)
        }
        
  });
  

