const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { quote: "The future starts today, not tomorrow.", author: "Pope John Paul II" },
    { quote: "The future is now.", author: "Eleanor Roosevelt" },
    { quote: "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.", author: "C.S. Lewis" },
    { quote: "The future is not something we enter. The future is something we create.", author: "Leonard I. Sweet" },
    { quote: "The future is always beginning now.", author: "Mark Strand" },
    { quote: "The future is purchased by what you do in the present.", author: "Unknown" },
    { quote: "The future is not laid out on a track. It is something that we can decide, and to the extent that we do not violate any known laws of the universe, we can probably make it work the way that we want to.", author: "Alan Kay" },
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex].quote;
    document.getElementById("author").innerText = `- ${quotes[randomIndex].author}`;
  }
  