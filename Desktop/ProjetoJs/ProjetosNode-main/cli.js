import pegaArquivo from "./index.js";
import validaURL from "./http.js";
import lerTodoArquivo from "./lerTodoArquivo.js";
import valida from './lista.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {

    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === "validar") {

        console.log('lista de validados', await validaURL(resultado));

    } else if (caminho[3] === "links") {

        console.log('lista de links em array', valida(resultado));
    
    }else if(caminho[3] === 'leitura'){

        console.log('leitura de todo o arquivo', lerTodoArquivo)
    }
    else {

        console.log('Este arquivo não apresenta nenhum link');

    }
    
}

processaTexto(caminho);