import fs from 'fs';//FS é File System faz com que vc interaja com sistema de arquivos do computador (É UMA BIBLIOTECA DO NODE)
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv; //Esse comando pega os valores que sao passados no terminal e coloca eles em um array
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (err, texto) => {
    try{
        if(err) throw err;
        contaPalavras(texto);
    } catch(err){
        trataErros(err);
    }
});