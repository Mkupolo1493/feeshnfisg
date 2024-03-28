const noteSpeed = 3; // how fast the notes move up the screen (3 = 3vh per frame)
const slowdownMultiplier = 1.39;

const scoreContainer = document.getElementById("score");
scoreContainer.title = slowdownMultiplier;
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
        noteIcon.classList.add(`${this.btn.id}-note`);
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

            /*if (this.notes[0] === 0) {// && ["a-key", "s-key", "d-key", "f-key"].includes(this.btn.id)) {
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
        else if (this.notes[0] <= -3) {
            console.log("late");
            changeScore(-1);
        }
        else if (this.notes[0] <= 3) {
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
                if (this.notePitches[0] === "F#2") console.log(currentFrame);
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

function changeSprite(key, duration) {
    let fish;

    switch (key) {
        case "a-key":
            fish = fisg;
            fisg.orientation = 1;
            break;
        case "s-key":
            fish = fisg;
            fisg.orientation = 2;
            break;
        case "d-key":
            fish = fisg;
            fisg.orientation = 3;
            break;
        case "f-key":
            fish = fisg;
            fisg.orientation = 4;
            break;
        case "left-arrow":
            fish = feesh;
            feesh.orientation = 1;
            break;
        case "down-arrow":
            fish = feesh;
            feesh.orientation = 2;
            break;
        case "up-arrow":
            fish = feesh;
            feesh.orientation = 3;
            break;
        case "right-arrow":
            fish = feesh;
            feesh.orientation = 4;
            break;
    }
    
    fish.reset = currentFrame + duration;

    fish.updateSprite();
}

function main() {
    currentFrame++;
    Object.keys(buttons).forEach(function(e) {
        buttons[e].newFrame();
        if (/*"asdf".includes(e) && */currentFrame > (2500 * slowdownMultiplier) && currentFrame % 20 == 10 && Math.random() < 0.5 - 0.5 * (0.9999 ** (currentFrame - 1000))) {
            buttons[e].queueNote(101, /*["C4", "E4", "G4", "A4", "C5", "E5", "G5", "A5", "C6"]*/["E5", "F#5", "A5", "B5"][Math.floor(Math.random() * 4)]);
        }
    });

    if (currentFrame === fisg.reset) {
        fisg.orientation = 0;
        fisg.updateSprite();
    }
    else if (currentFrame % 10 === 0) {
        fisg.updateSprite();
    }

    if (currentFrame === feesh.reset) {
        feesh.orientation = 0;
        feesh.updateSprite();
    }
    else if (currentFrame % 10 === 0) {
        feesh.updateSprite();
    }

    if (drums.times[0] <= Math.round(currentFrame / slowdownMultiplier)) {
        drums.times.shift();
        drums.snare.start();
    }
    if (currentFrame === Math.floor(42 * slowdownMultiplier)) {
        document.body.style.backgroundColor = "#facade";
        backtrack.volume = 0.4;
        backtrack.play();
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