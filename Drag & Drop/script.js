  
    const lists = document.querySelector(".list");
    const rightBox = document.querySelector('#right');
    const leftBox = document.querySelector('#left')


    for(const list of lists){
        list.addEventListener("dragstart", function(e){
            let selected = e.tartget;

            rightBox.addEventListener("dragover", function(e){
              e.preventDefault();
            });

            rightBox.addEventListener("drop", function (e) {
                 rightBox.appendChild(selected);
                 selected = null;
            })
            leftBox.addEventListener("dragover", function(e){
              e.preventDefault();
            });

            leftBox.addEventListener("drop", function (e) {
                 leftBox.appendChild(selected);
                 selected = null;
            })
        })

    }

      








    


    
