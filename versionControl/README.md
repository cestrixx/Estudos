# Controle de Versão
> “Um sistema de controle de versões (ou versionamento), VCS (do inglês version control system) ou ainda SCM (do inglês source code management) na função prática da Ciência da Computação e da Engenharia de Software, é um software que tem a finalidade de gerenciar diferentes versões no desenvolvimento de um documento qualquer. Esses sistemas são comumente utilizados no desenvolvimento de software para controlar as diferentes versões — histórico e desenvolvimento — dos códigos-fontes e também da documentação.”

## Vocabulário do Controle de Versão
Esta área apresenta e explica alguns dos termos utilizado.

**commit**
Realizar uma mudança no projeto; mais formalmente, armazenar uma mudança no banco de dados de controle de versão de uma forma que ela possa ser incorporada em versões futuras do projeto.

**update**
Solicitar que as mudanças dos demais (commits) sejam incorporadas em sua cópia local do projeto; ou seja, deixar a sua cópia “atualizada”.

**branch (ou ramo)**
Uma cópia do projeto sob o controle de versão, porém isolada de uma maneira que as mudanças realizadas no branch não afetem o resto do projeto e vice-versa, exceto quando as mudanças são deliberadamente mescladas (“merge”) de um lado para o outro (veja abaixo). Branches (ou ramos) também são conhecidas como “linhas de desenvolvimento”. Mesmo quando um projeto não possui branches explícitas, o desenvolvimento ainda é considerado como sendo executado no “branch principal”, também conhecido como “linha principal” ou “trunk“.

**Branches** oferecem uma maneira isolada de diferentes linhas de desenvolvimento entre eles. Por exemplo, um branch pode ser usado para um desenvolvimento experimental que poderia desestabilizar muito a linha principal (ou trunk). Assim como uma branch pode ser usada como um local para estabilizar uma nova release. Durante o processo de release, o desenvolvimento regular continua sem interrupções no branch principal do repositório; enquanto isso, na branch da release, nenhuma mudança é permitida com exceção daquelas que são aprovadas pelos gerentes de releases. Desta forma, disponibilizar uma release não precisa interferir no andamento dos trabalhos de desenvolvimento.

**changeset:** diferença entre duas configurações
revisão => é uma configuração registrada no repositório
versão => é uma revisao usada em produção
configuração => é o estado dos arquivos do projeto em um determinado momento

## Controle de mudança
* **Redmine**
* **bitbucket**
* **github**
* **jira**
* **phabricator**
* **track**

## Controle de versão
* **subversion**
* **git**
* **mercurial**

## Integração Continua
* **Jenkins**
* **buildbot**
* **circleci**
* **codeclimate** 
* **codship** 
* **concourse** 
* **drone.io** 
* **traves ci**
