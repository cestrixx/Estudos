# Jest

O Jest é um delicioso framework de testes de JavaScript, com foco na simplicidade.

## 1. Instalação

```bash
 - npm install --save-dev jest
 - yarn add --dev jest
```

## 2. Configuração
1. Criar a pasta [test] na pasta principal do projeto (Encontra os arquivos de test automaticamente)
2. Criar arquivos de test, com prefixo [test] extensao [js] [Ex: server.test.js]
3. Configurando o jest no comando npm test

##### package.json
```json
  "scripts": {
    "test": "jest --coverage",
    "secure-mode": "jest --watch --verbose=true"
  }
```	

## 3. Execução
```bash
- npm test
- npm run secure-mode
```
#### Parametro watch (secure-mode)
> Observa os arquivos para alterações e executa novamente os testes relacionados aos arquivos alterados. Se você deseja executar novamente todos os testes quando um arquivo for alterado, use a opção --watchAll.

- abre um menu, com opcoes de teste(Rodar todos, rodar os testes falhados, ...)
- escolher a opcao [a] -> roda todos os testes
- escolher p e adciona um nome de arquivo, para rodar o teste só no arquivo expecifico
- escolher p, e enter, zera as configuracoes
- enter roda os testes novamente


## 4. Usabilidade
> Utilizar um terminal separado, dividido com o visual code na tela, para melhor visualização dos erros.


## 5. Modulos
- #### Supertest (Testa requisições HTML)
Exemplo:
```Javascript
const request = require('supertest');
test('Responder na porta: 3003', () => {
    return request.get('/').then(res => expect(res.status).toBe(200));
})
```

## 6. Documentação curta

- **Matchers**

> **toBe()** como o único correspondente:
```Javascript
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
```
Um correspondente é um método que permite testar valores.

> **Os correspondentes mais usados**, comparando o valor do resultado de expect() com o valor passado como argumento, **são**:

* **toBe**: compara igualdade estrita, usando ===
* **toEqual**: compara os valores de duas variáveis. Se for um objeto ou matriz, verifica a igualdade de todas as propriedades ou elementos
* **toBeNull**: é verdadeiro ao passar um valor nulo
* **toBeDefined**: é verdadeiro ao passar um valor definido (oposto ao acima)
* **toBeUndefined**: é verdadeiro ao passar um valor indefinido
* **toBeCloseTo**: é usado para comparar valores flutuantes, evitando erros de arredondamento
* **toBeTruthy**: é verdadeiro se o valor for considerado verdadeiro (como um if faz)
* **toBeFalsy**: é verdadeiro se o valor for considerado falso (como um if faz)
* **toBeGreaterThan**: é verdadeiro se o resultado de expect () for maior que o argumento
* **toBeGreaterThanOrEqual**: é verdadeiro se o resultado de expect () for igual ao argumento ou maior que o argumento
* **toBeLessThan**: é verdadeiro se o resultado de expect () for menor que o argumento
* **toBeLessThanOrEqual**: é verdadeiro se o resultado de expect () for igual ao argumento ou menor que o argumento
* **toMatch**: é usado para comparar cadeias com correspondência de padrão de expressão regular
* **toContain**: é usado em matrizes, verdadeiro se a matriz esperada contiver o argumento em seu conjunto de elementos
* **toHaveLength(number)**: verifica o comprimento de uma matriz
* **toHaveProperty(key, value)**: verifica se um objeto tem uma propriedade e, opcionalmente, verifica seu valor
* **toThrow**: verifica se uma função aprovada gera uma exceção (em geral) ** ou uma exceção específica
* **toBeInstanceOf()**: verifica se um objeto é uma instância de uma classe

Todos esses **matchers** podem ser **negados** usando **.not.** dentro da instrução, por exemplo:

```Javascript
test('Adding 1 + 1 does not equal 3', () => {
  expect(sum(1, 1)).not.toBe(3)
})
```
Para uso com **promises**, você pode usar **.resolve e .rejects**:

```Javascript
expect(Promise.resolve('lemon')).resolves.toBe('lemon')
expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
```

- **Setup**

Antes de **executar seus testes**, você desejará executar alguma **inicialização**.

Para fazer algo uma vez antes de todos os testes serem executados, use a função **beforeAll()**:

```Javascript
beforeAll(() => {
  //do something
})
```

Para executar algo antes de cada teste, use **beforeEach()**:

```Javascript
beforeEach(() => {
  //do something
})
```

- **Teardown**

Assim como você pode fazer na instalação, você também **pode executar** algo **após** a **execução de cada teste**:

```Javascript
afterEach(() => {
  //do something
})
```

e **depois** que **todos os testes terminam**:

```Javascript
afterAll(() => {
  //do something
})
```
- **Describe**

Agrupe testes usando **Describe()**

Você pode **criar grupos** de testes, em um **único arquivo**, que **isolam as funções de configuração e desmontagem**:

```Javascript
describe('first set', () => {
  beforeEach(() => {
    //do something
  })
  afterAll(() => {
    //do something
  })
  test(/*...*/)
  test(/*...*/)
})

describe('second set', () => {
  beforeEach(() => {
    //do something
  })
  beforeAll(() => {
    //do something
  })
  test(/*...*/)
  test(/*...*/)
})
```
- **Asynchronous**

Testando **código asynchronous**

O **código assíncrono** no JavaScript moderno pode ter basicamente duas formas: **retornos de  callbacks e promises**. Além das promessas, **podemos usar async/await**.

- **Callbacks**

Você não pode fazer um teste em um callbacks, porque o Jest não o executa - a execução do arquivo de teste termina antes que o callbacks seja chamado. Para corrigir isso, passe um parâmetro para a função de teste, que você pode chamar de pronto. O Jest esperará até você ligar para **done()** antes de terminar o teste:

```Javascript
//uppercase.js
function uppercase(str, callback) {
  callback(str.toUpperCase())
}
module.exports = uppercase

//uppercase.test.js
const uppercase = require('./src/uppercase')

test(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST')
    done()
  }
})
```

- **Promises**

Com funções que retornam promises, retornamos uma promises do teste:

```Javascript
//uppercase.js
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}
module.exports = uppercase

//uppercase.test.js
const uppercase = require('./uppercase')
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('test').then(str => {
    expect(str).toBe('TEST')
  })
})
```

**Promises rejeitadas** podem ser **testadas** usando **.catch()**:

```Javascript
//uppercase.js
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}

module.exports = uppercase

//uppercase.test.js
const uppercase = require('./uppercase')

test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('').catch(e => {
    expect(e).toMatch('Empty string')
  })
})
```

- **Async/await**

Para testar **funções que retornam promises**, também **podemos usar async/await**, o que torna a sintaxe muito direta e simples:

```Javascript
//uppercase.test.js
const uppercase = require('./uppercase')
test(`uppercase 'test' to equal 'TEST'`, async () => {
  const str = await uppercase('test')
  expect(str).toBe('TEST')
})
```


