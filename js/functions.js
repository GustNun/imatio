function mostrar(classe){
    var all = document.getElementsByClassName(classe);
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "inline-block";
    }
}
function esconder(classe2){
    var all = document.getElementsByClassName(classe2);
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }

}
function mudarCategoria(cat){
    if(cat == 6){
        document.getElementById("imagens").style.backgroundColor = "#48c9b0";
        document.getElementById("imagens").style.scrollbarColor = "#0f5a44 #48c9b0";
        document.getElementById("imagens").style.borderColor = "#48c9b0";
        mostrar('imagsLug');
        esconder('imagsAli');
        esconder('imagsSen');
        esconder('imagsBan');
        esconder('imagsPes');
        esconder('imagsCorp');
    }
    if(cat == 5){
        document.getElementById("imagens").style.backgroundColor = "#f4d03f";
        document.getElementById("imagens").style.scrollbarColor = "#6d7712 #f4d03f";
        document.getElementById("imagens").style.borderColor = "#6d7712";
        mostrar('imagsPes');
        esconder('imagsAli');
        esconder('imagsSen');
        esconder('imagsLug');
        esconder('imagsBan');
        esconder('imagsCorp');
    }
    if(cat == 4){
        document.getElementById("imagens").style.backgroundColor = "#d2b4de";
        document.getElementById("imagens").style.scrollbarColor = "#54076b #d2b4de";
        document.getElementById("imagens").style.borderColor = "#54076b";
        mostrar('imagsCorp');
        esconder('imagsAli');
        esconder('imagsSen');
        esconder('imagsLug');
        esconder('imagsPes');
        esconder('imagsBan');
    }
    if(cat == 3){
        document.getElementById("imagens").style.backgroundColor = "#87CEFA";
        document.getElementById("imagens").style.scrollbarColor = "#18428f #87CEFA";
        document.getElementById("imagens").style.borderColor = "#18428f";
        mostrar('imagsBan');
        esconder('imagsAli');
        esconder('imagsSen');
        esconder('imagsLug');
        esconder('imagsPes');
        esconder('imagsCorp');
    }
    if(cat == 2){
        document.getElementById("imagens").style.backgroundColor = "#90EE90";
        document.getElementById("imagens").style.scrollbarColor = "#2e8b57 #90EE90";
        document.getElementById("imagens").style.borderColor = "#2e8b57";
        mostrar('imagsSen');
        esconder('imagsAli');
        esconder('imagsBan');
        esconder('imagsLug');
        esconder('imagsPes');
        esconder('imagsCorp');
    }
    if(cat == 1){
        document.getElementById("imagens").style.backgroundColor = "#F08080";
        document.getElementById("imagens").style.scrollbarColor = "#942c2c #F08080";
        document.getElementById("imagens").style.borderColor = "#942c2c";
        mostrar('imagsAli');
        esconder('imagsBan');
        esconder('imagsSen');
        esconder('imagsLug');
        esconder('imagsPes');
        esconder('imagsCorp');
    }
}
function resetarSel(){
    var all = document.getElementsByClassName('imagensSele');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
}

function selecionar(fonte){
    var imagens = document.createElement("IMG");
    imagens.src = fonte;
    imagens.className = "imagensSele";
    imagens.onclick = function () {
        this.parentElement.removeChild(this);
    };    
    document.querySelector("#selecionadas").appendChild(imagens);
}