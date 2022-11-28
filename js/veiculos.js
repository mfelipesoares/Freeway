//Variaveis dos carros:
let xPcarros = [-150, -180, -150, 725, 780, 710, 730, -120];
let yPcarros = [438, 340, 390, 215, 75, 120, 170, 290];
let wCarros = [120,120, 120, 120, 120, 120, 120, 120];
let hCarros = [45, 45, 45, 45, 45, 45, 45, 45];
let velocidade = [8, 3, 4, 8, 3, 2.5, 4, 4];

//Posição Inicial:
let Pinicial = [-85, -120, -120, -20, 690, 695, 695, 695];
let Pfinal = [720, -20];

function automoveis(){
    //Mostra os veiculos no sketch:
    mostraVeiculos();
    function mostraVeiculos(){
        for (let i = 0; i <= 7; i++){
            image(veiculos[i], xPcarros[i], yPcarros[i], wCarros[i], hCarros[i]); 
        };
        movVeiculos();
    }

    //Movimenta veiculos:
    function movVeiculos(){
        for (let i = -1; i <= 3; i++){
            xPcarros[i] += velocidade[i];
        }
        for( let i = 4; i <= 7; i++){
            xPcarros[i] -= velocidade[i];
        }
        borda();
    }
    //Repete o movimento ao chegar a borda:
    function borda(){
        for (let i = 0; i < 4; i++){
            if(xPcarros[i] > Pfinal[0]){
                xPcarros[i] = Pinicial[i];
        
            }    
        }
        if(xPcarros[4] <= -150){
            xPcarros[4] = Pinicial[4];
        }
        if(xPcarros[5] <= -150){
            xPcarros[5] = Pinicial[5];
        }
        if(xPcarros[6] <= -150){
            xPcarros[6] = Pinicial[6];
        }
        if(xPcarros[7] <= -150){
            xPcarros[7] = Pinicial[7];
        }


        
    }

}

