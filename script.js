const animals = ["🐶","🐱","🦊","🐼","🐨","🦁","🐸","🐵"];
let cards = [...animals, ...animals];
    let flippedCards = [];
    let matchedCards = 0;

    cards.sort(() => 0.5 - Math.random());

    const board = document.getElementById("gameBoard");

    cards.forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.animal = animal;
      card.innerText = "?";

      card.addEventListener("click", () => flipCard(card));

      board.appendChild(card);
    });

    function flipCard(card) {
      if (card.classList.contains("flipped") || card.classList.contains("matched") || flippedCards.length === 2) {
        return;
      }

      card.classList.add("flipped");
      card.innerText = card.dataset.animal;
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }

    function checkMatch() {
      const [card1, card2] = flippedCards;

      if (card1.dataset.animal === card2.dataset.animal) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards += 2;
        flippedCards = [];

        if (matchedCards === cards.length) {
          setTimeout(() => alert("🎉 Победа! Ты нашёл все пары!"), 500);
        }
      } else {
        setTimeout(() => {
          card1.classList.remove("flipped");
          card2.classList.remove("flipped");
          card1.innerText = "?";
          card2.innerText = "?";
          flippedCards = [];
        }, 1000);
      }
    }