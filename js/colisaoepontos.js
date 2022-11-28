let colidiu = false;
function voltaPinicial(){
    varAtor[0] = 110;
    varAtor[1] = 500;
}

function colisao(){
    pontuacao();
   for(let i = 0; i <=7; i++){
        colidiu = collideRectCircle (xPcarros[i], yPcarros[i], 120, 45, varAtor[0] + raio , varAtor[1] + 30, 30);
        if(colidiu){
            somColidiu.play();
            p -= 1;
            voltaPinicial();
        }
   }

   function pontuacao(){
       if(varAtor[1] < 20){
            p += 1;
            ponto.play();
            voltaPinicial();
       }
       if(p < 0){
        p = 0;
       }
       textSize(65);
       fill(255);
       text(p, 640, 55);
   }

}
