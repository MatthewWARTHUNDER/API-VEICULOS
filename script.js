const express = require('express')
const db = require('./db')
const app = express();

app.use(express.json())

const port = 3000;


let veiculo = []


app.get('/params/:id', (req, res) => {
    const {id} = req.params
    res.send(id)

})

// cadastrar o veículo com o banco de dados (mySQL)
app.post('/cadastrar', (req, res) =>{
    const{marca, modelo, ano, cor, proprietario} = req.body
    db.query(
        `INSERT INTO veiculos (marca, modelo, ano, cor, proprietario) VALUES (?,?,?,?,?)`,
        [marca, modelo, Number(ano), cor, proprietario],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
        }
    )
    res.send(`Veículo cadastrado com sucesso!\n marca:${marca}\nModelo:${modelo}\nano: ${ano}\ncor: ${cor}\n proprietário: ${proprietario}`)
})


// cadastrar o veículo
// app.post('/cadastrar', (req, res) => {
//     const {marca, modelo, cor, ano, proprietario} = req.body;
//     const id = veiculo.length;
//     veiculo.push({proprietario, marca, modelo, cor, id, ano});
//     res.send(`Veículo recebido com sucesso!\n esse veículo foi ${modelo}\n marca: ${marca}\n cor: ${cor}\n ID: ${id}\n ano: ${ano}\n proprietário: ${proprietario}`)
// })





// atualizar as informações do veículo
app.put('/update/:id', (req, res) => {

    const {id} = req.params
    const {marca, modelo, ano, proprietario, cor} = req.body 


    db.query(
        `UPDATE veiculos set marca = ?, modelo = ?, ano = ?, cor = ?, proprietario = ? WHERE id = ?`,
        [marca, modelo, Number(ano), cor, proprietario, id],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
    //const {marca, modelo, ano, cor, proprietario} = req.body;
    //try{
      //  veiculo [ id - 1] = {id, modelo, marca, ano, cor, proprietario}
        //res.send(`os dados do veículo foi alterado! o ID foi: ${id}\n modelo: ${modelo}\n marca: ${marca}\n ano: ${ano}\n cor: ${cor}\n\n propriertário: ${proprietario} `);
    //}catch(err){
      //  res.send("Veículo não encontrado!")
    //}   
})

app.delete('/deletarmodelo/:modelo', (req, res) => {
    const {modelo} = req.params;



    db.query(
        `DELETE FROM veiculos WHERE modelo = ?`,
        [modelo],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
    //const initial = veiculo.length;
    //veiculo = veiculo.filter( car => car.modelo !== modelo);

    //if(veiculo.length < initial){
      //  res.send('veículo removido com sucesso!')
    //} else{
      //  res.status(404).send('Veículo não encontrado')
    //}
    
})
// deletar o veículo por id
app.delete('/deletar/:id', (req, res) =>{

    const {id} = req.params;


    db.query(
        `DELETE FROM veiculos WHERE id = ?`,
        [id],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
    //try{
      //  veiculo.splice(id, 1)
       // res.send('Veículo removido com sucesso!')
    //}catch(err){
      //  res.send(404).json("erro!!")
    //} 
})

// visualizar todos os carros sem categoria
app.get('/selecionarall', (req, res) => {
    res.send(veiculo)

})


// visualizar os carros pelo seu ID
app.get('/selecionarallporid/:id', (req, res) =>{
    const {id} = req.params



    db.query(
        `SELECT * FROM veiculos WHERE id = ?`,
        [id],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
    //const car = veiculo.length( car => car.id === parseInt(id))

    //if(car){
      //  res.send(car)
    //}else{
      //  res.status(404).send('Veículo não encontrado')
    //}
})

// selecionar por ano
app.get('/selecionarporano/:ano', (req, res) => {
    const ano = parseInt(req.params.ano);


    db.query(
        `SELECT * FROM veiculos WHERE ano = ?`,
        [ano],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
    
})

app.get('/selecionarcor/:cor', (req, res) =>{

    const cor = req.params.cor.toLowerCase();

    db.query(
        `SELECT * FROM veiculos WHERE cor = "azul neon"`,
        [cor],
        function(err, results, fields){
            if(err){
                console.error('Erro na inserção', err)
                return;
            }
            console.log(results)
            console.log(fields)
            
            res.json(results)
        }

        
    )
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("onça pintada")