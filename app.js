let currentdate = new Date();
let datetime =  (currentdate.getMonth()+1)  + "/" +
                currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

let quotes =[
  'They add the smell so you know when there’s a leak. - Ross',
  'I am the holiday armadillo! - Ross',
  'Ah. Humor based on my pain. - Ross ',
  'I tell you, when I actually die...Some people are gonna get seriously haunted! - Ross',
  'I AM FINE! - Ross',
  'You threw away my sandwich?? - Ross',
  'Y-O-U-\'\-R-E MEANS YOU ARE. Y-O-U-R MEANS YOUR. - Ross',
  'PIVOT! - Ross',
  'WE WERE ON A BREAK! - Ross',
  'Unagi is a state of total awareness. - Ross',
  'That sandwich was the only good thing in my life and someone ate it. - Ross',
  'Oh I\'\ll prove it! I\'\ll prove it like a theorem! - Ross',
];

let dsQuotes =[
  'It\'s\ a job. Someone\'\s gotta kiss Jennifer Anniston. - David Schwimmer',
  'I had a mustache when I was 13. - David Schwimmer',
  'It\'\s really important for me not to be known as Ross when I\'\m 60. - David Schwimmer', 
  'If there\'s\ something I want, I go for it. - David Schwimmer', 
  'To be perfectly honest, I feel I have a duty to use my celebrity status in a positive way. - David Schwimmer', 
  'I was a geek in high school. - David Schwimmer', 
];

function newQuote(){
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function newDSQuote(){
  let randomNumber = Math.floor(Math.random() * (dsQuotes.length)); 
   document.getElementById('dsQuoteDisplay').innerHTML = dsQuotes[randomNumber];
}
