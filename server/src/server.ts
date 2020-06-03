import express from 'express';

const app = express();

// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações no back-end
// POST: Criar umna nova informação no back-end
// PUT: Atualizar uma informação exsitente no back-end
// DELETE: Remover uma informação do back-end

// POST: http://localhost:3000/users = Criar um usuário
// GET: http://localhost:3000/users = Listar usuários
// POST: http://localhost:3000/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vemna própria rota geralmente opcionais para filtros, paginação

const users = [
    'Diego', // 0
    'Cleiton', // 1
    'Robson', // 2
    'Roberto' // 3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUser = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filteredUser);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Roberto Nicoletti',
        email: 'roberto.urias@gmail.com'
    };

    return response.json(user);
});

app.listen(3333);