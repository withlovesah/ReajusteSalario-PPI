import express from 'express';

const server = express();
const porta = 3000;

server.get('/', (req, res) => {

    //Página Inicial
    if (!req.query.idade) {
        return res.send(`
            <h1>Consulta de Salário</h1>

            <h2>Instruções:</h2>
            <p>Informe na url os seguintes dados e depois vá alterando os valores necessários!</p>

            <p> http://localhost:3000/?idade=18&sexo=F&salario_base=1700&anoContratacao=2014&matricula=12345 </p>
        `);
    }

    //Dados
    const idade = parseInt(req.query.idade);
    const sexo = req.query.sexo?.toUpperCase();
    const salarioBase = parseFloat(req.query.salario_base);
    const anoContratacao = parseInt(req.query.anoContratacao);
    const matricula = parseInt(req.query.matricula);

    const anosEmpresa = 2026 - anoContratacao;

    //Validações

    if (isNaN(idade) || idade <= 16) {
        return res.send(`
            <h1>Erro: Idade inválida</h1>
            <p>A idade deve ser maior que 16 anos</p>
            <a href="/">← Consultar novamente</a>
        `);
    }

    if (isNaN(salarioBase)) {
        return res.send(`
            <h1>Erro: Salário inválido</h1>
            <p>O salário deve ser um número válido</p>
            <a href="/">← Consultar novamente</a>
        `);
    }

    if (isNaN(anoContratacao) || anoContratacao <= 1960) {
        return res.send(`
            <h1>Erro: Ano inválido</h1>
            <p>O ano deve ser maior que 1960</p>
            <a href="/">← Consultar novamente</a>
        `);
    }

    if (isNaN(matricula) || matricula <= 0) {
        return res.send(`
            <h1>Erro: Matrícula inválida</h1>
            <p>A matrícula deve ser maior que zero</p>
            <a href="/">← Consultar novamente</a>
        `);
    }

    if (sexo !== 'M' && sexo !== 'F') {
        return res.send(`
            <h1>Erro: Sexo inválido</h1>
            <p>Use M ou F</p>
            <a href="/">← Consultar novamente</a>
        `);
    }

    //Cálculo
    let reajuste = 0;

    if (sexo === 'F') {
        if (idade >= 40) reajuste = 0.12;
        else reajuste = 0.10;
    } else {
        if (idade >= 40) reajuste = 0.08;
        else reajuste = 0.07;
    }

    const salarioNovo = salarioBase * (1 + reajuste);

    //Resposta
    res.send(`
        <h1>Resultado</h1>

        <p><strong>Matrícula:</strong> ${matricula}</p>
        <p><strong>Sexo:</strong> ${sexo === 'F' ? 'Feminino' : 'Masculino'}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Salário antigo:</strong> R$ ${salarioBase}</p>
        <p><strong>Salário novo:</strong> R$ ${salarioNovo.toFixed(2)}</p>
        <p><strong>Anos na empresa:</strong> ${anosEmpresa}</p>

        <br>

        <a href="/">← Consultar novamente</a>
    `);
});

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});