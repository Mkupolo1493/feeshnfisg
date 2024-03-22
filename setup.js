// make a fish (enemy? side character? boss? idk) that is slightly low-poly looking (like the Sharp bird from journal 2/21)
// idea credit: Eila
// make Incandescent Fish enemy

class Fish {
    constructor(name, keys) {
        this.name = name;
        this.keys = keys;
        
        this.melody = {};

        for (let i = 0; i < 4; i++) {
            this.melody[keys[i]] = [];
        }
        
        this.currentTime = 0;

        this.sprite = document.getElementById(`${name}-sprite`);
        this.orientation = 0;
        this.spriteVariation = "a";
        this.currentSprite = null;
        this.reset = 0;

        for (let direction = 4; direction >= 0; direction--) {
            this.orientation = direction;
            for (let i = 0; i < 5; i++) {
                this.spriteVariation = "edcba"[i];
                this.currentSprite = document.createElement("img");
                this.currentSprite.id = `${name}-sprite-${this.orientation}${this.spriteVariation}`;
                this.currentSprite.src = `🐟/${name}_${this.orientation}${this.spriteVariation}.png`;
                this.currentSprite.style.display = "none";
                this.sprite.appendChild(this.currentSprite);
            }
        }
    }
    playNote() {
        console.error("cannot play, no audio");
    }
    addNote(key, note, restLength) {
        this.melody[key].push({time: this.currentTime, note: note})
        this.currentTime += restLength;
    }
    sortMelody() {
        for (const key in this.melody) {
            this.melody[key].sort((a, b) => a.time - b.time);
        }
    }
    updateSprite() {
        // Set a new sprite variation that is different from the current one
        // filter current sprite variation from a list containing all five (abcde) and select one of the remaining four randomly
        this.spriteVariation = ["a", "b", "c", "d", "e"].filter(letter => letter !== this.spriteVariation)[Math.floor(Math.random() * 4)];

        this.currentSprite.style.display = "none";
        this.currentSprite = document.getElementById(`${this.name}-sprite-${this.orientation}${this.spriteVariation}`);
        this.currentSprite.style.display = "block";
    }
}

let feesh = new Fish("feesh", "jkl;");
let fisg = new Fish("fisg", "asdf");