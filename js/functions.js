function mudarCategoria(cat){
    if(cat == 3){
        document.getElementById("cat").src = "./categorias/banheiro.html";
    }
    if(cat == 2){
        document.getElementById("cat").src = "./categorias/sentimento.html";
    }
    if(cat == 1){
        document.getElementById("cat").src = "./categorias/alimento.html";
    }
}