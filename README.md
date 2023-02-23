# 📌 Objetivo do projeto
  A proposta do projeto é desenvolver propostas de APIs que se tornarão o produto mínimo viável de um aplicativo. Para isso, deve selecionar um tema para o aplicativo e identificar as entidades relacionadas.

# O que é o CRUD

CRUD é a sigla para Create, Read, Update e Delete, que são as principais operações de um sistema de banco de dados relacional.

✔️ Create: Esta operação é usada para criar novos registros em um banco de dados.

✔️ Read: Esta operação é usada para ler ou recuperar os dados de um banco de dados.

✔️ Update: Esta operação é usada para atualizar os dados existentes em um banco de dados.

✔️ Delete: Esta operação é usada para excluir registros de um banco de dados.

<p> <h1>As 4 funções básicas do CRUD:</p></h1>

<p><h3>Create</p></h3>
A operação de criação de um registro em uma tabela é realizada pelo comando INSERT. 
<p>Exemplo:</p>

<p>INSERT into FUNCIONARIO (IdFuncionario, Nome) values (1, ‘Funcionário A’);</p>
  
<p><h3>Read</p></h3>
<p>A operação de consulta de um ou mais registros em uma tabela é realizada pelo comando SELECT.</p>

<p>Exemplo:</p>
SELECT IdFuncionario, Nome from FUNCIONARIO;

<p><h3>Update</p></h3>
<p>Comando utilizado para a atualização de um ou mais registros de uma tabela.</p>

<p>Exemplo:</p>
<p>UPDATE FUNCIONARIO set Nome = ‘Funcionário A - alterado’ where IdFuncionario = 1;</p>

<p><h3>Delete </p></h3>
<p>Comando utilizado para a exclusão de registro (s) de uma tabela.</p>
<p>Exemplo:</p>

<p>DELETE from FUNCIONARIO where IdFuncionario = 1;</p>
