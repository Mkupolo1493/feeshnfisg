const audioAlwaysEnabled = true; // If user has audio set to Allow
if (audioAlwaysEnabled === false) {
    window.addEventListener('click', main); // Wait for a click event
}
else {
    main(); // Fire away
}

let feesh = {
    playNote: ()=>{console.log("cannot play, no audio")}, // will be monkey-patched to play an actual note once audio is allowed
    melody: {
        j: [
            {time: 102, note: "G5"},
            
            {time: 126, note: "G4"},
            {time: 150, note: "G4"},
            {time: 168, note: "F5"},
            {time: 183, note: "D#5"},
            {time: 198, note: "D5"},

            {time: 210, note: "A4"},
            {time: 222, note: "A4"},
            {time: 234, note: "G4"},
            {time: 246, note: "G4"},
            {time: 258, note: "F#4"},
            {time: 270, note: "F#4"},
            {time: 282, note: "F#4"},
            // {time: 294.5, note: "F#5"}
        ],
        k: [
            {time: 104, note: "A5"},

            {time: 111, note: "B5"},
            {time: 135, note: "B5"},
            {time: 159, note: "B5"},
            {time: 180, note: "E5"},
            {time: 186, note: "E5"},
            
            {time: 212, note: "B4"},
            {time: 236, note: "A4"},
            {time: 260, note: "G4"},
            {time: 285, note: "G4"},
            {time: 291, note: "G4"},
            // {time: 296.5, note: "G5"}
        ],
        l: [
            {time: 106, note: "B5"},
            
            {time: 108, note: "C6"},
            {time: 114, note: "C6"},
            {time: 132, note: "C6"},
            {time: 138, note: "C6"},
            {time: 156, note: "C6"},
            {time: 162, note: "C6"},
            {time: 174, note: "C6"},
            {time: 192, note: "G5"},

            {time: 204, note: "C#5"},
            {time: 214, note: "C#5"},
            {time: 228, note: "B4"},
            {time: 238, note: "B4"},
            {time: 252, note: "A4"},
            {time: 262, note: "A4"},
            {time: 276, note: "A4"},
            {time: 288, note: "A4"},
            {time: 294, note: "A4"},
            // {time: 297.5, note: "A5"}
        ],
        ";": [
            
            {time: 120, note: "G6"},
            {time: 144, note: "G6"},

            {time: 216, note: "D5"},
            {time: 240, note: "C5"},
            {time: 264, note: "B4"},
            {time: 297, note: "B4"}
        ]
    }
};
let fisg = {
    playNote: ()=>{console.log("cannot play, no audio")}, // same as feesh.playNote
    melody: {
        a: [
            {time: 198, note: "B5"},
            {time: 240, note: "E5"},
            {time: 270, note: "B4"},
        ],
        s: [
            {time: 120, note: "D6"},
            {time: 180, note: "C6"},
            {time: 216, note: "F#5"},
            {time: 234, note: "F5"},
            {time: 264, note: "D#5"}
        ],
        d: [
            {time: 108, note: "E6"},
            {time: 132, note: "E6"},
            {time: 168, note: "D6"},
            {time: 210, note: "G5"},
            {time: 228, note: "G5"},
            {time: 258, note: "E5"},
            {time: 276, note: "E5"}
        ],
        f: [
            {time: 144, note: "F6"},
            {time: 156, note: "E6"},
            {time: 204, note: "A5"},
            {time: 252, note: "F#5"},
            {time: 288, note: "F5"}
        ]
    }
};

async function main() {
    if (audioAlwaysEnabled === false) window.removeEventListener("click", main);
    await Tone.start();
    
    const synth = new Tone.Synth().toDestination();
    const pluckSynth = new Tone.AMSynth().toDestination();

    feesh.playNote = function(note) {
        synth.triggerAttackRelease(note, "8n");
    }

    fisg.playNote = function(note) {
        pluckSynth.triggerAttackRelease(note, "8n");
    }
}