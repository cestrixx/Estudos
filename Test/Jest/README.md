# Jest
```
O Jest é um delicioso framework de testes de JavaScript, com foco na simplicidade.
```
## 1. Instalação
```
npm install --save-dev jest
ou
yarn add --dev jest
```
## 2. Configuração
1 Criar a pasta [test] na pasta principal do projeto (Encontra os arquivos de test automaticamente).
2 Criar arquivos de test, com prefixo [test] extensao [js] [Ex: server.test.js].
3 Configurando o jest no comando npm test.

package.json
``` json
  "scripts": {
    "test": "jest --coverage",
    "secure-mode": "jest --watch --verbose=true"
  }
```		
## 3. Execução
```
npm test
ou
npm run secure-mode
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
- Matchers
> toBe() como o único correspondente:
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