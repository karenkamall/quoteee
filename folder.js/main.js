var text=[
    "“Ô, Sunlight! The most precious gold to be found on Earth.”",
    "“Live like a PRINCE and die like a WARRIOR.”",
     "“I speak hard, but write softly.”",
    "“Life is too short to be ambitious all the time.”",
    "“Writing is flying in dreams. When you remember. When you can. When it works. It's that easy.” ",
    "“Summer's lease hath all too short a date.”",
    "“It was the short men that caused all the trouble in the world.”",
    "“For a writer, life is always too short to write. I will just try my best during what remains of my life.” ",
    ]
var autherName=[
    "― Roman Payne",
    " ― Sagar Ugale",
    "― Mitta Xinindlu",
    "― Ritu Negi",
    "― Neil Gaiman",
    "― William Shakespeare, Shakespeare's Sonnets",
    "― Ian Fleming, Goldfinger",
    "― Cao Yu"
   ]

var num;

function randomQuote(){

    var num=Math.floor(Math.random()*autherName.length);
    document.getElementById("textQuote").innerHTML=text[num];
    document.getElementById("autherQuote").innerHTML=autherName[num];

}