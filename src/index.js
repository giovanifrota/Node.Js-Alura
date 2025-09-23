const fs = require("fs"); //FS é File System faz com que vc interaja com sistema de arquivos do computador (É UMA BIBLIOTECA DO NODE)

const caminhoArquivo = process.argv; //Esse comando pega os valores que sao passados no terminal e coloca eles em um array
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (err, texto) => {
    if(err){
        console.log('Qual o erro? ', err.code);
        return
    }
  contaPalavras(texto);
});

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verficaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function extraiParagrafos() {
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
