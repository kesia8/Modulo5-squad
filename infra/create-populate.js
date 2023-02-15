import db from "../db.js";

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

///== Funcionarios

const CLIENTE_SCHEMA = `
CREATE TABLE IF NOT EXIST "USUARIOS" (
    "ID_CLIENTE" INTEGER PRIMATRY KEY AUTOINCREMENT,
    "NOME" VARCHAR(64),
    "CPF" BIGINIT,
    "EMAIL" VARCHAR(64),
    "SENHA" VARCHAR(64)
    "CARGO" VARCHAR(64)

); 
`

const ADD_CLIENTE_DATA = `
INSERT INTO CLIENTE (ID_CLIENTE, NOME, EMAIL, SENHA)
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

db.seriaLize( () => {
    criaTabelaUSr();
});