//Variaveis do Ator:
let varAtor = [110, 500, 60, 5]; //varAtor = [x, y, tamanho, velocidade]
let raio = 35;
let p = 0;
function ator(){
    //Mostra ator no sketch:
    image(imgAtor, varAtor[0], varAtor[1], varAtor[2], varAtor[2]);
    //Função de movimentação da personagem pelas teclas:
    movimentacao();
    function movimentacao(){
        if(keyIsDown(UP_ARROW)){
            varAtor[1] -= varAtor[3];
        }
        if(keyIsDown(DOWN_ARROW)){
            varAtor[1] += varAtor[3];
            if(varAtor[1] > 550){
                return voltaPinicial();
            }
        }
        if(keyIsDown(LEFT_ARROW)){
            varAtor[0] -= varAtor[3];
            if(varAtor[0] < 0){
                return voltaPinicial();
            }
        }
        if(keyIsDown(RIGHT_ARROW)){
            varAtor[0] += varAtor[3];
            if(varAtor[0] > 700){
                return voltaPinicial();
            }
        }
    }

    resetPosicao();
    function resetPosicao(){
        if(keyIsDown(82)){
            varAtor[0] = 110;
            varAtor[1] = 485;
        }
    }
}
