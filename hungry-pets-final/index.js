const petNamesArray = [
  {
    id: 0,
    name: "Whiskers",
    emoji: "🐾",
    epitaph: "Forever chasing butterflies in our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 1,
    name: "Puddles",
    emoji: "🌧️",
    epitaph: "Splashed through life with boundless joy.",
    love: 0,
    hunger: 0,
  },
  {
    id: 2,
    name: "Snickers",
    emoji: "🍫",
    epitaph: "Sweet memories and endless cuddles.",
    love: 0,
    hunger: 0,
  },
  {
    id: 3,
    name: "Luna",
    emoji: "🌙",
    epitaph: "In our hearts, forever shining bright.",
    love: 0,
    hunger: 0,
  },
  {
    id: 4,
    name: "Pixel",
    emoji: "🖱️",
    epitaph: "Clicked with us in every moment.",
    love: 0,
    hunger: 0,
  },
  {
    id: 5,
    name: "Ziggy",
    emoji: "🌟",
    epitaph: "Danced through life, leaving trails of happiness.",
    love: 0,
    hunger: 0,
  },
  {
    id: 6,
    name: "Mochi",
    emoji: "🍡",
    epitaph: "Filled our lives with softness and warmth.",
    love: 0,
    hunger: 0,
  },
  {
    id: 7,
    name: "Simba",
    emoji: "🦁",
    epitaph: "Roaring spirit, forever king of our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 8,
    name: "Bubbles",
    emoji: "🛁",
    epitaph: "Popped with love and bubbly spirit.",
    love: 0,
    hunger: 0,
  },
  {
    id: 9,
    name: "Tofu",
    emoji: "🥟",
    epitaph: "Soft-hearted and dearly missed.",
    love: 0,
    hunger: 0,
  },
  {
    id: 10,
    name: "Noodle",
    emoji: "🍜",
    epitaph: "Twirled around us with endless love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 11,
    name: "Marshmallow",
    emoji: "☁️",
    epitaph: "Soft and sweet, now floating among the stars.",
    love: 0,
    hunger: 0,
  },
  {
    id: 12,
    name: "Gizmo",
    emoji: "🤖",
    epitaph: "Forever buzzing in our memories.",
    love: 0,
    hunger: 0,
  },
  {
    id: 13,
    name: "Olive",
    emoji: "🫒",
    epitaph: "Added flavor to our lives.",
    love: 0,
    hunger: 0,
  },
  {
    id: 14,
    name: "Pepper",
    emoji: "🌶️",
    epitaph: "Spiced up every moment we shared.",
    love: 0,
    hunger: 0,
  },
  {
    id: 15,
    name: "Tinkerbell",
    emoji: "✨",
    epitaph: "Sprinkled magic wherever she flew.",
    love: 0,
    hunger: 0,
  },
  {
    id: 16,
    name: "Jinx",
    emoji: "🍀",
    epitaph: "Brought luck and laughter to our lives.",
    love: 0,
    hunger: 0,
  },
  {
    id: 17,
    name: "Echo",
    emoji: "🔊",
    epitaph: "His bark echoes in our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 18,
    name: "Cinnamon",
    emoji: "🌿",
    epitaph: "Wrapped us in warmth and comfort.",
    love: 0,
    hunger: 0,
  },
  {
    id: 19,
    name: "Waffles",
    emoji: "🥞",
    epitaph: "Stacked high with love and happiness.",
    love: 0,
    hunger: 0,
  },
  {
    id: 20,
    name: "Zephyr",
    emoji: "🌬️",
    epitaph: "Swept through our lives with gentle breezes.",
    love: 0,
    hunger: 0,
  },
  {
    id: 21,
    name: "Biscuit",
    emoji: "🍪",
    epitaph: "Crumbled our hearts with sweetness.",
    love: 0,
    hunger: 0,
  },
  {
    id: 22,
    name: "Doodle",
    emoji: "✏️",
    epitaph: "Drew joy in every stroke of life.",
    love: 0,
    hunger: 0,
  },
  {
    id: 23,
    name: "Socks",
    emoji: "🧦",
    epitaph: "Purred his way into our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 24,
    name: "Sprinkles",
    emoji: "🎉",
    epitaph: "Scattered joy wherever she went.",
    love: 0,
    hunger: 0,
  },
  {
    id: 25,
    name: "Twix",
    emoji: "🍬",
    epitaph: "Sweet memories linger like caramel.",
    love: 0,
    hunger: 0,
  },
  {
    id: 26,
    name: "Whisper",
    emoji: "🗣️",
    epitaph: "Her love whispers in the wind.",
    love: 0,
    hunger: 0,
  },
  {
    id: 27,
    name: "Mango",
    emoji: "🥭",
    epitaph: "Juicy memories forever ripe.",
    love: 0,
    hunger: 0,
  },
  {
    id: 28,
    name: "Paws",
    emoji: "🐾",
    epitaph: "Left imprints of love on our souls.",
    love: 0,
    hunger: 0,
  },
  {
    id: 29,
    name: "Midnight",
    emoji: "🌌",
    epitaph: "A star that forever shines in our sky.",
    love: 0,
    hunger: 0,
  },
  {
    id: 30,
    name: "Breeze",
    emoji: "🌬️",
    epitaph: "Gently rustled our hearts with love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 31,
    name: "Muffin",
    emoji: "🧁",
    epitaph: "Sweet memories baked with love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 32,
    name: "Tango",
    emoji: "💃",
    epitaph: "Danced through life with elegance and grace.",
    love: 0,
    hunger: 0,
  },
  {
    id: 33,
    name: "Serenade",
    emoji: "🎶",
    epitaph: "Her purrs still serenade our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 34,
    name: "Peanut",
    emoji: "🥜",
    epitaph: "Small in size, big in love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 35,
    name: "Jigsaw",
    emoji: "🧩",
    epitaph: "Piecemealed our hearts together.",
    love: 0,
    hunger: 0,
  },

  {
    id: 36,
    name: "Sprout",
    emoji: "🌱",
    epitaph: "Grew our hearts with endless love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 37,
    name: "Toffee",
    emoji: "🍬",
    epitaph: "Sweetness etched in our memories.",
    love: 0,
    hunger: 0,
  },
  {
    id: 38,
    name: "Dazzle",
    emoji: "✨",
    epitaph: "Lit up our lives with radiance.",
    love: 0,
    hunger: 0,
  },
  {
    id: 39,
    name: "Harmony",
    emoji: "🎵",
    epitaph: "Melodies of love linger forever.",
    love: 0,
    hunger: 0,
  },
  {
    id: 40,
    name: "Blizzard",
    emoji: "❄️",
    epitaph: "Snowed us under a blanket of love.",
    love: 0,
    hunger: 0,
  },
  {
    id: 41,
    name: "Pippin",
    emoji: "🍏",
    epitaph: "An apple of our eyes forever.",
    love: 0,
    hunger: 0,
  },
  {
    id: 42,
    name: "Spark",
    emoji: "🎇",
    epitaph: "Ignited our hearts with joy.",
    love: 0,
    hunger: 0,
  },
  {
    id: 43,
    name: "Fuzzy",
    emoji: "🧸",
    epitaph: "Wrapped us in cuddles and warmth.",
    love: 0,
    hunger: 0,
  },
  {
    id: 44,
    name: "Saffron",
    emoji: "🌼",
    epitaph: "Added golden hues to our lives.",
    love: 0,
    hunger: 0,
  },
  {
    id: 45,
    name: "Rhythm",
    emoji: "🥁",
    epitaph: "Beat the rhythm of our hearts.",
    love: 0,
    hunger: 0,
  },
  {
    id: 46,
    name: "Nova",
    emoji: "🌟",
    epitaph: "A star that forever shines bright.",
    love: 0,
    hunger: 0,
  },
];
let running = true;
let counter = 0;

const container = document.querySelector("#petcard-container");
function render(petNames) {
  const div = document.createElement("div");
  div.className = "card";
  div.id = petNames.id;
  const p1 = document.createElement("p");
  p1.className = "icon";
  p1.textContent = petNames.emoji;
  div.appendChild(p1);
  const h3 = document.createElement("h3");
  h3.textContent = petNames.name;
  div.appendChild(h3);

  let meter = document.createElement("div");
  meter.className = "meter";
  let p2 = document.createElement("p");
  p2.textContent = "Hunger:";
  meter.appendChild(p2);
  let meterContainer = document.createElement("div");
  meterContainer.className = "meter-container";

  let meterLevel = document.createElement("div");
  meterLevel.className = "meter-level";
  meterLevel.id = petNames.id;

  meterContainer.appendChild(meterLevel);
  meter.appendChild(meterContainer);
  div.appendChild(meter);

  let meter1 = document.createElement("div");
  meter1.className = "meter";
  let p3 = document.createElement("p");
  p3.textContent = "Love:";
  meter1.appendChild(p3);
  let meterContainer2 = document.createElement("div");
  meterContainer2.className = "meter-container";

  let meterLevel2 = document.createElement("div");
  meterLevel2.className = "meter-level";
  meterLevel2.id = petNames.id;

  meterContainer2.appendChild(meterLevel2);
  meter1.appendChild(meterContainer2);
  div.appendChild(meter1);

  const button = document.createElement("button");
  button.id = petNames.id;
  button.textContent = "Feed me🍞";
  div.appendChild(button);
  container.appendChild(div);

  let hungerLevel = 0;
  let LoveLevel = 100;
  let interval = setInterval(function () {
    meterLevel.style.flexBasis = `${(hungerLevel += 1)}%`;
    meterLevel2.style.flexBasis = `${(LoveLevel -= 1)}%`;
    meterLevel2.style.backgroundColor = "green";
    if (hungerLevel >= 100 || LoveLevel == 0) {
      counter += 1;
      h3.style.color = "#fff";
      p1.style.backgroundColor = "#000";
      p1.style.borderRadius = "10px";

      div.style.backgroundColor = "red";
      meter.remove();
      meter1.remove();
      button.remove();

      const epitaph = document.createElement("blockquote");
      epitaph.textContent = ` "${petNames.epitaph}" `;
      epitaph.className = "epitaph";

      div.appendChild(epitaph);
      appendEpitaph = true;

      clearInterval(interval);
    }
  }, 1000);

  button.addEventListener("click", function () {
    hungerLevel = 0;
    meterLevel.style.flexBasis = "0%";
  });

  p1.addEventListener("click", function () {
    meterLevel2.style.flexBasis = "100%";
    LoveLevel = 100;
  });
}

render(petNamesArray[0]);
let i = 1;
let timer = setInterval(function () {
  if (counter == 0) {
    render(petNamesArray[i]);
    i = (i + 1) % petNamesArray.length;
  } else if (counter >= 1) {
    clearInterval(timer);
  }
}, 30000);
