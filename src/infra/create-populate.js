import bd from '../infra/bd.js';

//== CLIENTE

const CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXIST "USUARIOS" (
    "ID_CLIENTE" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
); 
`

const ADD_CLIENTE_DATA = `
INSERT INTO CLIENTE (ID_CLIENTE, NOME, EMAIL, SENHA)
VALUES
(1, 'Eugenio oliveira', 'eugenio.oliveira@bol.com.br', 'eugeninhooliveira')
(2, 'Oliveira Ribeiro', 'oliveira.ribeiro@gmail.com', 'ribeirinho')
(3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', 'aboboradedoce')
`

function criaTabelaUSr(){
    db.run(CLIENTE_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela de cliente")
  });
}

///== Fornecedores

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXIST "FORNECEDORES" (
    "COD_FORN" VARCHAR(64),
    "NOME" VARCHAR(64),
    "CIDADE" VARCHAR(64),
    "ESTADO" VARCHAR(64)

); 
`

const ADD_FORNECEDORES_DATA = `
INSERT INTO FORNECEDORES (COD_FORN, NOME, CIDADE, ESTADO)
VALUES
(222055446881, 'Alan Ferreira', 'Belo Horizonte', 'Minas Gerais')
(211005119632, 'Gabriel Faria', 'Rio De Janeiro', 'Rio De Janeiro')
(200544863547, 'Victor Barbosa', 'Campo Grande', 'Mato Grosso Do Sul')
`

function criaTabelaUSr(){
    db.run(FORNECEDORES_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela de Fornecedores")
  });
}

///== Funcionarios

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXIST "USUARIOS" (
    "ID_CLIENTE" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "CPF" BIGINIT,
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
    "CARGO" VARCHAR(64)

); 
`

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO CLIENTE (ID_CLIENTE, NOME, CPF, EMAIL, SENHA)
VALUES
(1, 'Eugenio oliveira', '15416512326', 'eugenio.oliveira@bol.com.br', 'eugeninhooliveira', 'Gerente Administrativo')
(2, 'Oliveira Ribeiro', '23457895412', 'oliveira.ribeiro@gmail.com', 'ribeirinho', 'Diretora')
(3, 'Mirtes Faria Lima', '75964812543', 'mirtes_fl@yahoo.com', 'aboboradedoce', 'Gerente Financeiro')
`

function criaTabelaUSr(){
    db.run(FUNCIONARIOS_SCHEMA, (erro) => {
   if (erro) console.log("Erro ao criar tabela de Funcionarios")
  });
}

bd.seriaLize( () => {
    criaTabelaUSr();
});