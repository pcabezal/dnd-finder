import express from 'express';
import mongoose from 'mongoose';
import { config } from 'process';
import Cors from 'cors';


// App config
const app = express();
const port = process.env.PORT || 8001;
const db_url = 'mongodb+srv://pcabezal:Overmind8@cluster0.pgybqvh.mongodb.net/?retryWrites=true&w=majority'
import Cards from './dbCards.js';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(db_url, {

});

// APi Endpoints
app.get('/', (req, res) => res.status(200).send('Yo World'));
app.post('/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));