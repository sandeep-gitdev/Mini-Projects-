
let text = document.getElementById('inputBox');

document.getElementsByName('format-option').forEach(function(e,index) {
    e.addEventListener("click", ()=> {
       formatText(index);
    })
})

function formatText(index){
    if(text.value==""){
        document.getElementsByName('format-option')[index].checked = false;
    }
    switch(index){
       case 0: text.value = text.value.toUpperCase();
       break;
       case 1: text.value = text.value.toLowerCase();
       break;
       case 2: text.value = capitalizeSentence(text.value);
       break;
       case 3: text.value = capitalizWord(text.value);
       break;
       case 4: text.value = removeNumber(text.value);
       break;
       case 5: text.value = removePunctuation(text.value);
       break;
    }
}

function capitalizeSentence(str){
      let newString = removeExtraSpaces(str);
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
  let newString = removeExtraSpaces(str);
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

function removeExtraSpaces(str){
     return str.replace(/\s+/g, ' ').trim();
}

function removePunctuation(str){
      return str.replace(/[!@#$%^&*()_+?><,./;'":=-`~\|]/g, '');

}

function removeNumber(str){
     return str.replace(/[0-9]/g, '');
}




