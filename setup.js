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
    sprite: document.getElementById("feesh-sprite")
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
    sprite: document.getElementById("fisg-sprite")
};

for (let direction = 0; direction < 5; direction++) {
    ["a", "b", "c", "d", "e"].forEach(function(variation) {
        let newSprite = document.createElement("img");
        newSprite.id = "fisg-sprite-" + direction + variation;
        newSprite.src = "🐟/fisg_" + direction + variation + ".png";
        newSprite.style.display = "none";
        fisg.sprite.appendChild(newSprite);
    });
}