Exercício 1:

APLICAÇÃO DESENVOLVIDA EM MACOS

1.1 Setup:

Instruções para executar:
pip install pandas pymongo
pyhton3 importdata.py
pyhton3 verifydata.py

- Comecei por instalar a biblioteca: pip install pandas pymongo
- De seguida executei o script "importdata.py" para fazer a importação dos dados do ficheiro contratos2024.csv para o a base de dados.
- De seguida executei o script "verifydata.py" para fazer a verificação dos primeiros 5 documentos da base de dados e verificar que os mesmos se encontram no formato correto.

1.2 Queries:
- Criei a pasta ex1
- De seguida criei o ficheiro "queries.txt" e coloquei lá dentro as queries em mongodb.
- Optei por não colocar o output das questões: 3, 4 e 5 devido ao facto do output ser demasiado grande.
- Para ver o output destes comandos usei os comandos: mongosh -> use contratos -> "colocar a query"
- Os outputs presentes no ficheiro "queries.txt" podem não estar 100% fidedignos com a realidade do dataset porque o output foi escrito no ficheiro "queries.txt" depois de já realizados alguns testes dos comandos Delete, Put e Post no exercício 1.3 abaixo.

1.3 API de Dados:

Instruções para executar:
Entrar na pasta ex1
Correr comando: npm i
Correr comando: npm start

- Comecei por instalar as depêndencias com o comando: "npm install express mongoose body-parser" (não deverá ser necessário correr este comando).
- Depois criei a página "app.js" onde respondo aos pedidos feitos na questão.
- Importante citar que embora a minha base de dados tenha os objetos "_id" e "idcontrato", para fazer o pedido: "GET /contratos/:id", o ":id" corresponde ao "idcontrato" e não ao "_id".


Exercício 2:

Instruções para executar:
Entrar na pasta ex2
Correr comando: npm i
Correr comando: npm start

- Comecei por criar uma pasta de nome ex2 onde vou desenvolver uma nova API diferente da do exercício anterior para responder ao exercício.
- Criei a pasta models, routes, views e o ficheiro app.js
- Para instalar as depêndencias usei o comando: "npm install express mongoose body-parser pug"  (não deverá ser necessário correr este comando).

Feito por Hugo Arantes Dias.
Número: A100758
Curso: LEI
