var Quotesname=["― John Green",
    "― Stephenie Meyer",
    "― Stephen Chbosky",
    "― J.K. Rowling",
    "― Mark Twain",
    "― Oscar Wilde" ,
     "― William Shakespeare",
];
var Quotes=[
    "“The only way out of the labyrinth of suffering is to forgive.”",
    "“He's like a drug for you, Bella.”",
    "“We accept the love we think we deserve.”",
    "“It does not do to dwell on dreams and forget to live.”",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.”",
    "“We are all in the gutter, but some of us are looking at the stars.”",
    "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
];

var usedQuotes = [];
var usedQuotesname = [];

function addQuote() {
   if (Quotes.length == 0 && Quotesname.length==0) {
       Quotes = usedQuotes;
       Quotesname = usedQuotesname;
       usedQuotes = [];
       usedQuotesname = [];
   }
   var quoteNumber = Math.floor(Math.random() * Quotes.length);
   var selectedQuote = Quotes[quoteNumber];
   var selectQuotename = Quotesname[quoteNumber];
   usedQuotes.push(selectedQuote);
   usedQuotesname.push(selectQuotename);
   Quotes.splice(quoteNumber, 1);
   Quotesname.splice(quoteNumber, 1);
   document.getElementById("Quote").innerHTML = selectedQuote;
   document.getElementById("Quotename").innerHTML = selectQuotename;
}



