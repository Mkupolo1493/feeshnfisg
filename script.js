const melody = "CEGEDFAFGEBEAcEc";
const startDelay = 500;
const restFrames = 20;
const noteSpeed = 3;

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
        
        this.audio = document.getElementById(elementId + "-audio");
        this.lastFrame = false;
        this.thisFrame = false;

        const self = this;
        window.addEventListener("keydown", function(e) {
            if (e.code === keyLookup[elementId]) {
                // ooh, idea! what if some enemies had special arrows that were upside down and you had to hit shift to get them?
                // perhaps those could be sharps
                // an extra octave also sounds nice, but every button is just a different note, and it magically plays the correct octave if that's coded into the melody
                // actually, instead of shift (though the idea was bc e.key), maybe it could be space? or you could move up on the home row? but then how would arrow keys work?
                // this is still a worthwhile idea because then different scales could naturally be different difficulties
                // wait, no. that would be too many exceptions and make the game way too stupid
                // each enemy has their own scale, and the notes are adjusted to the scale, but ACCIDENTALS are done with the row above
                // would that be internally a different button?

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
    queueNote(framesFromStart) {
        this.notes.push(framesFromStart);

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
                
                if (this.notes[i] === 100) this.noteIcons[i].classList.remove("hidden");
                if (this.notes[i] <= 100) this.noteIcons[i].style.top = `${this.notes[i] * noteSpeed}vh`;
            }
            
            if (this.notes[0] <= -80) { // do notes automatically get missed if the next is at 0ms? science can't confirm or deny 😔
                this.miss();
            }
        }
    }
    shiftNotes() {
        this.notes.shift();
        this.noteIcons[0].remove();
        this.noteIcons.shift();
    }
    miss() {
        console.log("miss");
        this.shiftNotes();
    }
    hit() {
        if (this.notes.length === 0) console.log("no notes");
        
        let dontShift = false;
        if (this.notes[0] <= -30) {
            console.log("garbage");
        }
        else if (this.notes[0] <= -5) {
            console.log("late");
        }
        else if (this.notes[0] <= 5) {
            console.log("perfect");
        }
        else if (this.notes[0] <= 20) {
            console.log("early");
        }
        else {
            dontShift = true;
            console.log("none");
        }
        
        if (dontShift === false) this.shiftNotes();
        
        this.audio.currentTime = 0.2;
        this.audio.play(); // this is gonna get a lot more complicated :\
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

for (let i = 0; i < melody.length; i++) {
    const note = melody[i];
    switch (note) {
        case "C":
            keys.push("a");
            break;
        case "D":
            keys.push("s");
            break;
        case "E":
            keys.push("d");
            break;
        case "F":
            keys.push("f");
            break;
        case "G":
            keys.push("j");
            break;
        case "A":
            keys.push("k");
            break;
        case "B":
            keys.push("l");
            break;
        case "c":
            keys.push(";");
            break;
        default:
            throw "Invalid note: " + note;
    }
}
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    buttons[key].queueNote(i * restFrames + startDelay);
}
async function main() {
    Object.keys(buttons).forEach(function(e) {
        buttons[e].newFrame();
    });
}
let runLoop = setInterval(main, 20);