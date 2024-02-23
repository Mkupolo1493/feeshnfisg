// make a fish (enemy? side character? boss? idk) that is slightly low-poly looking (like the Sharp bird from journal 2/21)
// idea credit: Eila

let feesh = {
    playNote: ()=>{console.log("cannot play, no audio")}, // will be monkey-patched to play an actual note once audio is allowed
    currentTime: 0,
    addNote: function(key, note, restLength) {
        this.melody[key].push({time: this.currentTime, note: note});
        this.currentTime += restLength; // Add rest length to current time
    },
    melody: {
        j: [],
        k: [],
        l: [],
        ";": []
    },
    sortMelody: function() {
        this.melody.j.sort((a, b) => a.time - b.time);
        this.melody.k.sort((a, b) => a.time - b.time);
        this.melody.l.sort((a, b) => a.time - b.time);
        this.melody[";"].sort((a, b) => a.time - b.time);
    },
    sprite: document.getElementById("feesh-sprite"),
    orientation: 0,
    spriteVariation: "a",
    currentSprite: "this isn't loaded yet, it will be at the bottom of this program",
    reset: 0,
    updateSprite: function() {
        // Set a new sprite variation that is different from the current one
        // filter current sprite variation from a list containing all "five (abcde)" [only 2 rn (ab)] and select one of the remaining four randomly:
        this.spriteVariation = ["a", "b"/*, "c", "d", "e"*/].filter(letter => letter !== this.spriteVariation)[Math.floor(Math.random() * /*4*/1)];

        this.currentSprite.style.display = "none";
        this.currentSprite = document.getElementById(`feesh-sprite-${this.orientation}${this.spriteVariation}`);
        this.currentSprite.style.display = "block";

        // if (fisg.orientation === 0) document.getElementById("fisg-sprite").style.backgroundColor = "#01f4af00";
        // if (fisg.orientation === 1) document.getElementById("fisg-sprite").style.backgroundColor = "#FAA";
        // if (fisg.orientation === 2) document.getElementById("fisg-sprite").style.backgroundColor = "#FFA";
        // if (fisg.orientation === 3) document.getElementById("fisg-sprite").style.backgroundColor = "#aaffaa";
        // if (fisg.orientation === 4) document.getElementById("fisg-sprite").style.backgroundColor = "#aaaaff";
    }
};

let fisg = {
    playNote: ()=>{console.log("cannot play, no audio")}, // same as feesh.playNote
    currentTime: 0,
    addNote: function(key, note, restLength) {
        this.melody[key].push({time: this.currentTime, note: note});
        this.currentTime += restLength; // Add rest length to current time
    },
    melody: {
        a: [],
        s: [],
        d: [],
        f: []
    },
    sortMelody: function() {
        this.melody.a.sort((a, b) => a.time - b.time);
        this.melody.s.sort((a, b) => a.time - b.time);
        this.melody.d.sort((a, b) => a.time - b.time);
        this.melody.f.sort((a, b) => a.time - b.time);
    },
    sprite: document.getElementById("fisg-sprite"),
    orientation: 0,
    spriteVariation: "a",
    currentSprite: "this isn't loaded yet, it will be at the bottom of this program",
    reset: 0,
    updateSprite: function() {
        // Set a new sprite variation that is different from the current one
        // filter current sprite variation from a list containing all five (abcde) and select one of the remaining four randomly:
        this.spriteVariation = ["a", "b", "c", "d", "e"].filter(letter => letter !== this.spriteVariation)[Math.floor(Math.random() * 4)];

        this.currentSprite.style.display = "none";
        this.currentSprite = document.getElementById(`fisg-sprite-${this.orientation}${this.spriteVariation}`);
        this.currentSprite.style.display = "block";

        // if (fisg.orientation === 0) document.getElementById("fisg-sprite").style.backgroundColor = "#01f4af00";
        // if (fisg.orientation === 1) document.getElementById("fisg-sprite").style.backgroundColor = "#FAA";
        // if (fisg.orientation === 2) document.getElementById("fisg-sprite").style.backgroundColor = "#FFA";
        // if (fisg.orientation === 3) document.getElementById("fisg-sprite").style.backgroundColor = "#aaffaa";
        // if (fisg.orientation === 4) document.getElementById("fisg-sprite").style.backgroundColor = "#aaaaff";
    }
};

for (let direction = 0; direction < 5; direction++) {
    ["a", "b", "c", "d", "e"].forEach(function(variation) {
        let newSprite = document.createElement("img");
        newSprite.id = "fisg-sprite-" + direction + variation;
        newSprite.src = `🐟/fisg_${direction}${variation}.png`;
        newSprite.style.display = "none";
        fisg.sprite.appendChild(newSprite);

        if ("dec".includes(variation)) return;
        
        let newerSprite = document.createElement("img");
        newerSprite.id = "feesh-sprite-" + direction + variation;
        newerSprite.src = `🐟/feesh_${direction}${variation}.png`;
        newerSprite.style.display = "none";
        feesh.sprite.appendChild(newerSprite);
    });
}

feesh.currentSprite = document.getElementById("feesh-sprite-0a");
feesh.updateSprite();
fisg.currentSprite = document.getElementById("fisg-sprite-0a");
fisg.updateSprite();