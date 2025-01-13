const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');

app.use(express.json());
app.use(cors());

// Rota para cadastrar um novo veículo
app.post('/cadastrar', (req, res) => {
    const { marca, modelo, ano, cor, proprietario } = req.body;
    const query = `INSERT INTO veiculos (marca, modelo, ano, cor, proprietario) 
                VALUES ('${marca}', '${modelo}', ${ano}, '${cor}', '${proprietario}')`;

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao cadastrar veículo', error: err });
        } else {
            res.status(201).send({ message: 'Veículo cadastrado com sucesso', id: result.insertId });
        }
    });
});

// Rota para visualizar todos os veículos
app.get('/veiculos', (req, res) => {
    connection.query('SELECT * FROM veiculos', (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao obter veículos', error: err });
        } else {
            res.status(200).json(result);
        }
    });
});

// Rota para atualizar um veículo
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, proprietario } = req.body;
    const query = `UPDATE veiculos SET marca = '${marca}', modelo = '${modelo}', ano = ${ano}, cor = '${cor}', proprietario = '${proprietario}' WHERE id = ${id}`;

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao atualizar veículo', error: err });
        } else {
            res.status(200).send({ message: 'Veículo atualizado com sucesso' });
        }
    });
});

// Rota para deletar um veículo
app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM veiculos WHERE id = ${id}`;

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao deletar veículo', error: err });
        } else {
            res.status(200).send({ message: 'Veículo deletado com sucesso' });
        }
    });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
