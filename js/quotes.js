const quotes = [
    {
        quote: 'Love For All, Hatred For None.',
        author: '- Khalifatul Masih III',
    },
    {
        quote: 'Change the world by being yourself',
        author: '– Amy Poehler',
    },
    {
        quote: 'Every moment is a fresh beginning.',
        author: '– T.S Eliot',
    },
    {
        quote: 'Never regret anything that made you smile.',
        author: '– Mark Twain',
    },
    {
        quote: 'Everything you can imagine is real.',
        author: '– Pablo Picasso',
    },
    {
        quote: 'Simplicity is the ultimate sophistication.',
        author: '– Leonardo da Vinci',
    },
    {
        quote: 'Whatever you do, do it well.',
        author: '– Walt Disney',
    },
    {
        quote: 'What we think, we become.',
        author: '– Buddha',
    },
    {
        quote: 'All limitations are self-imposed.',
        author: '– Oliver Wendell Holmes',
    },
    {
        quote: 'Tough times never last but tough people do.',
        author: '– Robert H. Schiuller',
    },
    {
        quote: 'Problems are not stop signs, they are guidelines.',
        author: '– Robert H. Schiuller',
    },
    {
        quote: 'If I’m gonna tell a real story, I’m gonna start with my name.',
        author: '– Kendrick Lamar',
    },
    {
        quote: 'If you tell the truth you don’t have to remember anything.',
        author: '– Mark Twain',
    },
    {
        quote: 'Have enough courage to start and enough heart to finish.',
        author: '– Jessica N. S. Yourko',
    },
    {
        quote: 'Act as if what you do makes a difference. It does.',
        author: '– William James',
    },
    {
        quote: 'I could agree with you but then we’d both be wrong.',
        author: '– Harvey Specter',
    },
    {
        quote: 'Oh, the things you can find, if you don’t stay behind.',
        author: '– Dr. Seuss',
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: '– Theodore Roosevelt',
    },
    {
        quote: 'Limit your "always" and your "nevers."',
        author: '– Amy Poehler',
    },
    {
        quote: "Try to be a rainbow in someone else's cloud.",
        author: '– Maya Angelou',
    },
    {
        quote: "You do not find the happy life. You make it.",
        author: '– Camilla Eyring Kimball',
    },
    {
        quote: "The most wasted of days is one without laughter.",
        author: '– E. E. Cummings',
    },
    {
        quote: "You must do the things you think you cannot do.",
        author: '– Eleanor Roosevelt',
    },
    {
        quote: "You get what you give.",
        author: '– Jennifer Lopez',
    },
    {
        quote: "Happiness is not by chance, but by choice.",
        author: '– Jim Rohn',
    },
]
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

//quotes[0 ~ 10-1] = 10-1이 마지막 quote

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `${todaysQuotes.quote}<br>`;
quote.style.background = 'rgba(0,0,0,.4)';
quote.style.padding = '4px';
quote.style.borderRadius = '11px';
quote.style.fontWeight = '300';
author.innerText = todaysQuotes.author;
author.style.fontWeight = '200';
author.style.fontSize = '.8em';


