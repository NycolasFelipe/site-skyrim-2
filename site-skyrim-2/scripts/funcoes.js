function mudarImagem (imagem){
	document.getElementById("logo-imagem").src = imagem;
}

function show () {
    var element = document.getElementById("frame-mapa");
    element.classList.remove("esconder");
    element.classList.add("exibir");

    var element = document.getElementById("botao-min")
    element.classList.add("exibir");

    var element = document.getElementById("ajuda-botao")
    element.classList.add("exibir");
}

function esconder () {
	var element = document.getElementById("frame-mapa");
    element.classList.add("esconder");
    element.classList.remove("exibir");
}
