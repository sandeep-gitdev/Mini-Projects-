
  let userInput = document.querySelector('#date');
      userInput.max = new Date().toISOString().split("T")[0];
   let result = document.querySelector("#result"); 


   let ageCalc = document.querySelector('button');


   ageCalc.addEventListener("click", function calculateAge(){
       let birthDate = new Date(userInput.value)

       let d1 = birthDate.getDate();
       let m1 = birthDate.getMonth() ;
       let y1 = birthDate.getFullYear();

       let today = new Date();

       let d2 = today.getDate();
       let m2 = today.getMonth() ;
       let y2 = today.getFullYear();


     let d3, m3, y3;
       
      y3 = y2 - y1;

       if(m2 >= m1){
          m3 = m2 - m1;
       }  else {
         y3--;
          m3 = 12 + m2 - m1;
       }

       if(d2 >= d1){
        d3 = d2 - d1;
       }  else {
                 m3--;
                 d3 = getDayInMonth(y1, m1) + d2 - d1;
       }
         if(m3 < 0){
               m3 = 11;
                y3--;
         }
             console.log(d3,m3,y3);

            result.innerHTML = `Your are <span>${d3}</span> days, <span>${m3}</span> months and <span>${y3}</span> years old`; 

     });

     function getDayInMonth(year, month){
        return new Date(year, month, 0).getDate()
    }