#Jest

## Instalar
npm -D jest

## Criar a pasta [test] na pasta principal do projeto

## Criar arquivos de test, com prefixo [test] extensao [js] [Ex: server.test.js]

## Configurando o jest no comando npm test
- package.json
	script
		"test": "jest"
		
## Rodar o test
npm test
		
## Encontra os arquivos de test automatico

## Exemplos de testes
Arquivo de test: server.test.js

const supertest = require('supertest');
const request   = supertest('localhost:3003');

test('Responder na porta: 3003', () => {
    return request.get('/').then(res => expect(res.status).toBe(200));
})

## Utilizar um terminal separado dividido com o visual code na tela para melhor identificar os error

## Modulos
### Supertest (HTTP assertions made easy via superagent)
Ex:
const request = require('supertest');
test('Responder na porta: 3003', () => {
    return request.get('/').then(res => expect(res.status).toBe(200));
})

## Automatizando o test
### Configurando:
	- package.json
		script
			"secure-mode": "jest --watch"
### Rodando:
	npm run secure-mode
	- abre um menu, com opcoes de teste(Rodar todos, rodar os testes falhados, ...)
	- escolher a opcao [a] -> roda todos os testes
	

