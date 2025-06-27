"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};


const quotes = [
    {
        quote: "When there’s no more room in hell, the dead will roam the Earth.",
        author: "Peter Washington, Dawn of the Dead (1978)",
    },

    {
        quote: "All work and no play makes Jack a dull boy.",
        author: "Jack Torrance, The Shining (1980)",
    },

    {
        quote: "I will say now, however objectively, that human teleportation, molecular decimation, breakdown, reformation, is inherently purging.",
        author: "Seth Brundle, The Fly (1986)",
    },
    
    {
        quote: "The lesson I want you to learn is: It doesn't matter what you look like. You can be tall or short or fat or thin, or ugly or handsome, like your father, or you can be black or yellow or white. It doesn't matter. But what does matter is the size of your heart and the strength of your character.",
        author: "Herman Munster, The Munsters (1965)",
    },

    {
        quote: "You can’t kill the boogeyman.",
        author: "Tommy Doyle, Halloween (1978)",
    },

    {   quote: "“I have to return some videotapes.",
        author: "Patrick Bateman, American Psycho (2000)",
    },
]



function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}


setTimeout(loopThroughQuotes, 3000);