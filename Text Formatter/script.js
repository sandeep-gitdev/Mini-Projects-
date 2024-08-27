
            let text = document.getElementById('inputBox');

            document.getElementsByName('format-option').forEach(function(e,index) {
                e.addEventListener("click", ()=> {
                   formatText(index);
                })
            })

            function formatText(index){
                switch(index){
                   case 0: text.value = text.value.toUpperCase();
                   break;
                   case 1: text.value = text.value.toLowerCase();
                   break;
                   case 2: text.value = capitalizeSentence(text.value);
                   break;
                   case 3: text.value = capitalizWord(text.value);
                   break;
                }
            }

            function capitalizeSentence(str){
                  let splitSentence = str.split(". ");
                //   console.log(splitSentence)
                   for (let i = 0; i < splitSentence.length; i++) {
                      splitSentence[i] = splitSentence[i][0].toUpperCase()+splitSentence[i].slice(1);
                   }
             //      console.log(splitSentence)
                   splitSentence=splitSentence.join(". ");
             //      console.log(splitSentence)
                   return splitSentence;
            }

            function capitalizWord(str){
              let splitSentence = str.split(" ");
             // console.log(splitSentence)
              for (let i = 0; i < splitSentence.length; i++) {
                 splitSentence[i] = splitSentence[i][0].toUpperCase()+splitSentence[i].slice(1);
              }
            //  console.log(splitSentence)
              splitSentence=splitSentence.join(" ");
             // console.log(splitSentence)
              return splitSentence;
            }


            