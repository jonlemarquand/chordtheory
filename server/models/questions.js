const chords = require('../dev-data/chords.js');

const chordNumber = () => {
    return Math.round(Math.random() * (chords.length - 1));
}

const question = () => {
    return chords[chordNumber()];
}

module.exports = question;