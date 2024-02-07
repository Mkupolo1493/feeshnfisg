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
        j: [],
        k: [],
        l: [],
        ";": []
    }
};
let fisg = {
    playNote: ()=>{console.log("cannot play, no audio")}, // same as feesh.playNote
    melody: {
        a: [],
        s: [],
        d: [],
        f: []
    }
};
let drums = {
    times: [],
    snare: new Tone.Player("/snare.mp3").toDestination()
};

function addNote(key, note, restLength) {
    let fish = "asdf".includes(key) ? fisg : feesh; // If the key is A, S, D, or F, use fisg, otherwise use feesh

    fish.melody[key].push({time: currentTime, note: note}); // Add the note to the melody of the given fish

    currentTime += restLength; // Add the rest/note length (no held notes yet, so the two are combined) to the time counter
}

let currentTime = 204;

{
    addNote("j", "G5", 4); addNote("k", "A5", 4); addNote("l", "B5", 4);
    
    addNote("l", "C6", 6); addNote("k", "B5", 6); addNote("l", "C6", 12); addNote(";", "G6", 12); addNote("j", "G4", 12); addNote("l", "C6", 6); addNote("k", "B5", 6); addNote("l", "C6", 12); addNote(";", "G6", 12); addNote("j", "G4", 12);
    
    addNote("l", "C6", 6); addNote("k", "B5", 6); addNote("l", "C6", 12); addNote("j", "F5", 12); addNote("l", "C6", 12); addNote("k", "E5", 6); addNote("j", "D#5", 6); addNote("k", "E5", 12); addNote("l", "G5", 12); addNote("j", "D5", 12);
    
    addNote("l", "C#5", 12); addNote("j", "A4", 4); addNote("k", "B4", 4); addNote("l", "C#5", 4); addNote(";", "D5", 12); addNote("j", "A4", 12); addNote("l", "B4", 12); addNote("j", "G4", 4); addNote("k", "A4", 4); addNote("l", "B4", 4); addNote(";", "C5", 12); addNote("j", "G4", 12);

    addNote("l", "A4", 12); addNote("j", "F#4", 4); addNote("k", "G4", 4); addNote("l", "A4", 4); addNote(";", "B4", 12); addNote("j", "F#4", 12); addNote("l", "A4", 12); addNote("j", "F#4", 6); addNote("k", "G4", 6); addNote("l", "A4", 6); addNote("k", "G4", 6); addNote("l", "A4", 6); addNote(";", "B4", 6);
}
currentTime = 216;
{
    addNote("d", "E6", 24);
    addNote("s", "D6", 24);
    addNote("d", "E6", 24);
    addNote("f", "F6", 24);
    addNote("f", "E6", 24);
    addNote("d", "D6", 24);
    addNote("s", "C6", 36);
    addNote("a", "B5", 12);
    addNote("f", "A5", 12);
    addNote("d", "G5", 12);
    addNote("s", "F#5", 24);
    addNote("d", "G5", 12);
    addNote("s", "F5", 12);
    addNote("a", "E5", 24);
    addNote("f", "F#5", 12);
    addNote("d", "E5", 12);
    addNote("s", "D#5", 12);
    addNote("a", "B4", 12);
    addNote("d", "E5", 24);
    addNote("f", "F5", 24);

    addNote("d", "E6", 24);
    addNote("s", "D6", 24);
    addNote("d", "E6", 24);
    addNote("f", "F6", 24);
    addNote("f", "E6", 24);
    addNote("d", "D6", 24);
    addNote("s", "C6", 36);
    addNote("a", "B5", 12);
    addNote("f", "A5", 12);
    addNote("d", "G5", 12);
    addNote("s", "F#5", 24);
    addNote("d", "G5", 12);
    addNote("s", "F5", 12);
    addNote("a", "E5", 24);
    addNote("f", "F#5", 12);
    addNote("d", "E5", 12);
    addNote("s", "D#5", 12);
    addNote("a", "B4", 12);
    addNote("d", "E5", 24);
    addNote("f", "F5", 24);
}

currentTime = 12;
{
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 12;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 6;
    drums.times.push(currentTime); currentTime += 36;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime); currentTime += 4;
    drums.times.push(currentTime);
    console.log(currentTime);
}

feesh.melody.j.sort((a, b) => a.time - b.time);
feesh.melody.k.sort((a, b) => a.time - b.time);
feesh.melody.l.sort((a, b) => a.time - b.time);
feesh.melody[";"].sort((a, b) => a.time - b.time);

fisg.melody.a.sort((a, b) => a.time - b.time);
fisg.melody.s.sort((a, b) => a.time - b.time);
fisg.melody.d.sort((a, b) => a.time - b.time);
fisg.melody.f.sort((a, b) => a.time - b.time);

drums.times.sort((a, b) => a - b);


async function main() {
    if (audioAlwaysEnabled === false) window.removeEventListener("click", main);
    await Tone.start();

    Tone.loaded().then(() => {
        const feeshSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // IMPORTANT NOTE: TONE.SAMPLER IS ALREADY POLYPHONIC
        const fisgSynth = new Tone.PolySynth(Tone.AMSynth).toDestination();
    
        feesh.playNote = function(note) {
            feeshSynth.triggerAttackRelease(note, "8n");
        }
    
        fisg.playNote = function(note) {
            fisgSynth.triggerAttackRelease(note, "8n");
        }
    });
}