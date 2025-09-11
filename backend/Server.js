const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;

app.use(cors()); 
app.use(express.json());

const users = [
    { id: 1, email: 'teste@teste.com', password: '123' },
];

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({ message: 'Email ou senha inválidos.' });
    }

    const passwordMatch = user.password === password; 

    if (!passwordMatch) {
        return res.status(401).json({ message: 'Email ou senha inválidos.' });
    }

    const token = jwt.sign({ id: user.id }, 'secreto_do_login', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido!', token });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});