
# Paradigma

## Definição
> O paradigma de uma linguagem de programação é a sua identidade. Corresponde a um conjunto de características que, juntas, definem como ela opera e resolve os problemas. Algumas linguagens, inclusive, possuem mais de um paradigma, são as chamadas multi paradigmas.

## Principais Paradigmas:

- Funcional
- Lógico
- Declarativo
- Imperativo
- Orientado a objetos
- Orientado a eventos

Alguns dos principais paradigmas utilizados hoje no mercado:

Funcional
Lógico
Declarativo
Imperativo
Orientado a objetos
Orientado a eventos
Paradigma funcional

Alguns dos principais paradigmas utilizados hoje no mercado:

Funcional
Lógico
Declarativo
Imperativo
Orientado a objetos
Orientado a eventos


### Paradigma funcional

> O foco desse paradigma está na avaliação de funções.

```
<?php

$sum = function($value) {
    return $value + 2;
};

echo $sum(2); // 4
```

### Paradigma lógico

Também é conhecido como “restritivo”. Muito utilizado em aplicações de inteligência artificial. Esse paradigma chega no resultado esperado a partir de avaliações lógico-matemáticas. Se você já estudou lógica de predicados, confortável se sentirá em entender como uma linguagem nesse paradigma opera.

#### Principais elementos desse paradigma:

- **Proposições:** base de fatos concretos e conhecidos.
- **Regras de inferência:** definem como deduzir proposições.
- **Busca:** estratégias para controle das inferências.

Exemplo:

**Proposição:** Chico é um gato.
**Regra de inferência:** Todo gato é um felino.
**Busca:** Chico é um felino?
A resposta para a Busca acima precisa ser verdadeira. A conclusão lógica é:

Se Chico é um gato e todo gato é felino, então Chico é um felino.

A linguagem mais conhecida que utiliza esse paradigma é a Prolog.

### Paradigma declarativo

> O paradigma declarativo é baseado no lógico e funcional. Linguagens declarativas descrevem o que fazem e não exatamente como suas instruções funcionam.

> Linguagens de marcação são o melhor exemplo: HTML, XML, XSLT, XAML etc. Não obstante, o próprio Prolog – reconhecido primariamente pelo paradigma lógico – também é uma linguagem declarativa. Abaixo alguns exemplos dessas linguagens.

```
HTML:

<article>
  <header>
    <h1>Linguagens e paradigmas de programação</h1>
  </header>
</article>


```

### Paradigma imperativo

> Linguagens clássicas como C, C++, PHP, Perl, C#, Ruby etc, “suportam” esse paradigma. Ele é focado na mudança de estados de variáveis (ao contrário dos anteriores).

Exemplo:

`if(option == 'A') {
    print("Opção 'A' selecionada.");
}`

### Paradigma orientado a objetos

> Esse é, entre todos, talvez o mais difundido. Nesse paradigma, ao invés de construirmos nossos sistemas com um conjunto estrito de procedimentos, assim como se faz em linguagens “fortemente imperativas” como o Cobol, Pascal etc, na orientação a objetos utilizamos uma lógica bem próxima do mundo real, lidando com objetos, estruturas que já conhecemos e sobre as quais possuímos uma grande compreensão.

> OO é sigla para orientação a objetos

>  [Leia mais](https://github.com/cestrixx/Estudos/tree/master/paradigms/poo)

### Paradigma orientado a eventos

> Toda linguagem que faz uso de interface gráfica é baseada nesse paradigma.
