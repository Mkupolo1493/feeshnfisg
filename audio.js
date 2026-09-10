const song = "wii-tanks";

const backtrack = document.createElement("audio");
backtrack.preload = "auto";
switch (song) {
    case "blast-processing":
        backtrack.src = "https://vgmsite.com/soundtracks/geometry-dash-android-ios-macos-windows-gamerip-2013/vojywrcrng/05.%20Blast%20Processing.mp3";
        break;
    case "wii-tanks":
        backtrack.src = "./wiitanks.mp3";
        break;
}

window.onload = function() {
    let promise = backtrack.play();

    if (typeof promise !== "undefined") {
        promise.then(function() {
            backtrack.pause();
            backtrack.currentTime = 0;
            main();
        }).catch(function(error) {
            document.getElementById("score").innerHTML = "Click to begin!";
            window.addEventListener("click", main); // Wait for a click event
        });
    }
}


function intro() {
    feesh.currentTime += 204;

    feesh.addNote("j", "G5", 4); feesh.addNote("k", "A5", 4); feesh.addNote("l", "B5", 4);

    fisg.currentTime += 216;
}
function wiiTanks() { // enemy name: Green Tank
    feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote(";", "G6", 12); feesh.addNote("j", "G4", 12); feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote(";", "G6", 12); feesh.addNote("j", "G4", 12);

    feesh.addNote("l", "C6", 6); feesh.addNote("k", "B5", 6); feesh.addNote("l", "C6", 12); feesh.addNote("j", "F5", 12); feesh.addNote("l", "C6", 12); feesh.addNote("k", "E5", 6); feesh.addNote("j", "D#5", 6); feesh.addNote("k", "E5", 12); feesh.addNote("l", "G5", 12); feesh.addNote("j", "D5", 12);

    feesh.addNote("l", "C#5", 12); feesh.addNote("j", "A4", 4); feesh.addNote("k", "B4", 4); feesh.addNote("l", "C#5", 4); feesh.addNote(";", "D5", 12); feesh.addNote("j", "A4", 12); feesh.addNote("l", "B4", 12); feesh.addNote("j", "G4", 4); feesh.addNote("k", "A4", 4); feesh.addNote("l", "B4", 4); feesh.addNote(";", "C5", 12); feesh.addNote("j", "G4", 12);

    feesh.addNote("l", "A4", 12); feesh.addNote("j", "F#4", 4); feesh.addNote("k", "G4", 4); feesh.addNote("l", "A4", 4); feesh.addNote(";", "B4", 12); feesh.addNote("j", "F#4", 12); feesh.addNote("l", "A4", 12); feesh.addNote("j", "F#4", 6); feesh.addNote("k", "G4", 6); feesh.addNote("l", "A4", 6); feesh.addNote("k", "G4", 6); feesh.addNote("l", "A4", 6); feesh.addNote(";", "B4", 6);

    
    fisg.addNote("d", "E6", 24); fisg.addNote("s", "D6", 24); fisg.addNote("d", "E6", 24); fisg.addNote("f", "F6", 24);
    
    fisg.addNote("f", "E6", 24); fisg.addNote("d", "D6", 24); fisg.addNote("s", "C6", 36); fisg.addNote("a", "B5", 12);
    
    fisg.addNote("f", "A5", 12); fisg.addNote("d", "G5", 12); fisg.addNote("s", "F#5", 24); fisg.addNote("d", "G5", 12); fisg.addNote("s", "F5", 12); fisg.addNote("a", "E5", 24);
    
    fisg.addNote("f", "F#5", 12); fisg.addNote("d", "E5", 12); fisg.addNote("s", "D#5", 12); fisg.addNote("a", "B4", 12); fisg.addNote("d", "E5", 24); fisg.addNote("f", "F5", 24);
}

// C, F, and G are SHARPS
function bpSimpleBeat() {
    fisg.addNote("f", "F#3", 0); fisg.addNote("a", "F#2", 40);
    fisg.addNote("f", "F#3", 0); fisg.addNote("a", "F#2", 24);
}
function bpAlternatingBeat() {
    fisg.addNote("a", "F#2", 8); fisg.addNote("f", "F#3", 8);
    fisg.addNote("a", "F#2", 8); fisg.addNote("f", "F#3", 8);
    fisg.addNote("a", "F#2", 8); fisg.addNote("f", "F#3", 8);
    fisg.addNote("a", "F#2", 8); fisg.addNote("f", "F#3", 8);
}
function bpAlternatingBeat2() {
    fisg.addNote("a", "D2", 8); fisg.addNote("d", "D3", 8);
    fisg.addNote("a", "D2", 8); fisg.addNote("d", "D3", 8);
    fisg.addNote("s", "E2", 8); fisg.addNote("f", "E3", 8);
    fisg.addNote("s", "E2", 8); fisg.addNote("f", "E3", 8);
}
function bpRhythmicBeat() {
    fisg.addNote("d", "D3", 0); fisg.addNote("a", "D2", 12);
    fisg.addNote("d", "D3", 0); fisg.addNote("a", "D2", 12);
    fisg.addNote("d", "D3", 0); fisg.addNote("a", "D2", 24);
    fisg.addNote("d", "D3", 0); fisg.addNote("a", "D2", 16);

    fisg.addNote("f", "E3", 0); fisg.addNote("s", "E2", 12);
    fisg.addNote("f", "E3", 0); fisg.addNote("s", "E2", 12);
    fisg.addNote("f", "E3", 0); fisg.addNote("s", "E2", 24);
    fisg.addNote("f", "E3", 0); fisg.addNote("s", "E2", 16);
}
function bpSubmotif() {
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 16);
}
function bpMotif() {
    feesh.addNote("j", "F#4", 12);
    bpSubmotif();
}


function blastProcessing() {
    fisg.currentTime = 42;
    for (let i = 0; i < 4; i++) {
        bpSimpleBeat();
        bpSimpleBeat();
        bpRhythmicBeat();
    }
    
    for (let i = 0; i < 3; i++) {
        bpAlternatingBeat();
        bpAlternatingBeat2();
    }
    
    fisg.addNote("a", "F#1", 8); fisg.addNote("s", "F#1", 8);
    fisg.addNote("a", "F#1", 8); fisg.addNote("s", "F#1", 8);
    fisg.addNote("a", "G#1", 8); fisg.addNote("d", "G#2", 8);
    fisg.addNote("a", "G#1", 8); fisg.addNote("d", "G#2", 8);
    
    fisg.addNote("a", "D2", 8); fisg.addNote("f", "D3", 8);
    fisg.addNote("a", "D2", 8); fisg.addNote("f", "D3", 8);
    fisg.addNote("s", "E2", 8); fisg.addNote("f", "E3", 8);
    fisg.addNote("s", "E2", 16);
    
    bpSimpleBeat();
    bpSimpleBeat();
    bpRhythmicBeat();
    
    bpSimpleBeat();
    bpSimpleBeat();
    bpRhythmicBeat();
    
    fisg.addNote("f", "C#4", 8);
    fisg.addNote("f", "C4", 8);
    fisg.addNote("d", "B3", 4);
    fisg.addNote("s", "A3", 8);
    fisg.addNote("a", "F#3", 12);
    fisg.addNote("a", "F#1", 0); fisg.addNote("f", "F#2", 16);
    
    fisg.addNote("f", "C#4", 8);
    fisg.addNote("f", "C4", 8);
    fisg.addNote("d", "B3", 4);
    fisg.addNote("s", "A3", 8);
    fisg.addNote("a", "F#3", 28);
    fisg.addNote("a", "F#3", 8);

    fisg.addNote("a", "C#3", 8);
    fisg.addNote("a", "C#3", 8);
    fisg.addNote("a", "C#3", 4);
    fisg.addNote("s", "E3", 4);
    fisg.addNote("d", "E#3", 4);
    fisg.addNote("d", "F#3", 28);
    fisg.addNote("d", "F#3", 8);

    fisg.addNote("f", "C#4", 8);
    fisg.addNote("d", "C4", 8);
    fisg.addNote("s", "B3", 4);
    fisg.addNote("a", "A3", 8);
    fisg.addNote("f", "B3", 12);
    fisg.addNote("d", "A3", 8);
    fisg.addNote("f", "B3", 8);

    fisg.addNote("d", "A3", 8);
    fisg.addNote("s", "F#3", 8);
    fisg.addNote("s", "F#3", 4);
    fisg.addNote("a", "E3", 8);
    fisg.addNote("s", "F#3", 28);
    fisg.addNote("s", "F#3", 8);

    fisg.addNote("f", "C#4", 8);
    fisg.addNote("f", "C4", 8);
    fisg.addNote("d", "B3", 4);
    fisg.addNote("s", "A3", 8);
    fisg.addNote("a", "F#3", 28);
    fisg.addNote("a", "F#3", 8);
    
    fisg.addNote("a", "C#3", 8);
    fisg.addNote("a", "C#3", 8);
    fisg.addNote("a", "C#3", 4);
    fisg.addNote("s", "E3", 4);
    fisg.addNote("d", "E#3", 4);
    fisg.addNote("d", "F#3", 28);
    fisg.addNote("d", "F#3", 8);

    fisg.addNote("f", "C#4", 8);
    fisg.addNote("d", "C4", 8);
    fisg.addNote("s", "B3", 4);
    fisg.addNote("a", "A3", 8);
    fisg.addNote("f", "B3", 12);
    fisg.addNote("d", "A3", 8);
    fisg.addNote("f", "B3", 8);
    
    
    feesh.currentTime = 554;
    feesh.addNote("k", "A4", 12); bpMotif();
    
    feesh.addNote("j", "F#4", 12); bpMotif();
    
    feesh.addNote("k", "A4", 12); bpMotif();
    
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "B4", 12); bpMotif();
    feesh.currentTime -= 32;
    feesh.addNote("l", "B4", 24); feesh.addNote(";", "D5", 8);
    
    feesh.addNote("k", "A4", 0); feesh.addNote("l", "C#5", 12); bpMotif();
    
    feesh.addNote("j", "F#4", 4); feesh.addNote("j", "F#4", 4); feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 8); bpSubmotif();
    
    feesh.addNote("k", "A4", 12); bpMotif();
    
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "B4", 12); bpMotif();
    feesh.currentTime -= 40;
    feesh.addNote("l", "B4", 24); feesh.addNote(";", "E5", 16);
    
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("l", "C#5", 12);
    feesh.addNote(";", "E5", 12);
    feesh.addNote("l", "C#5", 16);
    
    feesh.addNote("k", "A4", 12);
    feesh.addNote("k", "A4", 4);
    feesh.addNote("k", "A4", 8);
    feesh.addNote("k", "A4", 12);
    feesh.addNote("l", "C#5", 12);
    feesh.addNote("j", "F#4", 16);
    
    feesh.addNote("j", "F#4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("l", "C#5", 12);
    feesh.addNote(";", "E5", 12);
    feesh.addNote("l", "C#5", 16);
    
    feesh.addNote("j", "F#4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("l", "A4", 12);
    feesh.addNote(";", "C#5", 4);
    feesh.addNote("l", "A4", 4);
    feesh.addNote("k", "G#4", 4);
    feesh.addNote("j", "F#4", 16);
    
    feesh.addNote("j", "F#4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("k", "G#4", 4);
    feesh.addNote("l", "A4", 4);
    feesh.addNote("l", "C#5", 12);
    feesh.addNote(";", "E5", 12);
    feesh.addNote("l", "C#5", 16);
    
    feesh.addNote("j", "F#4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("k", "G#4", 4);
    feesh.addNote("l", "A4", 4);
    feesh.addNote("l", "A4", 12);
    feesh.addNote(";", "C#5", 12);
    feesh.addNote("l", "F#4", 16);
    
    feesh.addNote("l", "A4", 12);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("k", "G#4", 4);
    feesh.addNote("l", "A4", 4);
    feesh.addNote("l", "C#5", 12);
    feesh.addNote(";", "E5", 12);
    feesh.addNote("l", "C#5", 16);
    
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 24);
    feesh.addNote("j", "E4", 0); feesh.addNote(";", "E5", 16);
    
    feesh.addNote("k", "A4", 0); feesh.addNote(";", "A5", 12);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 12);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 4);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 4);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 8);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 8);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 16);
    
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 12);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 12);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 4);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 4);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 8);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 8);
    feesh.addNote("j", "F#4", 0); feesh.addNote("l", "F#5", 16);
    
    feesh.addNote("k", "A4", 12); bpMotif();
    
    feesh.addNote("j", "F#4", 12); bpMotif();
    feesh.currentTime -= 16;
    feesh.addNote(";", "F#5", 16);
    
    feesh.addNote("k", "A4", 0); feesh.addNote("l", "E5", 12);
    feesh.addNote(";", "F#5", 0); bpMotif();
    
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 4);
    feesh.addNote("j", "F#4", 8);
    feesh.addNote("j", "F#4", 8);
    bpSubmotif();
    feesh.currentTime -= 8;
    feesh.addNote("j", "F#4", 8);
    
    feesh.addNote("k", "A4", 0); feesh.addNote("l", "A5", 12);
    feesh.addNote("k", "F#5", 0); bpMotif();
    feesh.currentTime -= 40;
    feesh.addNote(";", "C#6", 24);
    feesh.addNote(";", "B5", 8);
    feesh.addNote("l", "A5", 8);
    
    feesh.addNote(";", "B5", 8);
    feesh.addNote("l", "A5", 8);
    feesh.addNote("l", "F#5", 4);
    feesh.addNote("k", "E5", 8);
    feesh.addNote("l", "F#5", 28);
    feesh.addNote("l", "F#5", 8);
    feesh.currentTime -= 64;
    feesh.addNote("j", "F#4", 12);
    // bpMotif();
    feesh.currentTime += 54;
    
    feesh.addNote(";", "C#6", 8);
    feesh.addNote(";", "C6", 8);
    feesh.addNote("l", "B5", 4);
    feesh.addNote("k", "A5", 8);
    feesh.addNote("j", "F#5", 12);
}
if (song === "blast-processing") blastProcessing();
else if (song === "wii-tanks") {
    intro();
    wiiTanks();
    wiiTanks();
    wiiTanks();
}

// sort the melodies numerically (so that, in case of a complicated sequence of loops, you don't have negative numbers screwing over the linear reading of the game)
feesh.sortMelody();
fisg.sortMelody();

async function main() {
    window.removeEventListener("click", main);
    document.getElementById("score").innerHTML = "50";
    
    await Tone.start();

    Tone.loaded().then(() => {
        const feeshSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // IMPORTANT NOTE: TONE.SAMPLER IS ALREADY POLYPHONIC
        const fisgSynth = new Tone.PolySynth(Tone.AMSynth).toDestination();
        feeshSynth.volume.value = -6;
    
        feesh.playNote = function(note) {
            feeshSynth.triggerAttackRelease(note, "8n");
        }
    
        fisg.playNote = function(note) {
            fisgSynth.triggerAttackRelease(note, "8n");
        }

        const mainScript = document.createElement("script");
        mainScript.src = "script.js";
        document.body.appendChild(mainScript);
    });
}
