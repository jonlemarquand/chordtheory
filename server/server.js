const express = require('express');
const cors = require('cors')
const question = require('./models/questions');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.get('/', cors(corsOptions), (req, res) => {
    res.status(200).json({ message: 'Hello from the server side!', app: 'ChordTheory' });

});
app.get('/newquestion', cors(corsOptions), (req, res) => {
    const newQuestion = question();
    res.status(200).json({ newQuestion });
    console.log(`New Question sent: ${newQuestion.name} - ${newQuestion.chord}`);
});


const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});