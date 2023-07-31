const text = document.getElementById("greeting");
const letters = text.textContent.split("");

text.innerHTML = ""; // Clear the original text

letters.forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  text.appendChild(span);
});

text.addEventListener("mouseenter", () => {
  const spans = text.getElementsByTagName("span");

  for (let i = 0; i < spans.length; i++) {
    const randomColor = getRandomColor();
    const randomFont = getRandomFont();

    spans[i].style.color = randomColor;
    spans[i].style.fontFamily = randomFont;
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function getRandomFont() {
  const fonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana", "Georgia"];
  const randomIndex = Math.floor(Math.random() * fonts.length);
  
  return fonts[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const maze = document.getElementById('maze');
    const player = document.createElement('div');
    const goal = document.createElement('div');

    player.classList.add('player');
    goal.classList.add('goal');

    maze.appendChild(player);
    maze.appendChild(goal);

    const movePlayer = function(event) {
        const key = event.keyCode;
        const currentPosition = {
            top: player.offsetTop,
            left: player.offsetLeft
        };

        switch (key) {
            case 37: // left
                if (currentPosition.left > 0) {
                    player.style.left = (currentPosition.left - 40) + 'px';
                }
                break;
            case 38: // up
                if (currentPosition.top > 0) {
                    player.style.top = (currentPosition.top - 40) + 'px';
                }
                break;
            case 39: // right
                if (currentPosition.left < maze.offsetWidth - 80) {
                    player.style.left = (currentPosition.left + 40) + 'px';
                }
                break;
            case 40: // down
                if (currentPosition.top < maze.offsetHeight - 80) {
                    player.style.top = (currentPosition.top + 40) + 'px';
                }
                break;
        }

        if (checkCollision(player, goal)) {
            alert('CONGRATS!');
        }
    };

    const checkCollision = function(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return (
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top &&
            rect1.left < rect2.right &&
            rect1.right > rect2.left
        );
    };

    document.addEventListener('keydown', movePlayer);
});

const button = document.querySelector('.my-button');

button.addEventListener('click', () => {
  alert('Useless Button Clicked!');
});

const button2 = document.querySelector('.my-button2');

button2.addEventListener('click', function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});
