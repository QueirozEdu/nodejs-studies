const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro) { 
    if(erro.code == 'ENOENT') {
        throw new Error(chalk.red(erro.code, 'no such file'));
    }

    if(erro.code == 'EISDIR') {
        throw new Error(chalk.red(erro.code, 'no files in this directory'));
    }
}

async function pegaArquivo(caminhoDoArquivo){
    const enconding = 'utf-8';
    try {
        const texto = await fs.promises
        .readFile(caminhoDoArquivo, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
    }
    catch(erro) {
        trataErro(erro)
    }
}


/*function pegaArquivo(caminhoDoArquivo) {
    const enconding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, enconding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch((erro) => trataErro(erro))
}
*/


pegaArquivo('./arquivos/texto1.md');




