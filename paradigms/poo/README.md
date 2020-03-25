# POO

* Classe representa um conjunto de objetos com características afins. Uma classe define o comportamento dos objetos através de seus métodos, e quais estados ele é capaz de manter através de seus atributos.

* Subclasse é uma nova classe que herda características de sua(s) classe(s) ancestral(is).

* Objeto / instância de uma classe. Um objeto armazena estados através de seus atributos e reage a mensagens enviadas a ele, se relaciona e envia mensagens a outros objetos. Exemplo de objetos da classe Humanos: João, Maria, José.

* Atributo é uma característica do objeto. Basicamente a estrutura de dados da classe. Exemplos: para um objeto 'Funcionário': nome, endereço, telefone, CPF; 'Carro': nome, marca, ano, cor; 'Livro': autor, editora, ano. Os atributos possuem valores. Por exemplo, o atributo cor pode conter o valor azul. O conjunto de valores dos atributos de um determinado objeto é chamado de estado.

* Método define habilidades do objeto. Bidu é uma instância da classe Cachorro, portanto tem habilidade para latir, implementada através do método 'latir'. Em geral, um método em uma classe é apenas uma definição e a ação só ocorre quando o método é invocado através do objeto, no caso Bidu. A utilização de um método deve afetar apenas um objeto em particular: todos os cachorros podem latir, mas apenas Bidu emite o latido quando seu método é executado. Normalmente, uma classe possui diversos métodos, que no caso da classe Cachorro podem ser coma, morda, corra, etc.
* Mensagem é uma chamada a um objeto para executar um de seus métodos. Também pode ser direcionada diretamente a uma classe.

* Herança é o mecanismo pelo qual uma classe pode estender outra classe ou ser estendida por outra classe. O mecanismo de herança permite que uma classe (subclasse) compartilhe o código-fonte outra classe (superclasse), aproveitando seus comportamentos (métodos) e variáveis possíveis (atributos). As grandes vantagens deste mecanismo são: 1) organização do software; 2) evitar a duplicação desnecessária de código, o que pode levar a reduzir o tempo gasto para desenvolver o projeto. Generalização é o processo de herança, no qual é criada uma superclasse, a partir de subclasses já existentes. Especialização é o processo no qual é criada uma subclasse a partir de superclasse(s) já existentes. Neste último caso, a herança é simples, quando uma subclasse herda características de uma única superclasse; a herança é múltipla, quando a subclasse herda características de mais de uma superclasse. Um exemplo de herança: Mamífero é super-classe de Humano. Ou seja, um Humano é um mamífero. Observação: Nem todas as linguagens orientadas a objetos suportam a herança múltipla (Ex.: Java).

* Associação é o mecanismo pelo qual um objeto utiliza os recursos de outro. Pode tratar-se de uma associação simples "usa um" ou de um acoplamento "parte de". Por exemplo: Um humano usa um telefone. A tecla "1" é parte de um telefone. A composição de objetos é um tipo de associação.

* Encapsulamento consiste na separação de aspectos internos e externos de um objeto. Este mecanismo é utilizado amplamente para impedir o acesso direto ao estado de um objeto (seus atributos), disponibilizando externamente os métodos que acessam (getters) e alteram (setters) estes estados. Exemplo: você não precisa conhecer os detalhes dos circuitos de um telefone para utilizá-lo. A carcaça do telefone encapsula esses detalhes, provendo a você uma interface mais amigável (os botões, o monofone e os sinais de tom).

* Abstração é a habilidade de concentrar nos aspectos essenciais de um contexto qualquer, ignorando características menos importantes ou acidentais. Na POO, uma classe é uma abstração de entidades existentes no domínio do software.

* Polimorfismo consiste no princípio pelo qual duas ou mais classes derivadas de uma mesma superclasse podem invocar métodos que têm a mesma identificação (assinatura) mas comportamentos distintos, especializados para cada classe. De acordo com a literatura, existem quatro tipos de polimorfismo que uma linguagem de programação pode ter (nem toda linguagem orientada a objeto tem suporte para os quatro tipos de polimorfismo):
    * Universal:
        * Inclusão: um ponteiro para a classe mãe pode apontar para uma instância de uma classe filha (exemplo em Java: "List lista = new LinkedList();" (tipo de polimorfismo mais básico que existe).
        * Paramétrico: se restringe ao uso de templates (C++, por exemplo) e generics (Java/C#).
    * Ad-Hoc:
        * Sobrecarga: duas funções/métodos com o mesmo nome mas assinaturas diferentes
        * Coerção: a linguagem que faz as conversões implicitamente (como por exemplo atribuir um int a um float em C++, isto é aceito mesmo sendo tipos diferentes pois a conversão é feita implicitamente).
        
* Interface: é um contrato entre a classe e o mundo externo. Quando uma classe implementa uma interface, ela está comprometida a fornecer o comportamento publicado pela interface

* Pacotes (ou Namespaces): são referências para a organização lógica de classes e interfaces
