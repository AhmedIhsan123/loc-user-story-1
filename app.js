"Use strict";
import express from 'express';

const app = express();

const PORT = 3003;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/index.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});