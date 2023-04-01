let path = 'static/img/cards'
let counter = document.querySelector("#counter");
let container = document.querySelector("#container");
let matchedPairs = 0;
let flipping = false;
let previousCard;

const urlParams = new URLSearchParams(window.location.search);
const selectedOption = urlParams.get('option');
let set = +selectedOption

let startGame=(choose)=> window.location.href = choose == 'New game' ? `/game?option=${set}`: "/";

const shuffleList = Array.from({ length: 8 }, (_, i) => i + 1).flatMap(x => [x, x]).sort(() => Math.random() - 0.5);
for (let elem of shuffleList) {
  let card = document.createElement("img");
  card.src = `${path}/cover${set}.webp`;
  card.dataset.back = `${path}/cover${set}.webp`;
  card.dataset.front = `${path}/set${set}/${elem}.webp`;
  card.classList.add('card', 'border-4', 'rounded');
  card.addEventListener('click', () => flipImage(card));
  container.appendChild(card);
}

const flipAnimation = (img) => {
  const [currentUrl, frontUrl, backUrl] = ['src', 'data-front', 'data-back'].map(attr => img.getAttribute(attr));
  img.classList.add('flip-animation');
  setTimeout(() => {
    img.src = currentUrl == backUrl ? frontUrl : backUrl;
    img.classList.remove('flip-animation');
  }, 200);
}


const flipImage = (img) => {
  if (img.matched || flipping || img.classList.contains('flip-animation') || previousCard == img) {
    return;
  }

  if (!previousCard) {
    previousCard = img;
    flipAnimation(img);
  } else {
    flipping = true;
    flipAnimation(img);
    setTimeout(() => {
      if (previousCard.dataset.front !== img.dataset.front) {
        flipAnimation(previousCard);
        flipAnimation(img);
      } else {
        previousCard.matched = true;
        img.matched = true;
        matchedPairs++;
        if (matchedPairs === 8) {
          alert('Congratulations! You have matched all cards!');
        }
      }
      previousCard = null;
      flipping = false;
    }, 1000);
    counter.innerHTML = +counter.innerHTML + 1;
  }
};

