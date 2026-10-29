function mostrarFoto(input) {
    // para oegar a primeira imagem selecionada.
    let arquivo = input.files[0];

    // verificar se uma imagem foi escolhida.
    if (arquivo) {
        // encontrar a imagem de perfil no HTML.
        let imagem = document.getElementById('imagem-perfil');

        // mostrar a imagem escolhida imediatamente.
        imagem.src = URL.createObjectURL(arquivo);
    }
}
