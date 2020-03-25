### Arquitetura
  - [REST], Rest

[REST]: https://github.com/cestrixx/Estudos/tree/master/Architecture/Rest


# Arquitetura de Software

> A arquitetura de software de um sistema consiste na definição dos componentes de software, suas propriedades externas, e seus relacionamentos com outros softwares. O termo também se refere à documentação da arquitetura de software do sistema. A documentação da arquitetura do software facilita: a comunicação entre os stakeholders, registra as decisões iniciais acerca do projeto de alto-nível, e permite o reúso do projeto dos componentes e padrões entre projetos.

# Visões
> A arquitetura de software é normalmente organizada em visões, as quais são análogas aos diferentes tipos de plantas utilizadas no estabelecimento da arquitetura. Na Ontologia estabelecida pela ANSI/IEEE 1471-2000, visões são instâncias de pontos de vista, onde cada ponto de vista existe para descrever a arquitetura na perspectiva de um conjunto de stakeholders e seus consortes.

> Algumas possíveis visões são:
> 
> * Visão funcional/lógica
> * Visão de código.
> * Visão de desenvolvimento/estrutural
> * Visão de concorrência/processo/thread
> * Visão física/evolutiva
> * Visão de ação do usuário/retorno

# Padrões de arquitetura
> * DODAF
> * MODAF
> * TOGAF
> * Zachman framework
> * Federal Enterprise Architecture

# Arquitetura de software

> **Há muitas formas comuns de projetar módulos de software de computador e suas comunicações, entre elas:**

> * Cliente-Servidor
> * Computação distribuída
> * P2P
> * Quadro Negro
> * Criação implícita
> * Pipes e filtros
> * Plugin
> * Aplicação monolítica
> * Modelo em três camadas
> * Analise de sistema estruturada (baseada em módulos, mas usualmente monolíticas em dentro dos módulos)
> * Arquitetura orientada a serviço
> * Arquitetura orientada a busca
> * MVC

# Estilo Arquitetural ou Padrão Arquitetural

> Um estilo arquitetural, muitas vezes chamado como padrão arquitetural, é um conjunto de princípios, padrões de alta granularidade que provê um framework abstrato para uma família de sistemas. Um estilo arquitetural melhora particionando e especificando uma estrutura, tornando-a reutilizável provendo soluções para frequentes problemas recorrentes.

# Categorias:

Categoria | Estilo
----------|-------
Comunicação | [Orientada a Serviços (SOA)](https://github.com/cestrixx/Estudos/tree/master/Architecture/soa) e Enterprise Service Bus (ESB)
Deployment | Client/Server, N-Camadas e 3 Camadas
Domain | Domain-Driven Design (DDD)
Structure | Baseda em Componentes, Orientada a Objetos e em Layers

Relação dos modelos de arquitetura mais comuns, com uma breve descrição de cada modelo:

Estilo | Resumo
-------|-------
Client/Server | Separar o sistema em duas aplicações, onde o cliente faz requisições para o servidor. Em muitos casos, o servidor é um banco de dados com a lógica da aplicação em stored procedures.
Componentes | Decomposição da estrutura da aplicação em funções reutilizáveis ou componentes expostos com interface de comunicação bem definida.
Domain-Driven Design | Modelo de arquitetura orientada a objetos com a modelagem focada no domínio de negócio e definição de objetos de negócio baseado em entidades dentro do domínio de negócio.
Layers | Conceito de particionamento da aplicação em um grupo empilhado.
Message Bus | Modelo de arquitetura que prescreve o uso de um software que pode receber e enviar mensagens utilizando um ou mais canais de comunicação, para que as aplicações possam interagir sem precisar conhecer detalhes específicos sobre cada outra.
N-Camadas | Desmembrar funcionalidades em segmentos separados na mesma layer, mas com cada segmento alocado em um camada diferente, ou seja, separado fisicamente em outro computador.
Orientada a Objetos | Um paradigma de estrutura baseado na divisão de responsabilidades para um aplicação ou sistema com reutilização individual e objetos auto suficientes, cada um contendo dados em comportamento relevantes a seu objeto.
[Orientada a Serviços](https://github.com/cestrixx/Estudos/tree/master/Architecture/soa) | Aplicações que expõe e consome funcionalidades como um serviço utilizando contratos e mensagens.
[REST](https://github.com/cestrixx/Estudos/tree/master/Architecture/Rest)| Representational State Transfer (REST), em português Transferência Representacional de Estado. Define um conjunto de restrições a serem usadas para a criação de web services (serviços Web).


# REST X SOAP

> REST – Representational State Transfer é um estilo arquitetural usado no projeto de aplicações da Web que contam com recursos nomeados (URL,URI,URN) e engenhosamente utiliza mais profundamente o protocolo HTTP, seu cabeçalho , seus métodos (GET, POST, PUT, DELETE, HEAD) e toda a infraestrutura web já bem estabelecida, reconhecida e utilizada por todos.

> SOAP – Simple Object Access Protocol é um protocolo para troca de informações estruturadas geralmente em uma plataforma descentralizada e distribuída. Ele se baseia em XML para seu formato de mensagem, ou seja, uma mensagem SOAP encapsula o conteúdo e pode ser trafegada via HTTP, JMS ou outro protocolo.


# Definição de interfaces

> Primeiramente, pensando em serviços que utilizam mensagems no protocolo SOAP, o mais comum é descrevermos a interface do mesmo com WSDL (Web Services Description Language). Basicamente, cada serviço terá um arquivo .wsdl que terá a definição de suas operações, estrutura de dados que são usadas nas requisições e respostas, Endpoints (endereços de rede do serviço). Uma associação que ajuda o entendimento deste ponto é pensarmos nas operações como métodos de uma classe, a assinatura do método como as mensagens definidas, e o tipo de cada campo da assinatura a definição da estrutura de dados que será usadas nas mensagens.

> Agora, nos serviços RESTful, se seguirmos de fato o estilo, parte da descrição da interface é desnecessária já que a forma de interagir com os serviços é sempre a mesma , por meio dos métodos http. E ainda mais com o uso do Método Option podemos saber quais outros métodos são permitidos naquele serviço. Agora com relação aos dados continua a ser interessante a definição de que dados vão trafegar e suas restrições.

> Agora, tem pessoas que mesmo assim preferem de uma definição tanto dados quanto de operações, e estas podem fazer o seguinte:

> a. Criar um documento para ser lido por humanos que pode conter, por exemplo, a estrutura de dados que seu serviço recebe e responde, lista de quais operações HTTP estão sendo suportadas naquele serviço, qual formato de mensagem é suportado, etc.. Na minha opinião, esta abordagem faz mais sentido quando a estrutura de dados da mensagem é simples e/ou utiliza notações simples como JSON por exemplo, devido a facilidade da implementação do código que irá acessar ao serviço.

> b. A segunda forma, é utilizar o WADL(Web Application Description Language), ele é similar ao WSDL só que mais simples, com artibutos de configuração que facilitam a compreensão, por exemplo, de qual notação/formato é utilizada nas mensagens de request e response, e o mais importante, é todo orientado aos recursos e ao protocolo HTTP.

> Obs:
> WSDL e WADL serve para que aplicações clientes/consumidoras possam gerar o código automaticamente a partir destas definições. No entanto, nada impede que trasnformações .XSL sejam aplicadas a estes arquivos e eles fiquem mais “legíveis” para leigos, afinal os dois são XML com schema e com vocabulário bem definido.

# SOAP e SOA
> Primeiro, SOAP é um protocolo para troca de informações estruturada, como vimos no início deste post. SOA, por sua vez, é uma arquitetura que se baseia no paradigma de orientação a serviço que molda o desenvolvimento de funcionalidades de negócio, buscando desacoplamento, reutilização, produtividade e alinhamento entre objetivos de negócio e as estratégias de TI. (SOA Manifesto)

> Além do nome ser parecido, o que faz com que as pessoas troquem um pelo outro em conversas, e leigos que estão escutando multiplicarem esta confusão por aí…, existe também uma questão relacionada tanto aos big vendors de ferramentas, quanto aos consultores tradicionais atrelados à SOA, que focam muito em Web services, WSDL, WS-* Extensions e SOAP. Ainda tem o fato adicional de que a maioria deles estão engatinhando em REST. Ou seja…, tem muitos profissionais de TI, inclusive que se dizem entendidos de SOA, que acham que para se ter uma Arquitetura Orientada a serviço precisamos de Webservices, WSDLs e SOAP, o que está 100% errado.


# SOAP 
> * É um padrão que combinado a as especificações WS-* podem garantir questões de QoS(Quality of Service), Segurança, transação e outras questões presentes em integrações mais complexas.
> * Uma mensagem SOAP pode ser propagada por diferentes protocolos, o que flexibiliza bastante várias integrações.
> * É um padrão que está muito maduro no mercado, qualquer ferramenta de integração e Framework tem várias funcionalidades para manipular as mensagens que seguem este padrão.

