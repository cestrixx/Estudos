
# Lógica de Programação

```
Definição de termos básicos.
```
## Inferência Lógica
É o processo que permite a conclusão por meio de um raciocínio e que chega a uma resposta a partir de sentenças anteriores.

## Lógica matemática
* **Princípio da identidade:** se algo é verdade sempre vai ser verdade; se algo é falso sempre vai ser falso;
* **Princípio da não contradição:** algo nao pode ser verdade e falso ao mesmo tempo;
* **Princípio do terceiro excluido:** algo ou é verdadeiro ou é falso nao precisa de uma terceira analise;

## Lógica
* **Princípio da dedução:** todos os homens sao pecadores. Eu sou pecador
* **Princípio da indução:** baseada num histórico.

## Proposição sim ou nao
* e => conjunção
* ou => disjunção
* não => negação

A | A! | 
---|---|
 0 | 1 |
 1 | 0 |

A  | B | A&&B
---|---|----
 0 | 0 | 0
 1 | 0 | 0
 0 | 1 | 0
 1 | 1 | 1

A  | B | (AouB)
---|---|----
 0 | 0 | 0
 1 | 0 | 1
 0 | 1 | 1
 1 | 1 | 1

## Operador binário 
 precisa de pelo menos 2
 && (media prioridade) || (baixa prioridade)

## Operador unário ! 
 precisa de 1
 (Alta prioridade)

## Tautologia
constante 1 e 0

A && 1 = A identidade
A && 0 = 0 
A && A = A
A && !A = 0

A || 1 = 1
A || 0 = A
A || A = A
A || !A = 1

A && B = B && A comutatividade
A || B = B || A 

A && B && C associatividade
A || B || C

A || B && C = (A || B) && (A || C)
A && B || C = (A && B) || (A && C)

A || (A && B) = A absorção
A && (A || B) = A

A || !A && B = A || B

!(A && B) = !A || !B De Morgan
!(A || B) = !A && !B

## Lógica de programação
**Lógica de programação** é a técnica de encadear pensamentos para atingir determinado objetivo.

## Seqüência Lógica
**Seqüência Lógica** são passos executados até atingir um objetivo ou solução de um problema.

## Instruções
**Instruções** são um conjunto de regras ou normas definidas para a realização ou emprego de algo. Em informática, é o que indica a um computador uma ação elementar a executar.

## Linguagem Natural
* **Fluxograma** representacao grafica dos passos de um algoritmo
* **Pseudocódigo** técnica textual de algoritmo

## Português estruturado
**Português estruturado** = pseudocódigo = inglês estruturado

## Algoritmo
Um **algoritmo** é formalmente uma seqüência finita de passos que levam a execução de uma tarefa.

## Programas
Os **programas de computadores** nada mais são do que algoritmos escritos numa linguagem de computador e que são interpretados e executados.

## Algoritmos
Os **algoritmos** são descritos em uma linguagem chamada pseudocódigo.

```
algoritmo “MediaAluno”
var 
//Notas dos alunos
    notaTeste1, notaTeste2, quantidadeDias, quantidadeRepeticao, cont: inteiro
    mediaAluno, mediaDias:real
inicio
    escreval(“Digite a quantidade  de médias você vai calcular: ”)
    leia(quantidadeRepeticao)
    //O nosso bloco de repetição vai repetir todo o nosso código escrito anteriormente por quantas vezes foram digitadas pelo usuário, no inicio do algoritmo.
    para cont de 1 ate quantidadeRepeticao faca
        escreval(“Digite a 1ª nota: ”)
        leia(notaTeste1)
        escreval(“Digite a 2ª nota: ”)
        leia(notaTeste2)
        escreval(“Digite a quantidade de dias de frequência escolar: ”)
        leia(quantidadeDias)
        //Calcula a soma das duas notas informadas e divida por 2, que é a quantidade de notas
        mediaAluno <- (notaTeste1 + notaTeste2) / 2
        //Calcula a porcentagem de frequência com base em 200 dias de aulas
        mediaDias <- (quantidadeDias * 100) / 200
        se (mediaAluno >= 7,0 e mediaDias >= 75,0) entao
             escreval("Você foi aprovado!")
        senao
            escreval("Você não foi aprovado!") 
        fimse       
    fimpara
fimalgoritmo
```

## TESTE DE MESA
**TESTE DE MESA** seguir as instruções do algoritmo de maneira precisa para verificar se o procedimento utilizado está correto ou não.

## Variável
Uma **variável** é um espaço reservado na memória do computador para armazenar um tipo de dado determinado.
* **entrada de dados**
* **saida de dados**
* **comentarios**

## Constante
**Constante** é um determinado valor fixo que não se modifica ao longo do tempo, durante a execução de um programa.

## Tipo de dados 
* **caracter** (string)
* **logico** verdadeiro ou falso
* **numerico** (real, inteiro)

## Operadores
* **Operadores Aritmeticos:** (+ - * / %)
* **Operadores Relacionais:** (> < = != <= >=)
* **Operadores logicos:** (&& || !)
* **Operadores concatencao:** ()

## Comandos de condição
Os **comandos de condição** ou desvio fazem parte das técnicas de programação que conduzem a estruturas de programas que não são totalmente seqüenciais.
* **se**
* **senao**
* **escolha**

## Comandos de repetição
Utilizamos os **comandos de repetição** quando desejamos que um determinado conjunto de instruções ou comandos sejam executados um número definido ou indefinido de vezes, ou enquanto um determinado estado de coisas prevalecer ou até que seja alcançado.
* **para**
* **enquanto**
* **repita**
