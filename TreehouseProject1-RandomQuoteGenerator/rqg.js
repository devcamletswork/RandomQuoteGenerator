  //Build a collection of quotations — these are the quotes, author and other information that gets printed to the screen. You'll do this by creating a JavaScript array containing JavaScript objects — one object for each quotation.
  const quotes = 
  [
  {
          quote: "I did the digital dash...",
          source: "Future"    
  },
  {
          quote: "Life without dreaming is a life without meaning",
          source: "Wale"          
  },
  {
          quote: "Every day is new. It’s just a new day. I look at six hours at a time. dreaming is a life without meaning",
          source: "Wiz Khalifa"          
  },
  {
          quote: "Whats my Favorite word....!!!",
          source: "2short"          
  },
  {
          quote: "go..its ya birthday go go.... ",
          source: "Camron"          
  }
  ];  
  /**Create a function that pulls one of those quotes out at random.  
  Here i declared a variable (r) which is set to a random value
  Used log function to show the number that what chosen
  Returned the quote according the random value set
  **/
  const  getQuote = () =>{
    let r= Math.floor(Math.random() * quotes.length ) ;          
      console.log(r);
      return quotes[r];
    }
/**Create a function that prints that quote to the screen.
 * main is set to the value displayed in the main div. 
  * Below is  a function which uses this random quote generated above and stores it to a variable. 
 *Another variable is created to modify the quote and display it to the DOM.
 *Button Functionality is added to show new quotes. 
  **/
 let main = document.querySelector('quote');
   const  showQuote = () => {
    var quote = getQuote();  
    var stringToDisplay = '<p>' + quote.quote + '</p><p >' + quote.source;
      stringToDisplay = stringToDisplay + '</p>';
        document.getElementById('quote').innerHTML = stringToDisplay;   
    }
document.getElementById("quoteButton").addEventListener("click", showQuote);

