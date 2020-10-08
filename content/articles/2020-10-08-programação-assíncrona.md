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

Porém, muitos programas interagem com coisas fora do processador. Por exemplo, eles podem se comunicar através de uma rede de computadores ou pedir dados do disco rígido—o que é muito mais lento do que acessar da memória.

Quando algo assim ocorre, seria uma pena deixar o processador ocioso—talvez tenha alguma tarefa que pode ser feita durante esse tempo. Em parte, o sistema operacional cuida dessa parte, ele fará com que o processador alterne entre os diversos programas que estão executando. Contudo, isso não ajuda quando queremos que um **único** programa faça progresso enquanto está esperando uma resposta da rede.

## Assincronicidade

