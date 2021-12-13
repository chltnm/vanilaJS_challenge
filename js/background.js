const images = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpeg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpeg', 'bg7.jpeg', 'bg8.jpg', 'bg9.jpg', 'bg10.jpeg', 'bg11.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg', 'bg16.jpg', 'bg17.png', 'bg18.jpg', 'bg19.jpg', 'bg20.jpg',];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const wrapBg = document.querySelector('#wrap');

document.body.style.background = `url(img/${chosenImage}) no-repeat center center`;
wrapBg.style.background = `rgba(0,0,0,.275)`;
wrapBg.style.backgroundSize = `cover`;
document.body.style.backgroundSize = `cover`;

// src = `img/${chosenImage}`;