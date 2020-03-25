# SOA

> Service-Oriented Architecture (SOA), pode ser traduzido como arquitetura orientada a serviços, e é um estilo de arquitetura de software cujo princípio fundamental prega que as funcionalidades implementadas pelas aplicações devem ser disponibilizadas na forma de serviços. Frequentemente estes serviços são conectados através de um "barramento de serviços" (enterprise service bus, em inglês) que disponibiliza interfaces, ou contratos, acessíveis através de web services ou outra forma de comunicação entre aplicações. A arquitetura SOA é baseada nos princípios da computação distribuída e utiliza o paradigma request/reply para estabelecer a comunicação entre os sistemas clientes e os sistemas que implementam os serviços.

> Além da perspectiva estritamente técnica, a arquitetura orientada a serviços também se relaciona com determinadas políticas e conjuntos de "boas práticas" que pretendem criar um processo para facilitar a tarefa de encontrar, definir e gerenciar os serviços disponibilizados.

> A arquitetura orientada a serviços também se insere em um processo de reorganização dos departamentos de tecnologia da informação das organizações, permitindo um melhor relacionamento entre as áreas que dão suporte tecnológico à empresa e as áreas responsáveis pelo negócio propriamente dito, graças a maior agilidade na implementação de novos serviços e reutilização dos ativos existentes.


> Os desenvolvedores SOA associam funcionalidades de software (os serviços) aos objetos de forma não-hierárquica. Durante o processo eles utilizam uma ferramenta de software que contém a lista completa de todos serviços disponíveis, suas características e seus significados, com o objetivo de construir uma aplicação utilizando esses recursos.

> Programadores fazem amplo uso da linguagem XML para descrição dos tipos e estruturas de dados em SOA. Também baseada em XML, a Web Services Description Language (WSDL) normalmente descreve os serviços, enquanto o protocolo SOAP descreve os protocolos de comunicação, além de outros padrões alternativos, como WADL e REST. SOA depende dos dados e serviços que são descritos por metadados que devem satisfazer os seguintes critérios:

> Os metadados devem vir de uma forma que os sistemas de software podem usar para configurar dinamicamente a descoberta e a incorporação de serviços definidos, e também para manter a coerência e integridade. Por exemplo, os metadados podem ser utilizados por outros aplicativos, como um catálogo, para executar serviços de autodescoberta, sem modificar o contrato de um serviço funcional.

> Os metadados devem vir de uma forma que o designer de sistema seja capaz de compreender e gerir com um gasto razoável de custo e esforço.

> SOA tem como objetivo permitir que usuários agrupem funcionalidades de forma a obter aplicações dedicadas que serão construídas quase inteiramente a partir de serviços de software pré-existentes. Quanto maior o agrupamento, menor a quantidade de interface necessária para implementar qualquer conjunto de funcionalidade; no entanto, agrupamentos muito grandes são mais difíceis de reutilizar. Cada interface tem uma quantidade de processamento, portanto há que se considerar a performance e a granularidade dos serviços. A grande promessa de SOA sugere que a criação da n-ésima aplicação é baixa, pois todos os serviços necessários para satisfazer aos requisitos da aplicação já existem. No mundo ideal, bastaria coordenar os serviços para produzir uma nova aplicação.

> Mas, para SOA operar, nenhuma interação deve existir entre as funcionalidades ou dentro delas. Ao contrário, usuários especificam a interação dos serviços de forma pré-definida com o objetivo de atender aos novos requisistos. Por isso, a necessidade de implementar serviços com mais funcionalidades que funções ou classes tradicionais, e para que o designer da aplicação não se sobrecarregue ao tratar a complexidade de milhares de objetos com granularidade menor.
