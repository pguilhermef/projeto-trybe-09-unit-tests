/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (nome, idade) => {
  const name = nome;
  const age = idade;
  const phrase = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  if (name === undefined || age === undefined) {
    return undefined;
  }
  
  return phrase;
};

module.exports = vqv;
