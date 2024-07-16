            const inputBox = document.querySelector('#input-box');
            const listContainer = document.querySelector('#list-container');

               function addTask(){
                document.querySelector('button').addEventListener('click', function(e){
                    if(inputBox.value === ''){
                        alert("You must write something");
                    } else {
                           let li = document.createElement("li");
                                    li.innerHTML = inputBox.value;
                                    listContainer.appendChild(li);
                           let span = document.createElement("span");
                                      span.innerHTML= "\u00d7"
                                      li.appendChild(span);
                    }
                      
                    inputBox.value = "";
                    saveData();   // save data 

                    listContainer.addEventListener("click", function(e){
                        if(e.target.tagName === "LI"){
                            e.target.classList.toggle("checked");
                            saveData();
                        } 
                          else if (e.target.tagName === "SPAN"){
                            e.target.parentElement.remove();
                            saveData();
                          }
                      }, false)
        

                  })
                }
        
             addTask()

              
              
            //   listContainer.addEventListener("click", function(e){
            //     if(e.target.tagName === "LI"){
            //         e.target.classList.toggle("checked");
            //     } 
            //       else if (e.target.tagName === "SPAN"){
            //         e.target.parentElement.remove();
            //       }
            //   }, false)

            function saveData(){
                localStorage.setItem("data", listContainer.innerHTML);
            }

            // display containe again after refresing browser

            function showTask(){
                   listContainer.innerHTML = localStorage.getItem("data");
               }

               showTask()


             
             


            
