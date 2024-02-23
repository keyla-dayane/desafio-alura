const inputTexto = document.querySelector (".input-text");
const mensagem = document.querySelector (".mensagem");
const imagem = document.querySelector (".imagem");
const text = document.querySelector (".text1");
const palavra = document.querySelector (".text2");
const copiarTexto = document.querySelector (".copiar-texto");

copiarTexto.style.display = "none";
function botaoEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value); 
    mensagem.value = textoEncriptado;
    imagem.style.display = "none";
    text.style.display = "none";
    palavra.style.display = "none";
    copiarTexto.style.display = "block";

}
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if ( stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botaoDesencriptar() {
    let textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if ( stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }
    return stringDesencriptada;
}

function copiar() {
    var resultado = document.querySelector(".mensagem"); 
    if (resultado) {
        navigator.clipboard.writeText(resultado.value)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    }
}
