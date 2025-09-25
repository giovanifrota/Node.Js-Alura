export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verficaPalavrasDuplicadas(paragrafo);
  });
  return contagem;
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verficaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" "); //Criando um array e passando uma string com espaçõ dentro
  const resultado = {};

  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavrasLimpas = limpaPalavras(palavra);
      resultado[palavrasLimpas] = (resultado[palavrasLimpas] || 0) + 1;
    }
  });

  return resultado;
}
