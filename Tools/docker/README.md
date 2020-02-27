# Docker

### Docker User

#### Run
```bash
docker container run [options] none-da-imagem
```

O comando run é a nossa porta de entrada no Docker, agrupando diversas funcionalidades básicas, como:
• Download automático das imagens não encontradas: docker image pull 
• Criação do container: docker container create 
• Execução do container: docker container start 
• Uso do modo interativo: docker container exec

#### Modo interativo

Podemos usar containers em modo interativo, isto é extremamente útil para processos experimentais, estudo dinâmico de ferramentas e de desenvolvimento.

Exemplos de Uso 
• Avaliação do comportamento ou sintaxe de uma versão específica de linguagem. 
• Execução temporária de uma distribuição linux diferente 
• Execução manual de um script numa versão diferente de um interpretador que não a instalada no host.

Principais opções do Docker para este fim 
• docker container run -it
• docker container start -ai 
• docker container exec -t

### Run cria sempre novos containers

Modo interativo

```bash
docker container run -it debian bash 
touch /curso-docker.txt 
exit
    
docker container run -it debian bash 
ls /curso-docker.txt 
ls: cannot access /curso-docker.txt: No such file or directory 
exit
```

### Containers devem ter nomes únicos

```bash
docker container run --help
   --memory-swappiness int   Tune container memory swappiness (0 to 100) (default -1)
   --name string             Assign a name to the container
   --network string          Connect a container to a network (default "default")

docker container run --name mydeb -it debian bash 
exit

docker container run --name mydeb -it debian bash 
docker: Error response from daemon: Conflict. The container name "/mydeb" is already in use by container ad86038db5a3e8099d7c5a828c30520d26b0b98e35cbba46699ef25b7606b350. You have to remove (or rename) that container to be able to reuse that name.. See 'docker run --help'.
```

### Reutilizar containers
Modo interativo

```bash
docker container ls 
docker container ls -a

docker container start -ai mydeb 
touch /curso-docker.txt
exit

docker container start -ai mydeb 
ls /curso-docker.txt 
/curso-docker.txt
exit
```

### Controlando o isolamento dos containers

Principais recursos de controle do isolamento
 • Mapeamento de portas
 • Mapeamento de volumes
 • Copia de arquivos para o container ou a partir do container
 • Comunicação entre os containers

#### Mapeamento de portas

É possível mapear tanto portas TCP como UDP diretamente para o host, permitindo acesso através de toda a rede, não necessitando ser a mesma porta do container. O método mais comum para este fim é o parâmetro -p no comando docker container run, o -p recebe um parâmetro que normalmente é composto por dois números separados por : (dois pontos). O primeiro é no host e o segundo é no container

```bash
docker container run -p 8080:80 nginx 
# acompanhar logs de acesso 
# exemplo: 172.17.0.1 - - [09/Apr/2017:19:28:48 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36" "-" 
# CTRL-C para sai
```

#### Mapeamento de volumes

É possível mapear tanto diretórios no host como entidades especiais conhecidas como volumes para diretórios no container. Por enquanto vamos nos concentrar no mapeamento mais simples, uma diretório no host para um diretório no container. O método mais comum para este fim é o parâmetro -v no comando docker container run, o -v recebe um parâmetro que normalmente é composto por dois caminhos absolutos separados por : (dois pontos). Assim como diversos outros parâmetros, o primeiro é no host e o segundo é no container.

```bash
docker container run -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx 
# <acessar via browser na porta 8080 e acompanhar logs de acesso> 
# Exemplo: 172.17.0.1 - - [09/Apr/2017:19:40:03 +0000] "GET / HTTP/1.1" 200 21 "" "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36" "-" 
# CTRL-C para sair
```

### Modo daemon

Agora sim, aonde o Docker começa a brilhar!
Antes de conhecer opções mais avançadas de compartilhamento de recursos, isolamento, etc, precisamos entender como rodar os containers em background. O parâmetro -d do docker container run indica ao Docker para iniciar o container em background (modo daemon).
Para entender melhor estes containers precisaremos conhecer um novo comando: docker container ps, que lista containers em execução.

#### Rodar um servidor web em background

```bash
docker container run -d --name ex-daemon-basic -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html nginx
# 20536baa3d861a1c8ed3a231f6f8466a442579390cdfa93b40eae2e441671a21
docker container ps 
# CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS NAMES 
# 20536baa3d86        nginx               "nginx -g 'daemon ..."   About a minute ago   Up About a minute 443/tcp, 0.0.0.0:8080->80/tcp   exercicio-07
```

#### Gerenciar o container em background

```bash
docker container restart ex-daemon-basic 
docker container ps 
# STATUS: Up 5 seconds
docker container stop ex-daemon-basic 
docker container ps 
# <nenhum container em execução>
docker container start ex-daemon-basic 
docker container ps 
# CONTAINER ID        IMAGE               COMMAND                  CREATED STATUS              PORTS                           NAMES 
# 20536baa3d86        nginx               "nginx -g 'daemon ..."   15 minutes ago Up 1 second         443/tcp, 0.0.0.0:8080->80/tcp   ex-daemon-basic
```

### Manipulação de containers em modo daemon

Existem diversos comandos que nos ajuda a acompanhar a execução dos containers, entre eles:

• docker container ls 
• docker container ls -a 
• docker container inspect 
• docker container exec 
• docker container logs

Vários comandos Docker possuem aliases, por exemplo o container ls tem os seguintes apelidos:

• docker container list 
• docker container ps 
• docker ps (antiga sintaxe)

### Docker Image

Exemplos de uso:

• DevOps - Imagens para processos de integração contínua
• Portabilidade - Imagens  de  aplicação  para  ser  utilizada  em  todos  os  ambientes  (staging,prodution, etc)
• Desenvolvimento - Imagens   que   aproximam   todos   os   devs   do   ambiente   de   produção   e diminuem a curva de entrada de novos membros
• Imagens customizadas a partir de imagens públicas

 ### Diferenças entre container e imagem
 
 Utilizando  uma  analogia  com  OOP,  podemos  comparar  um  container  a  um  objeto  (instância),enquanto a imagem seria uma classe (modelo).Todos os subcomandos relativos ao container podem ser listados através do parâmetro --help, bemcomo imagens:
 
 • docker container --help
 • docker imagem --help

### Entendendo melhor as imagens

Toda imagem (bem como os containers) possuem um identificador único em formato hash usandosha256. Porém seu uso não é muito prático, então para simplificar isto o docker utiliza uma tag paraidentificar imagens.
A  tag  normalmente  é  formada  por  um  nome,  seguido  de  :  dois  pontos  e  depois  uma  versão.  É extremamente comum utilizar uma versão chamada latest para representar a versão mais atual.

Exemplos de tags de imagens:

• nginx:latest
• redis:3.2
• redis:3
• postgres:9.517

Na  prática  uma  tag  é  apenas  um  ponteiro  para  o  hash  da  imagem,  e  várias  tagspodem  apontar  para  o  mesmo  hash.  Com  isto  é  comum  o  uso  de  alguns  apelidosnas tags, tomando como exemplo as imagens oficiais do redis. Existem 10 imagense 30 tags.

### Comandos básicos no gerenciamento de imagens

Já  usamos  de  maneira  implícita  o  recurso  de  download  de  imagens  docker,  agora  vamos  entendermelhor o gerenciamento de imagens.

docker image pull "tag"

Baixa  a  imagem  solicitada,  este  comando  pode  ser  executado  implicitamente,  quando  o  dockerprecisa de uma imagem para outra operação e não consegue localiza-la no cache local.

docker image ls

Lista todas as imagens já baixadas, é possível ainda usar a sintaxe antiga: docker images

docker image rm "tag"

Remove uma imagem do cache local, é possível ainda usar a sintaxe antiga: docker rmi "tag"

docker image inspect "tag"

Extrai diversas informações utilizando um formato JSON da imagem indicada.

docker image "tag" "source" "tag"

Cria uma nova tag baseada em uma tag anterior ou hash.

docker image build -t "tag"

Permite a criação de uma nova imagem, como veremos melhor em build.18

docker image push "tag"

Permite o envio de uma imagem ou tag local para um registry.

### Docker Hub × Docker Registry

##### Docker Registry 

É uma aplicação server side para guardar e distribuir imagens Docker.

##### Docker Hub

É  uma  serviço  de  registro  de  imagens  Docker  em  nuvem,  que  permite  a  associação  comrepositórios  para  build  automatizado  de  imagens.  Imagens  marcadas  como  oficiais  no  DockerHub,   são   criadas   pela   própria   Docker   Inc.   E   o   código   fonte   pode   ser   encontrado   em: https://github.com/docker-library

A linha de comando possui o comando docker search "tag" para procurar imagens no Docker Hub.

