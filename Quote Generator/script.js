

   const quote = document.querySelector('#quote')
   const author = document.querySelector('#author')

           const newQuote =  document.querySelector('.firstbtn')

   const api_url = "https://zenquotes.io/api/random"
   
   newQuote.addEventListener('click', function getquote(){});
   async function getquote(url){
       const response = await fetch(url);
       let data = await response.json();
       console.log(data);

       quote.innerHTML = data.content;
       author.innerHTML = data.author;
   }

   getquote(api_url);


   const tweet = document.querySelector('.tweet');
  tweet.addEventListener('click',
            function tweet(){
                window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "Quote by " + author.innerHTML, "Tweet Window", "width=600px, height= 300px")
            });
