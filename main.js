// setting variables
let content1 = document.querySelector(".content1");
let content2 = document.querySelector(".content2");
let myMissions = {
    standard: {
        easy: [
            "this is a sample paragraph about something interesting. it doesn't have any numbers or special characters.",
            "once upon a time, in a land far away, there lived a group of friendly creatures who loved to play together.",
            "the sun sets over the horizon, painting the sky in shades of orange and pink. a gentle breeze rustles the leaves.",
            "in a quiet village nestled between rolling hills, people live a simple life close to nature and each other.",
            "underneath the starry night sky, friends gather around a campfire, sharing stories and laughter.",
            "the sound of waves crashing against the shore creates a soothing rhythm, calming the mind.",
            "amidst the hustle and bustle of the city, a small cafe offers a peaceful oasis for coffee lovers.",
            "children run through fields of wildflowers, their laughter echoing through the warm summer air.",
            "as raindrops tap against the window, a sense of coziness fills the room, making it the perfect day to read a book.",
            "through the dense forest, a hidden waterfall reveals itself, surrounded by lush vegetation.",
            "beneath the twinkling stars, the universe stretches infinitely, inviting wonder and exploration.",
            "a garden blooms with vibrant colors, attracting butterflies and bringing joy to all who visit.",
            "on a clear night, the moon's glow illuminates the landscape, casting long shadows.",
            "a secret garden lies behind an old stone wall, a sanctuary for both plants and imagination.",
            "in the heart of the desert, cacti stand tall, adapting to the harsh environment.",
            "the gentle hum of a bee fills the air as it moves from flower to flower, pollinating life.",
            "whispers of the wind carry tales of distant lands and dreams waiting to be pursued.",
            "on a rainy day, puddles become mirrors, reflecting the world in a new way.",
            "between the pages of an old book, stories of the past come alive, connecting generations.",
            "as the sun rises, a new day begins, filled with opportunities and adventures.",
            "within the quiet of the forest, creatures of all sizes find harmony in their natural home."
        ],
        mediem: [
            "Once upon a time, in a land far away, there lived a group of 5 friendly creatures. They loved to play together and explore the world around them!",
            "The sun sets over the horizon, painting the sky in shades of orange and pink. A gentle breeze rustles the leaves of the 7 trees, creating a peaceful melody.",
            "In a quiet village nestled between rolling hills, people live a simple life close to nature and each other. The villagers gather in the square to celebrate 3 festivals.",
            "Underneath the starry night sky, friends gather around a campfire, sharing stories and laughter. The 9 crackling flames cast dancing shadows on the ground.",
            "The sound of 2 waves crashing against the shore creates a soothing rhythm, calming the mind. Seagulls fly overhead, their calls echoing in the distance.",
            "Amidst the hustle and bustle of the city, a small cafe offers a peaceful oasis for coffee lovers. The aroma of freshly brewed coffee fills the air.",
            "Children run through fields of 8 wildflowers, their laughter echoing through the warm summer air. Butterflies flutter by, adding to the colorful scene.",
            "As 4 raindrops tap against the window, a sense of coziness fills the room, making it the perfect day to read a book. A cup of 6 hot tea completes the scene.",
            "Through the dense forest, a hidden waterfall reveals itself, surrounded by lush vegetation. The water cascades down the rocks with a soothing sound.",
            "Beneath the 1 twinkling stars, the universe stretches infinitely, inviting wonder and exploration. Astronomers study the mysteries of the cosmos.",
            "A garden blooms with vibrant colors, attracting butterflies and bringing joy to all who visit. 7 Gardeners tend to the plants with care and dedication.",
            "On a clear night, the moon's glow illuminates the landscape, casting long shadows. The quiet beauty of the night inspires contemplation.",
            "A secret garden lies behind an old stone wall, a sanctuary for both plants and imagination. Visitors discover its magic with every step.",
            "In the heart of the desert, 9 cacti stand tall, adapting to the harsh environment. Their resilience is a testament to the power of nature.",
            "The gentle hum of a bee fills the air as it moves from 5 flower to flower, pollinating life. Nature's delicate balance thrives in these interactions.",
            "Whispers of the wind carry tales of distant lands and 8 dreams waiting to be pursued. The wind's touch is a reminder of the interconnectedness of the world.",
            "On a rainy day, 2 puddles become mirrors, reflecting the world in a new way. People carry colorful umbrellas as they go about their day.",
            "Between the pages of an old book, stories of the past come alive, connecting generations. The words on the pages hold the wisdom of ages.",
            "As the sun rises, a new day 7 begins, filled with opportunities and adventures. The first rays of light illuminate the world with a golden hue.",
            "Within the quiet of the forest, 4 creatures of all sizes find harmony in their natural home. The forest's tranquility is a source of inspiration.",
            "Explorers venture into 6 uncharted territories, driven by curiosity and the desire to uncover new knowledge. Their journeys shape our understanding of the world.",
            "In the heart of the city, skyscrapers reach for the sky, forming a breathtaking urban landscape. City lights create a vibrant tapestry after sunset."
        ],
        hard: [
            "Welcome to the Enchanted Forest, a realm where the mystical and the mundane intertwine. Amidst the rustling of leaves and the echoes of footsteps, secrets await your discovery. Journey along the path marked by 7 ancient stones, each engraved with a unique numeral.",
            "Journey through Time. Embark on a passage through the annals of existence, where the past whispers tales of forgotten heroes and the future beckons with dreams yet to be realized. Traverse epochs guided by the constellations of Orion with 3 stars and the Big Dipper with 7 stars.",
            "Whispers of the Wind. Listen closely to the wind's murmurs as it sweeps through valleys and over mountains. Carried upon its ethereal breath are the stories of 5 distant lands and the yearnings of 100 hearts unknown. Count the gusts as they weave stories with numbers.",
            "Beneath the Starlit Sky. Gaze upward into the tapestry of stars, where constellations etch stories across the expanse of night. Each star a beacon of light, illuminating limitless possibilities that stretch beyond 500 light-years. Locate the North Star with a magnitude of 2 and the Great Bear constellation with 7 stars.",
            "Echoes in the Canyon. In the heart of the canyon, echoes reverberate like voices of ages past. These voices speak of explorations and revelations, sharing wisdom of those who've wandered these paths before. Tune in to the echoes as they count down from 10 to 1.",
            "Footsteps on Cobblestone Streets. Cobblestone streets bear witness to the dance of countless souls. Each stone holds the imprint of 1000 footsteps that have echoed through time, a symphony of lives intertwined. Walk down the cobblestone path of your own life, marked by years from 1985 to 2023.",
            "Harmony of Raindrops. The rhythm of raindrops falling is nature's melody of growth and renewal. Each drop contributes to the earth's harmonious melody, a reminder of interconnected rhythms of life. Close your eyes and count the raindrops as they fall, reaching up to 500 before the shower ends.",
            "Mysteries of the Moon. The moon, a sentinel in the night sky, holds enigmas that have captivated humanity for eons. Its silvery glow is a beacon of contemplation, inviting us to unravel celestial puzzles above. Gaze at the moon's surface and identify the number of craters you can find.",
            "Sunset's Embrace. As the sun bids farewell to the day, it paints the sky with hues of amber, lavender, and gold. This momentary masterpiece reminds us that endings can be as beautiful as beginnings. Observe colors change and count seconds it takes for the sun to dip below the horizon.",
            "Reflections on Still Waters. Tranquil waters mirror the world's essence, capturing essence of universe in serene depths. With each ripple, they reflect ever-changing nature of existence. Toss a pebble into water and count ripples that spread outward, reaching numbers as high as 50.",
            "Gentle Fire of Candlelight. Warm glow of candlelight illuminates more than physical spaces; it lights pathways of soul. Within its flicker, stories are shared, introspection kindled, and dreams nurtured. Light 7 candles and let them burn for exactly 30 minutes each.",
            "Serenade of Rustling Leaves. Leaves rustle like whispered secrets in embrace of wind. They share tales of seasons past, dances of life and decay, and beauty found in nature's transitions. Find a cluster of leaves and count veins branching out from center, reaching numbers of 20 or more.",
            "Eternal Sands of the Desert. Across desert's expanse, shifting sands conceal history written in grains. Stories of time, endurance, and change are etched into dunes, waiting to be discovered. Stand in desert and count sand grains within a small handful, estimating numbers in the thousands.",
            "Mountains in Morning's Embrace. Mountains stand as silent sentinels, embracing dawn's first light. They've witnessed birth of days and cycles of life, testament to nature's enduring power. Gaze at peaks and estimate elevation of tallest mountain you see, considering numbers in the kilometers.",
            "River's Journey to the Sea. Follow river's meandering path, journey of flow and continuity. From mountain streams to open seas, it mirrors course of life, always moving forward. Stand by riverbank and count number of waves that pass by in one minute, aiming for high counts.",
            "Stars as Guiding Lights. Amidst night's canvas, stars shine as luminous guides, leading explorers and dreamers alike. Their brilliance inspires wonder and contemplation of cosmos. On clear night, look up and count as many stars as you can within span of 15 seconds, aiming for high numbers.",
            "Whispers Among City Lights. Within city's hustle and bustle, whispers of stories float like tendrils of smoke. Each street corner holds narratives of ambition, connection, and shared human experience. Walk through city and count streetlights that illuminate your path, aiming for hundreds.",
            "Chapters Written in Stone. History is etched in stone, narrative carved by time's patient hand. Every weathered mark tells of lives lived, cultures woven, and enduring influence of past. Touch stone surface and count visible layers that reveal passage of time, aiming for double digits.",
            "Stillness of Winter's Embrace. Winter's gentle touch blankets world in quiet stillness. Amidst crisp air and crystalline landscapes, reflections on life's cyclical nature emerge. Catch a snowflake on your fingertip and observe its unique crystalline structure, considering shapes and numbers of sides.",
            "Beneath Canopy of Dreams. Within canopy of dreams, imagination takes flight, conjuring worlds unknown. It's realm where borders of reality blur, inviting exploration of limitless vistas of thought. Close your eyes and envision a dreamworld where numbers themselves come to life.",
        ],
    },
    RepeatingWords: {
        easy: [
            "is",
            "it",
            "on",
            "go",
            "up",
            "down",
            "bird",
            "tree",
            "lake",
            "park",
            "jump",
            "read",
            "desk",
            "lamp",
            "fish",
            "blue",
            "red",
            "cat",
            "dog",
            "hat"
        ],
        mediem: [
            "apple",
            "banana",
            "orange",
            "grapes",
            "melon",
            "peach",
            "lemon",
            "cherry",
            "carrot",
            "tomato",
            "potato",
            "onion",
            "garlic",
            "pepper",
            "mango",
            "kiwi",
            "plum",
            "peanut",
            "almond",
            "walnut"
        ],
        hard: [
            "mountain",
            "umbrella",
            "elephant",
            "chocolate",
            "triangle",
            "keyboard",
            "backpack",
            "whisper",
            "fantastic",
            "harmony",
            "adventure",
            "tomorrow",
            "butterfly",
            "discovery",
            "symmetry",
            "sunshine",
            "zucchini",
            "wildlife",
            "beautiful",
            "landscape"
        ],
    }
};
function preventKeyboard(event) {
    event.preventDefault();      // Prevent the default behavior of the key event
    event.stopPropagation();     // Stop the event from propagating to parent elements
    event.returnValue = false;   // For older browsers (might not be necessary)
    return false;                // For older browsers (might not be necessary)
}
// the first page
let welcomeSentence = document.querySelector(".first-page > p");
let nameFeild = document.querySelector(".name");
let levelButtons = Array.from(document.querySelectorAll("input[name='levels']"));
let modeButtons = Array.from(document.querySelectorAll("input[name='modes']"));
// set name 
if (window.localStorage.getItem("name")) {
    nameFeild.value = window.localStorage.getItem("name");
    welcomeSentence.innerHTML = "Wellcome Back";
}
// attacking checked attr to checked ones
levelButtons.forEach(function (ele) {
    ele.onclick = function () {
        levelButtons.forEach(function (ele) {
            ele.removeAttribute("checked");
        })
        ele.setAttribute("checked", "");
    }
});
modeButtons.forEach(function (ele) {
    ele.onclick = function () {
        modeButtons.forEach(function (ele) {
            ele.removeAttribute("checked");
        })
        ele.setAttribute("checked", "");
    }
});
// i take the checked ones when the game starts
let gameBtn = document.querySelector(".game-btn");
// the second page
let nameSpan = document.querySelector(".name2");
let scoreSpan = document.querySelector(".score");
let levelSpan = document.querySelector(".game-lvl");
let modeSpan = document.querySelector(".game-mode");
let missionParent = document.querySelector(".mission");
let mission;
let wordsInput = document.querySelector(".input-feild .input");
let backBtn = document.querySelector(".back");
let againBtn = document.querySelector(".again");
let accuracySpan = document.querySelector(".accuracy");
let wpmSpan = document.querySelector(".wpm");
let duration = 3;
let level;
let mode;
let wordsdone = 0;
let nowMoment;
let diffInTime = 0;
let correct = 0;
let all = 0;
let workOnStr;
let startTimer;
let bestWpm = 0;
let addvancing = 0;
let i = 0;
let missionStr;
let curr1 = "";
let curr2 = "";
let currDone = "";
let updateRate = false;
// set the recored 
if (window.localStorage.getItem("wpm")) {
    scoreSpan.innerHTML = window.localStorage.getItem("wpm");
}
//toggling pages function

function pageToggle(str) {
    if (str === "content1") {
        content1.style.display = "block";
        content2.style.display = "none";
        document.removeEventListener("keydown", preventKeyboard);        
    } else {
        content2.style.display = "grid";
        content1.style.display = "none";
    }
}
// restrat function
function again() {
    duration = 3;
    wordsdone = 0;
    diffInTime = 0;
    correct = 0;
    addvancing = 0;
    all = 0;
    i = 0;
    wpmSpan.innerHTML = "0 wpm";
    accuracySpan.innerHTML = "100 %"
    // getting level and mode
    level = document.querySelector(".lvl input[checked] ")
    mode = document.querySelector(".mode input[checked] ")
    // setting level and mode
    levelSpan.innerHTML = level.nextElementSibling.innerHTML;
    modeSpan.innerHTML = mode.nextElementSibling.innerHTML;
    //setting mission 
    if (mode.id === "rep") {
        missionStr = myMissions.RepeatingWords[level.id][Math.floor(Math.random() * 20)];
        missionStr += " ";
        missionStr = missionStr.repeat(20).split("");
    } else {
        missionStr = myMissions.standard[level.id][Math.floor(Math.random() * 20)].split("");
        missionStr.push(" ");
    }
    // missionStr = ["a", "b", " ", "c", "d", " "]
    missionParent.innerHTML = "";
    let word = document.createElement("span");
    for (let j = 0; j < missionStr.length; j++) {
        let char = document.createElement("span");
        if (j === 0) {
            char.classList.add("blanker");
        }
        if (missionStr[j] === " ") {
            char.innerHTML = "&nbsp;";
            word.appendChild(char);
            missionParent.appendChild(word);
            word = document.createElement("span");
        } else {
            char.appendChild(document.createTextNode(missionStr[j]));
            word.appendChild(char);
            missionParent.appendChild(word);
        }
    }
    mission = Array.from(document.querySelectorAll(".mission  span span"));
    missionStr = missionStr.join("");
    curr1 = "";
    curr2 = "";
    currDone = "";
    // count down + focusing on input
    wordsInput.value = "";
    wordsInput.setAttribute("disabled", "");
    document.addEventListener("keydown", preventKeyboard);
    wordsInput.placeholder = `       Game Starts In ${duration}`;
    down = setInterval(() => {
        duration--;
        wordsInput.placeholder = `       Game Starts In ${duration}`;
        if (duration <= 0) {
            wordsInput.removeAttribute("disabled");
            document.removeEventListener("keydown", preventKeyboard);
            wordsInput.focus();
            wordsInput.placeholder = "";
            clearInterval(down)
            startTimer = new Date().getTime();
        }
    }, 1000);
    updateRate = true;
}
// start function
function start() {
    // to second page
    pageToggle("contetn2");
    //getting and setting name + to local storage
    nameSpan.innerHTML = nameFeild.value || "Unknown";
    window.localStorage.setItem("name", nameFeild.value);
    // call again
    again();
}
// starting the game
gameBtn.onclick = function () {
    // call start 
    start();
    // back to main
    backBtn.onclick = function () {
        pageToggle("content1");
    }
    // reset
    againBtn.addEventListener("click", function () {
        if (duration == 0) { again(); };
    });
    // start real stuff
    window.onkeydown = function (ele) {
        if (ele.key !== "Shift" && duration === 0) {
            if (i < mission.length - 1) {
                if ((ele.key === mission[i].innerHTML || (ele.key === " " && mission[i].innerHTML === `&nbsp;`)) && (missionStr.startsWith(curr1)) && (ele.key !== "Backspace") && (curr1 === curr2)) {
                    wordsInput.style.color = "inherit";
                    curr1 += ele.key;
                    mission.forEach(function (ele) {
                        ele.classList.remove("blanker");
                    })
                    mission[i].classList.add("green");
                    i < mission.length - 1 ? i++ : i;
                    mission[i].classList.add("blanker");
                    if (ele.key === " ") {
                        currDone += wordsInput.value;
                        wordsInput.value = "";
                        addvancing++;
                    };
                    correct++;
                    all++;
                    if (i === mission.length - 1) {
                        currDone += wordsInput.value;
                        wordsInput.value = "";
                        addvancing++;
                        updateRate = false;
                        wordsInput.value = "";
                        wordsInput.setAttribute("disabled", "");
                        document.addEventListener("keydown", preventKeyboard);
                        wordsInput.placeholder = `             Game Over`;
                        if (+wpmSpan.innerHTML.slice(0, wpmSpan.innerHTML.length - 4) > +scoreSpan.innerHTML.slice(0, scoreSpan.innerHTML.length - 4)) {
                            scoreSpan.innerHTML = wpmSpan.innerHTML;
                            window.localStorage.setItem("wpm", scoreSpan.innerHTML);
                        }
                    }
                } else if (ele.key !== "Backspace") {
                    wordsInput.style.color = "rgb(206 72 72)";
                    mission.forEach(function (ele) {
                        ele.classList.remove("blanker");
                    })
                    mission[i].classList.add("red");
                    i < mission.length - 1 ? i++ : i;
                    mission[i].classList.add("blanker");
                    all++;
                } else if (curr2.length > curr1.length) {
                    if (ele.key === "Backspace") {
                        curr2 = curr2.slice(0, curr2.length - 1);
                        mission[i].classList.remove("blanker");
                        i > 0 ? i-- : i;
                        mission[i].classList.remove("red");
                        mission[i].classList.add("blanker");
                    }
                } else if (curr1.length > currDone.length) {
                    curr1 = curr1.slice(0, curr1.length - 1);
                    curr2 = curr2.slice(0, curr2.length - 1);
                    mission[i].classList.remove("blanker");
                    i > 0 ? i-- : i;
                    mission[i].classList.remove("green");
                    mission[i].classList.add("blanker");
                }
                if (ele.key !== "Backspace") {
                    curr2 += ele.key;
                }
            } else {
                if (ele.key === "Backspace") {
                    curr2 = curr2.slice(0, curr2.length - 1);
                    mission[i].classList.remove("blanker");
                    i > 0 ? i-- : i;
                    mission[i].classList.remove("red");
                    mission[i].classList.add("blanker");
                    wordsInput.disabled = false;
                    wordsInput.focus();
                } else {
                    wordsInput.disabled = true;
                }
            }
        }
    }
    // cheking accuracy and wpm
    let scoreREp = setInterval(function () {
        let now = new Date().getTime();
        if (all !== 0 && updateRate) {
            accuracySpan.innerHTML = `${Math.floor(correct / all * 100)} %`;
            wpmSpan.innerHTML = (`${Math.floor(addvancing / ((now - startTimer) / 1000 / 60))} wpm`)
        }
    }, 1000);
};    
