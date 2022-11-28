//--------------------------------------------Imagens e Sons-------------------------------------------
let ponto;
let somColidiu;
let somTrilha;
let imgEstrada;
let imgAtor;
//Carros
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarro4;
let imgCarro1V;
let imgCarro2V;
let imgCarro3V;
let imgCarro4V;

function preload(){
    ponto = loadSound("sons/ponto.mp3");
    somTrilha = loadSound("sons/trilha.mp3");
    somColidiu = loadSound("sons/colidiu.mp3");
    //Imagem:
    imgEstrada = loadImage("imagens/estrada.png");
    imgAtor = loadImage("imagens/ator.png");
    //Ida
    imgCarro1 = loadImage("imagens/carro2.png");
    imgCarro2 = loadImage("imagens/carro2.png");
    imgCarro3 = loadImage("imagens/carro1.png");
    imgCarro4 = loadImage("imagens/carro2V.png");
    //Volta
    imgCarro1V = loadImage("imagens/carro1V.png");
    imgCarro2V = loadImage("imagens/carro2V.png");
    imgCarro3V = loadImage("imagens/carro1V.png");
    imgCarro4V = loadImage("imagens/carro1.png");
    //Lista
    veiculos = [imgCarro1, imgCarro2, imgCarro3, imgCarro4V, imgCarro1V, imgCarro2V, imgCarro3V, imgCarro4];
}

