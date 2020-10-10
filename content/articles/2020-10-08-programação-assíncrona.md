---
title: Programação Assíncrona
date: 2020-10-08T01:24:44.616Z
description: tradução do cap 11 do Eloquent Javascript
---
Capítulo 11

# Programação Assíncrona

> Quem pode esperar quieto enquanto a lama assenta?
> Quem pode permancer parado até o momento de agir?
> —Laozi, Tao Te Ching

A parte central de um computador, a parte dá os passos individuais que compõe os nossos programas é chamada de **processador**. Os programas que vimos até agora são do tipo que mantém o processador ocupado até que eles tenham terminado seu trabalho. A velocidade na qual um _loop_ que manipula  números é executado depende inteiramente do processador.

Porém, muitos programas interagem com coisas fora do processador. Por exemplo, eles podem se comunicar através de uma rede de computadores ou pedir dados do disco rígido, o que é muito mais lento do que acessar da memória.

Quando algo assim ocorre, seria uma pena deixar o processador ocioso—talvez tenha alguma tarefa que pode ser feita durante esse tempo. Em parte, o sistema operacional cuida dessa parte, ele fará com que o processador alterne entre os diversos programas que estão executando. Contudo, isso não ajuda quando queremos que um **único** programa faça progresso enquanto está esperando uma resposta da rede.

## Assincronicidade

Em um programa **síncrono**, as coisas acontecem uma de cada vez. Quando uma função com certo tempo de execução é chamada , o programa retorna apenas quando a ação tiver terminado e podemos retornar o resultado. Isso para o programa pelo tempo que a ação durar.

Um programa assíncrono permite que várias coisas aconteçam ao mesmo tempo. Quando você começa uma ação, o seu programa continua executando. Quando a ação termina, o programa é informado e recebe acesso ao resultado (por exemplo, ler dados de um _disk_).

Nós podemos comparar programação síncrona e assíncrona usando o seguinte exemplo: um programa busca dois resultados na rede e depois os combina.

Em um ambiente síncrono, quando a função de requisição retorna apenas depois de fazer seu trabalho, o jeito mais fácil de performar essa tarefa é ter uma requisição após a outra. E isso tem a desvantagem de que a segunda requisição irá começar apenas depois da primeira concluir. O tempo total de execução será no mínimo a soma do tempo de resposta das duas requisições.

A solução para esse problema, em um ambiente síncrono, é adicionar fios (_threads_) de controle. Um fio (_thread_) é um outro programa rodando cuja execução pode ser intercalada com outros programas pelo sistema operacional, já que a maioria dos computadores possuem múltiplos processadores, múltiplos fios podem ser executados ao mesmo tempo em processadores diferentes. Um segundo fio pode começar a segunda requisição e então ambos os fios esperam por seus resultados, após eles irão se ressincronizar e combinar seus resultados.

No diagrama a seguir, as linhas grossas representam o tempo que o programa gasta executando normalmente, e as linhas finas o tempo gasto esperando resposta da rede. No modelo síncrono, o tempo gasto pelas redes é parte da linha de tempo para um dado fio de controle. Já no modelo assíncrono, ao iniciar a ação nas redes ocorre conceitualmente uma divisão na linha do tempo. O programa que começou a ação continua executando e a ação ocorre em paralelo, notificando-o quando acabar.

[IMAGEM]

Outro jeito de descrever essa diferença é que ao esperar a ação terminar é implícita no modelo síncrono, enquanto é explícito e sob nosso controle no modelo assíncrono.

Assincronicidade impacta em ambas as formas. Torna fazer programas que não se encaixam no modelo de linha reta de controle mais fácil, mas faz com programas que seguem esse modelo linha reta mais estranhos. Vamos ver formas essa estranheza mais tarde neste capítulo.

Ambas as plataformas de programação importantes de Javascript - navegador (_browser_) e  _Node.js_ - fazem operações que podem ser assíncronas, ao invés de utilizarem fios. E como programação com fios é notoriamente difícil ( entendendo o que um programa faz é muito mais complicado quando ele faz mais de uma coisa ao mesmo tempo), isso geralmente é visto como algo positivo.
## Tecnologia dos corvos


