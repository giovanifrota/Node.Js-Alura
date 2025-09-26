import fs from 'fs';//FS é File System faz com que vc interaja com sistema de arquivos do computador (É UMA BIBLIOTECA DO NODE)
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv; //Esse comando pega os valores que sao passados no terminal e coloca eles em um array
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, "utf-8", (err, texto) => {
    try{
        if(err) throw err;
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    } catch(err){
        trataErros(err);
    }
});

 async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);    
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('arquivo criado');
    }catch(erro){
        throw erro;
    }
} 

/*  function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);

     fs.promises.writeFile(arquivoNovo, textoPalavras)
     .then(() => {
        console.log('Arquivo criado');
     })
     .catch((erro) => {
        throw erro;
     })
     .finally(() => console.log('operação finalizada'));
} */