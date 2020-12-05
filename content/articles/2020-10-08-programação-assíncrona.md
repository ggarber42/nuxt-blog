---
title: Programação Assíncrona
date: 2020-10-08T01:24:44.616Z
description: tradução do cap 11 do Eloquent Javascript
---
Capítulo 11

# Programação Assíncrona

> Quem pode esperar quieto enquanto a lama assenta?
>
> Quem pode permancer parado até o momento de agir?
>
> — Laozi, Tao Te Ching

A parte central de um computador, a parte que dá os passos individuais que compõe os nossos programas é chamada de **processador**. Os programas que vimos até agora são do tipo que mantém o processador ocupado até que eles tenham terminado seu trabalho. A velocidade na qual um _loop_ que manipula  números é executado depende inteiramente do processador.

Porém, muitos programas interagem com coisas fora do processador. Por exemplo, eles podem se comunicar através de uma rede de computadores ou pedir dados do disco rígido, o que é muito mais lento do que acessar da memória.

Quando algo assim ocorre, seria uma pena deixar o processador ocioso—talvez tenha alguma tarefa que pode ser feita durante esse tempo. Em parte, o sistema operacional cuida dessa parte, ele fará com que o processador alterne entre os diversos programas que estão executando. Contudo, isso não ajuda quando queremos que um **único** programa faça progresso enquanto está esperando uma resposta da rede.

## Assincronicidade

Em um programa **síncrono**, as coisas acontecem uma de cada vez. Quando uma função com certo tempo de execução é chamada , o programa retorna apenas quando a ação tiver terminado e podemos retornar o resultado. Isso para o programa pelo tempo que a ação durar.

Um programa assíncrono permite que várias coisas aconteçam ao mesmo tempo. Quando você começa uma ação, o seu programa continua executando. Quando a ação termina, o programa é informado e recebe acesso ao resultado (por exemplo, ler dados do disco).

Nós podemos comparar programação síncrona e assíncrona usando o seguinte exemplo: um programa busca dois recursos da rede e depois combina os resultados.

Em um ambiente síncrono, uma função de requisição retorna somente depois de fazer seu trabalho, assim a maneira mais fácil de realizar esse tipo de tarefa é ter uma requisição após a outra. E a desvantagem de fazer dessa forma é que a segunda requisição irá começar apenas depois da primeira concluir. Portanto, o tempo total de execução será no mínimo a soma do tempo de resposta das duas requisições.

A solução para esse problema, em um ambiente síncrono, é adicionar fios (_threads_) de controle. Um fio é um outro programa rodando cuja execução pode ser intercalada com outros programas pelo sistema operacional, já que a maioria dos computadores possuem múltiplos processadores, múltiplos fios podem ser executados ao mesmo tempo em processadores diferentes. Um segundo fio pode começar a segunda requisição e então ambos os fios esperam por seus resultados, após eles irão se ressincronizar e combinar seus resultados.

No diagrama a seguir, as linhas grossas representam o tempo que o programa gasta executando normalmente, e as linhas finas o tempo gasto esperando resposta da rede. No modelo síncrono, o tempo gasto pelas redes é parte da linha de tempo para um dado fio de controle. Já no modelo assíncrono, ao iniciar a ação nas redes ocorre conceitualmente uma divisão na linha do tempo. O programa que começou a ação continua executando e a ação ocorre em paralelo, notificando-o quando acabar.

[IMAGEM]

Outro jeito de descrever essa diferença é que esperar a ação terminar está implícita no modelo síncrono, enquanto fica explícito e sob nosso controle no modelo assíncrono.

Assincronicidade possui aspectos positivos e negativos. Torna fazer programas que não se encaixam no modelo de linha reta mais fácil, porém faz com programas que seguem esse modelo linha reta fiquem mais estranhos. Vamos ver formas essa estranheza mais tarde neste capítulo.

Ambas as plataformas de programação importantes de Javascript - navegador (_browser_) e  Node.js - fazem operações que podem ser assíncronas, ao invés de utilizarem fios. E como programação com fios é notoriamente difícil (entender o que um programa faz é muito mais complicado quando ele faz mais de uma coisa ao mesmo tempo), isso geralmente é visto como algo positivo.

## Tecnologia dos corvos

A maior parte das pessoas estão cientes de que corvos são aves muito espertas. Eles podem usar ferramentas, planejar com antecedência, lembrar de coisas e até comunicar essas coisas entre si.

O que a maior parte das pessoas não sabem é que eles são capazes de muitas outras coisas que escondem de nós. Já me disseram por um respeitável ( e talvez excêntrico) especialista em corvídeos que a tecnologia dos corvos não está muito distante da humana, e eles estão nos alcançando.

Por exemplo, muitos bandos de corvos tem a habilidade de construir dispositivos computacionais. Estes não são eletrônicos, como os dos humanos são, mas operam através da ação de pequenos insetos, uma espécie próxima aos cupins, que desenvolveu uma relação simbiótica com os corvos. Desta forma, as aves fornecem alimento a eles e em retorno os insetos constroem e operam complexas colônias que, com a ajuda das criaturas que vivem dentro delas, realizam cálculos.

Tais colônias geralmente estão localizadas em grandes e longevos ninhos. As aves e os insetos trabalham em conjunto para construir uma rede de bulbosas estruturas de barro, que ficam escondidas entre os galhos do ninho, em que os insetos vivem e trabalham.

Para comunicar com outros dispositivos, essas máquinas usam sinais de luz. Os corvos colocam materiais reflexivos em suportes especiais para comunicação e os insetos posicionam eles para que reflitam luz em outro ninho, codificando os dados numa sequência de rápidos flashes. Isso significa que apenas ninhos que tem uma conexão visual clara podem se comunicar.

Nosso amigo, o especialista em corvídeos, fez um mapa das redes de ninhos de corvos no vilarejo de Hières-sur-Amby, as margens do rio Rhône. Esse mapa mostra os ninhos e suas conexões:

[imagem]

É um exemplo impressionante de convergência na evolução, computadores de corvos rodam JavaScript. Neste capítulo, iremos escrever algumas funções básicas de redes para eles.

## _Callbacks_

Uma forma de programação assíncrona é fazer funções que executam ações lentas recebam um argumento extra, uma função _callback_. A ação inicia e quando ela termina, a função _callback_ é chamada e executada.

Por exemplo, a função _setTimeout_, disponível tanto em Node.js quanto em navegadores, el espera um dado número de milissegundos (um segundo equivale a mil milissegundos) e então chama a função.

```js
setTimeout(() => console.log("Tick"), 500);
```

Esperar não é em geral uma tarefa muito importante, mas pode ser útil ao fazer algo como atualizar uma animação ou verificar se algo está levando mais tempo do um dado tempo.

Realizar várias ações assíncronas em sequência utilizando _callbacks_ significa que você precisa continuar passando novas funções para lidar com a continuação da computação após cada ação.

A maioria dos computadores de ninho de corvo possuem bulbos de armazenamento de dados de longa duração, onde os pedaços de informação estão marcados em galhos para que possam ser acessados depois. Acessar, ou encontrar os pedaços de dados leva um momento, então a interface com o armazenamento de dados é assíncrono e utiliza funções _callback_.

Bulbos de armazenamento guardam pedaços de dado codificação em JSON na forma de nomes. Um corvo pode guardar informações sobre lugares em que está escondido comida no nome de “_caches_ de comida”, que podem guardar um _array_ de nomes de lugares que apontam para outros pedaços de dados, descrevendo um verdadeiro _cache_. Para procurar um _cache_ de comida em um dos bulbos de armazenamento Ninho do Grande Carvalho, um corvo poderia executar o seguinte código:

```js
import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});
```
( Todos os nomes e _strings_ foram traduzidas da linguagem dos corvos para Português.)

Esse estilo de programação é funcional, mas a o nível de indentação aumenta a cada ação assíncrona porque você acaba em outra função. Fazendo coisas mais complicadas, como rodar ações múltiplas ao mesmo tempo pode ficar um pouco esquisito.

Ninhos de corvos computacionais são construídos para se comunicar utilizando pares de requisição-respostas. Isso significa que um ninho deve mandar uma requisição para outro, o qual deve imediatamente enviar uma mensagem de resposta, confirmando o recebimento e possivelmente incluindo a resposta da pergunta feita na mensagem.

Cada mensagem é marcada com um tipo, o que vai determinar como ela será tratada. Nosso código pode definir tratamentos específicos para tipos diferentes de requisições, e quando uma requisição chega, o tratamento será chamado para produzir uma resposta.

A interface exportada pelo módulo “./crow-tech” fornece funções baseadas em _callbacks_ para comunicação. Ninhos possuem um método para enviar requisições. Ele espera o nome do ninho de destino, o tipo da requisição e conteúdo da requisição como seu terceiro argumento. E no quarto e último argumento espera a função a ser chamada quando a resposta chegar.

```js
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            () => console.log("Note delivered."));
```
Mas para tornar esses ninhos capazes de receber essa requisição, nós primeiro precisamos definir uma requisição chamada “_note_”. O código que vai tratar com requisições precisa ser executado não apenas no ninho computacional mas em todos ninhos que podem receber mensagens desse tipo. Nós vamos apenas assumir que um corvo vôe e instale nosso código que trata essa requisição em todos os ninhos.

```js
import {defineRequestType} from "./crow-tech";

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});
```

O _defineRequestType_ é uma função que define um novo tipo de requisição. O exemplo adiciona o suporte para requisições “_note_”, que apenas enviam uma nota para um dado ninho. Nossa implementação chama o _console.log_ para que possamos verificar que a nossa nota chegou. Ninhos possuem uma propriedade _name_  guardada em seus nomes.

O quarto argumento dado ao tratador, _done_, é a função de _callback_ que precisa ser chamada quando a requisição termina. Se tivéssemos utilizado o retorno do tratador como resposta, isso iria significar que o tratador não pode por si só performar uma atividade assíncrona. Uma função realizando um trabalho assíncrono geralmente irá  retornar antes do trabalho terminar,tendo que fazer um arranjo para que o _callback_ seja chamada quando for completado. Portanto, iremos precisar de algum mecanismo assíncrono, nesse caso outra função _callback_ para sinalizar quando a resposta for válida.

De certo modo, assincronicidade é contagiante. Qualquer função que chama uma função que trabalha assincronicamente precisa por si só ser assíncrona. utilizando um _callback_ ou mecanismo similar para entregar resultado. Chamando um _callback_ é algo mais complicado e sujeito a erro do que simplesmente retornar um valor, logo necessita estruturar grandes partes do seu código, o que não é prático.

## _Promises_ (promessas)

Trabalhar com conceitos abstratos é em geral mais fácil quando esses conceitos podem ser representados por valores. No caso de ações assíncronas, você poderia ao invés de arranjar que uma função fosse chamada em algum momento no futuro, retornar um objeto que represente esse evento no futuro.

É pra isso que a classe padrão _Promise_ serve. Uma _promise_ é uma ação assíncrona que pode, em algum momento, produzir um valor. Ela pode notificar qualquer um que estiver interessado quando seu valor estiver disponível.

A maneira mais fácil de criar uma _promise_ é chamando```js Promise.resolve ```. Essa função garante que o valor dado está dentro da _promise_. Se já for uma _promise_, pode ser simplesmente retornado — caso o contrário,  você recebe uma nova _promise_ que imediatamente termina com seu valor como resultado.

```js
let fifteen = Promise.resolve(15);
fifteen.then( value => console.log(`Got ${value}`) );
//→ Got 15
```

Para conseguir o resultado da _promise_, pode-se utilizar o método```js then ```. Isso registra uma função _callback_ que pode ser chamada quando a _promise_ se resolve e produz um valor. Pode-se adicionar múltiplas _callbacks_ em uma única _promise_, elas serão chamadas, mesmo que sejam adicionados depois da _promise_ ter sido resolvida (terminada).

Porém, isso não é tudo o que o método```js then ```faz. Ele retorna outra _promise_, que resolve o valor que a função tratadora retorna ou, se retornar uma _promise_, espera a _promise_ e depois o seu resultado.

É útil pensar em _promises_ como dispositivos para transportar o valor em uma realidade assíncrona. Um valor normal simplesmente está aqui. Um valor prometido é um valor que pode já estar aqui ou em algum ponto do futuro. Computações definidas em termos de promessas agem em cima desses valores e eles são executados assíncronamente quando o valor se mostra disponível.

Para criar uma _promise_, pode-se utilizar ```js Promise ``` como um construtor. Ele possui uma interface peculiar — o construtor espera uma função como argumento, que é chamada imediatamente, passando uma função que pode ser utilizada para resolver a _promise_. Funciona deste modo, ao invés do exemplo com o método```js resolve ```, para que apenas o código que criou a _promise_ possa resolvê-lo.

Esta é a forma como seria criada uma _promise_ com a sua interface para a  função _redStorage_:

```js

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
  .then(value => console.log("Got", value));

```
