import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const result = 'The app is running, send POST request';
    res.send(result)
});

app.post('/api', async (req, res) => {
    const result = req.body.text.replaceAll(req.body.letter, '').replaceAll(req.body.letter.toLowerCase(), '');
    if(!req.body.text || !req.body.letter){
        res.status(500).send('Invalid request');
    }
    else res.status(200).json(result)
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))