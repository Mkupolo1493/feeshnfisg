const noteSpeed = 2; // how fast the notes move up the screen (3 = 3vh per frame)
const slowdownMultiplier = 1.5;

const scoreContainer = document.getElementById("score");
let score = 50;

function changeScore(amount) {
    score += amount;
    scoreContainer.innerHTML = score;
}

let keys = [];

const keyLookup = {
    "a-key": "KeyA",
    "s-key": "KeyS",
    "d-key": "KeyD",
    "f-key": "KeyF",

    "left-arrow": "KeyJ",
    "down-arrow": "KeyK",
    "up-arrow": "KeyL",
    "right-arrow": "Semicolon"
};

class Button {
    constructor(elementId) {
        this.btn = document.getElementById(elementId);
        
        this.notes = [];
        this.noteIcons = [];
        this.notePitches = [];
        
        this.lastFrame = false;
        this.thisFrame = false;

        const self = this;
        window.addEventListener("keydown", function(e) {
            if (e.code === keyLookup[elementId]) {
                self.thisFrame = true;
                self.btn.classList.add("note-on");
            }
        });
        window.addEventListener("keyup", function(e) {
            if (e.code === keyLookup[elementId]) {
                self.thisFrame = false;
                self.btn.classList.remove("note-on");
            }
        });
    }
    queueNote(framesFromStart, note) {
        this.notes.push(Math.round(framesFromStart * slowdownMultiplier));
        this.notePitches.push(note);

        let noteIcon = document.createElement("div");
        noteIcon.classList.add("note-icon");
        noteIcon.classList.add("hidden");
        
        this.noteIcons.push(noteIcon);
        this.btn.appendChild(noteIcon);
    }
    newFrame() {
        if (this.lastFrame === false && this.thisFrame === true) {
            this.hit();
        }

        this.lastFrame = this.thisFrame;
        
        if (this.notes.length) {
            for (let i = 0; i < this.notes.length; i++) {
                this.notes[i]--;
                
                if (this.notes[i] <= 100) {
                    this.noteIcons[i].style.top = `${this.notes[i] * noteSpeed}vh`;
                    this.noteIcons[i].classList.remove("hidden");
                }
            }
            
            if (this.notes[0] <= -20) { // do notes automatically get missed if the next is at 0ms? science can't confirm or deny 😔
                this.miss();
            }

            /*if (this.notes[0] === 0) {
                this.hit();
            }*/
        }
    }
    shiftNotes() {
        this.notes.shift();
        
        this.noteIcons[0].remove();
        this.noteIcons.shift();
        
        this.notePitches.shift();
    }
    miss() {
        console.log("miss");
        changeScore(-5);
        this.shiftNotes();
    }
    hit() {
        if (this.notes.length === 0) {
            console.log("no notes");
            changeScore(-7);
            return;
        }
        
        let dontShift = false;
        if (this.notes[0] <= -10) {
            console.log("garbage");
            changeScore(-5);
        }
        else if (this.notes[0] <= -1) {
            console.log("late");
            changeScore(-1);
        }
        else if (this.notes[0] <= 5) {
            console.log("perfect");
            changeScore(3);
        }
        else if (this.notes[0] <= 10) {
            console.log("early");
            changeScore(1);
        }
        else {
            dontShift = true;
            console.log("none");
            changeScore(-7);
        }

        if (dontShift === false) {
            if (["a-key", "s-key", "d-key", "f-key"].includes(this.btn.id)) {
                fisg.playNote(this.notePitches[0]);
            }
            else {
                feesh.playNote(this.notePitches[0]);
            }

            changeSprite(this.btn.id, 25);
            
            this.shiftNotes();
        }
    }
}

let buttons = {
    a: new Button("a-key"),
    s: new Button("s-key"),
    d: new Button("d-key"),
    f: new Button("f-key"),

    j: new Button("left-arrow"),
    k: new Button("down-arrow"),
    l: new Button("up-arrow"),
    ";": new Button("right-arrow")
};

Object.keys(feesh.melody).forEach(function(key) {
    feesh.melody[key].forEach(function(note) {
        buttons[key].queueNote(note.time, note.note);
    });
});
Object.keys(fisg.melody).forEach(function(key) {
    fisg.melody[key].forEach(function(note) {
        buttons[key].queueNote(note.time, note.note);
    });
});

let currentFrame = 0;

fisg.orientation = 0;
fisg.spriteVariation = "a";
fisg.reset = 0;

function changeSprite(key, duration) {
    let fish = (key === "a-key" || key === "s-key" || key === "d-key" || key === "f-key") ? fisg : feesh;
    if (fish === feesh) return;

    fisg.orientation = ["this is a placeholder for the 0 value, which is the idle position and thus is not used by changeSprite", "a-key", "s-key", "d-key", "f-key"].indexOf(key);
    
    fish.reset = currentFrame + duration;

    updateSprite();
}

function updateSprite() {
    // Set a new sprite variation for fisg that is different from the current one
    // filter current sprite variation from a list containing all five (abcde) and select one of the remaining four randomly:
    fisg.spriteVariation = ["a", "b", "c", "d", "e"].filter(letter => letter !== fisg.spriteVariation)[Math.floor(Math.random() * 4)];
    
    document.getElementById("fisg-sprite").src = `/🐟/fisg_${fisg.orientation}${fisg.spriteVariation}.png`; // set sprite to selected image
    if (fisg.orientation === 0) document.getElementById("fisg-sprite").style.backgroundColor = "#01f4af00";
    if (fisg.orientation === 1) document.getElementById("fisg-sprite").style.backgroundColor = "#FAA";
    if (fisg.orientation === 2) document.getElementById("fisg-sprite").style.backgroundColor = "#FFA";
    if (fisg.orientation === 3) document.getElementById("fisg-sprite").style.backgroundColor = "#aaffaa";
    if (fisg.orientation === 4) document.getElementById("fisg-sprite").style.backgroundColor = "#aaaaff";
}

function main() {
    currentFrame++;
    Object.keys(buttons).forEach(function(e) {
        buttons[e].newFrame();
        if (currentFrame > (1400 * slowdownMultiplier) && currentFrame % 20 == 10 && Math.random() < 0.5 - 0.5 * (0.9999 ** (currentFrame - 1000))) {
            buttons[e].queueNote(101, ["C4", "E4", "G4", "A4", "C5", "E5", "G5", "A5", "C6"][Math.floor(Math.random() * 9)]);
        }
    });

    if (currentFrame === fisg.reset) {
        fisg.orientation = 0;
        updateSprite();
    }
    else if (fisg.orientation === 0 && currentFrame % 10 === 0) {
        updateSprite();
    }

    if (drums.times[0] <= Math.round(currentFrame / slowdownMultiplier)) {
        drums.times.shift();
        drums.snare.start();
    }
    
    if (score <= 0) {
        clearInterval(runLoop);
        scoreContainer.classList.add("gg");
        scoreContainer.innerHTML = `GG! You survived for ${currentFrame / 50} seconds.`;
        let highScore = document.cookie
          .split("; ")
          .find((row) => row.startsWith("score="))
          ?.split("=")[1];
        if (highScore === undefined || highScore < currentFrame) highScore = currentFrame;
        document.cookie = `score=${highScore}`;
        scoreContainer.innerHTML += `Your best is ${highScore / 50} seconds.`;
    }
}
let runLoop = setInterval(main, 20);