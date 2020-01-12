# Glossário

 ```
 	Tópico com significado de termos relevantes a base de conhecimento
 ```
## Vocabulário em Inglês
* api (eipiai)
* mocha (moca)
* CLI (cilai)
* vagrant (vegrent)
* SQL (sicol)
* jasmine (jesmine)
* codeigniter (codeignaiter)
* compiler (compailer)
* Agile (Ajaio)
* MVC (emvici)
* Maria (maraia)
* GitLab (gitlébi)
* CI (ciai)
* yml (iemou)
* VI (viai) VIM (viaiemi)
* mercurial (mercurial)

## Remoção de espaço entre palavras

Combinação de palavras em uma única sequência.

> Na programação, geralmente removemos os espaços entre as palavras porque programas de diferentes tipos reservam o caractere de espaço ('') para fins especiais. Como o caractere de espaço é reservado, não podemos usá-lo para representar um conceito que expressamos em nossa linguagem humana com várias palavras.

Estratégias comumente usadas:

* **camelCase:** Combina palavras, colocando em maiúscula todas as palavras após a primeira palavra e removendo o espaço. (Ex: someVar, someClass, somePackage.xyz).

* **PascalCase:** Combina palavras colocando todas as palavras em maiúscula (até a primeira palavra) e removendo o espaço. (Ex: SomeVar, SomeClass, SomePackage.xyz).

* **snake_case/underscore_case:** Combina palavras substituindo cada espaço por um sublinhado (_) e, na versão all caps, todas as letras são maiúsculas. (Ex: some_var, some_class, some_package.xyz).

* **kebab-case/dash-case:** Combina palavras substituindo cada espaço por um traço (-). (Ex: cool-article-1, featured-product).

## Node
O Node.js pode ser definido como um ambiente de execução Javascript server-side.
No modelo Node.js, apenas uma thread é responsável por tratar as requisições. Essa thread é chamada de Event Loop, e leva esse nome pois cada requisição é tratada como um evento. O Event Loop fica em execução esperando novos eventos para tratar, e para cada requisição, um novo evento é criado.

Apesar de ser single-threaded, é possível tratar requisições concorrentes em um servidor Node.js. Enquanto o servidor tradicional utiliza o sistema multi-thread para tratar requisições concorrentes, o Node.js consegue o mesmo efeito através de chamadas de E/S (entrada e saída) não-bloqueantes. Isso significa que as operações de entrada e saída (ex: acesso a banco de dados e leitura de arquivos do sistema) são assíncronas e não bloqueiam a thread. Diferentemente dos servidores tradicionais, a thread não fica esperando que essas operações sejam concluídas para continuar sua execução.

## Tipos de Teste
* Teste de unidade
* Teste de integração
* Teste funcional
* Teste de sistema
* Teste de estresse
* Teste de desempenho
* Teste de usabilidade
* Teste de aceitação

## Banco de Dados
* **Relacionais/SQL:** Banco de dados baseados em relacionamentos. SQL é a sigla para “Structured Query Language” que significa, traduzindo para o português“Linguagem de Consulta Estruturada”. Trata-se de uma linguagem de consulta a banco de dados relacionais. (Ex: SQLLite, MySQL, PostgreSQL, SQL Server Microsoft, PL SQL Oracle)

* **Nao Relacionais/NoSQL:** Banco de dados nao baseados em relacionamentos.
  * **Documento:** Os dados são armazenados como documentos. Os documentos podem ser descritos como dados no formato de chave-valor, como por exemplo, o padrão JSON. Um exemplo de banco de dados neste formato é o MongoDB e couchdb;
  
  * **Colunas:** Os dados são armazenados em linhas particulares de tabela no disco, podendo suportar várias linhas e colunas. Também permitem sub-colunas. Um banco de dados dessa família, por exemplo, é o Cassandra e hbase;

  * **Grafos:** Os dados são armazenados na forma de grafos (vértices e arestas). O Neo4j é um banco que utiliza grafos;

  * **Chave-valor:** Esta família de bancos NoSQL é a que aguenta mais carga de dados pois o conceito dele é que um determinado valor seja acessado através de uma chave identificadora única. Um exemplo é o banco de dados Riak, redis e memcashd

## BaaS (Backend as a Service) BackEnd como serviço
* **Firebase:** Permite o armazenamento de dados, autenticação de usuário, hospedagem estática, e muito mais. (Google Corporation)
* **Parse:** Era um back-end móvel como uma plataforma de serviço originalmente desenvolvida pelo provedor Parse, Inc. A empresa foi adquirida pelo Facebook em 2013 e encerrada em janeiro de 2017. Após o anúncio em 2016 do encerramento iminente, o plataforma foi posteriormente aberta .
* **Back4App:** Empresa criada no Brasil que auxilia desenvolvedores e empresas a migrar aplicações do Parse. Suporta aplicações web, mobile e IoT e é Open Source.

## Padrões de projetos ou GoF (Gang of Four Gangue dos Quatro)
 * **Padrões de Criacão:**
    * abstract factory
    * builder
    * factory method
    * prototype
    * singleton
* **Padrões Estruturais:**
    * adapter
    * facade
    * bridge
    * decorator
    * flyweight
    * composite
    * proxy
 * **Padrões Comportamentais:**
    * chain of responsability
    * command
    * interpreter
    * mediator
    * memento
    * observer
    * state
    * strategy
    * template method
    * visitor

## Padrões GRASP (Padrão Orientado a Objetos)
  Consiste em diretrizes para atribuir responsabilidade a classes e objetos em projeto orientado a objetos.
  * controller (controlador)
  * creator (criador)
  * indirection (indireção)
  * information expert (especialista na informação)
  * pure fabrication (fabricação/invenção pura)
  * protected variations (variações protegidas)
  * alta coesão
  * baixo acoplamento
  * polimorfismo

## Ambiente CI/CD
* Jenkins
* GitLabCI
* Travis CI
* GoCD
* Concourse CI
* Spinnaker
* Screwdriver
* Ansible
* CircleCL
* Azure DevOps
 
## Modelos de testagem
* Unitários
* Integração
* Funcionais
* End-to-End
* Aceitação
* Performance
* Smoke
* Integração contínua
  
## Desenvolvimento de Software
* Concepção
* Planejamento
* Codificação
* Deploy
* Depuração
* Manutenção
   
## Boas práticas
* Clean Code
* Clean Architecture
* Design Patterns
* S.O.L.I.D
* Code Review
* Prova de Conceito
* ATDD
* BDD
* CCO
* CI/CD
* DDD
* PP
* SBE
* Stand-up
* TDD

## Ferramentas Devops
* Ansible (Python)
* Puppet (c++)
* Chef (Ruby)
* Jenkins (Java)
* Terraform (Hashicorp/JSON)

## Orquestradores de containers
* Openshift (RedHat)
* kubernetes (Google)

## Full stack

> * **Tecnologias de back-end:** Em termos de linguagens de programação, você deve estar confortável com pelo menos uma linguagem do lado do servidor (PHP, NodeJS, Ruby, Python, C #). Em seguida, você deve estar bastante familiarizado com pelo menos uma tecnologia de gerenciamento de banco de dados (MySQL, PostgreSQL, Redis, MongoDB, Cassandra). Por fim, você deve saber o suficiente sobre Servidores Web (Apache, Nginx) e saber como configurar um aplicativo ou um site.
> 
> * **Tecnologias de front-end:** HTML, CSS e Javascript são obrigatórios. Juntamente com eles, como um desenvolvedor full stack, você deve saber sobre design responsivo, media queries, LESS, SASS, compatibilidade entre navegadores etc. Você também deve saber como se comunicar com o backend usando AJAX ou WebSockets. Vivemos a era do Javascript, portanto, é bom ter conhecimento em frameworks JavaScript (React, Angular, Vue, etc.).
> 
> * **Administração do sistema:** Você deve saber como funciona a hospedagem na nuvem (AWS, Rackspace, Digital Ocean) e como configurar uma instance. Você não precisa ser proficiente nisso, porque é uma ciência à parte, mas você deve ser capaz de lidar com o básico. Além disso, você deve estar familiarizado com a configuração do protocolo HTTPS, DNS, monitoramento de servidor, etc. O armazenamento em cache também é importante, Varnish, proxy reverso e Memcached.
> 
> * **Ferramentas de desenvolvimento Web:** Versionamento (Git, SVN) é indispensável. Além disso, para evitar as incompatibilidades de ambiente diferentes, é bom ter ferramentas de virtualização - elas podem economizar muito tempo com debug. Você deve saber como configurar o Virtual Box e o Vagrant, pelo menos.
> 
> Como um desenvolvedor full-stack, você não precisa dominar todas essas áreas e tecnologias, mas deve se sentir confortável com elas.

## REST
REST é um acrônimo para **Representational State Transfer**. É arquitetura de padrões da web e protocolo HTTP. 

Os aplicativos RESTful usam solicitações HTTP para executar quatro operações denominadas CRUD (C: criar, R: ler, U: atualizar e D: excluir). Criar e / ou atualizar é usado para postar dados, obter para ler / listar dados e excluir para remover dados.

### Constraint REST
* cliente/servidor
* stateless
* cache 
* interface uniforme
* sistema em camadas
* codigo sob demanda

**Status**
GET | POST | PUT  | DELETE
---------|----------|---------|--------
 200 | 201 | 200 | 200
 404 | 404 | 204 | 404
  |  ||404    


## API 
**Aplication Program interface**. Interface de programa de aplicações. É a tecnica utilizada para disponibilizar as funções de um outro sistema.
