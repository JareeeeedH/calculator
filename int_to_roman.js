

let Int_ToRoman = function(number){

        let romanScores={
            0:'',
            1:'I',
            2:'II',
            3:'III',
            4:'IV',
            5:'V',
            6:'VI',
            7:'VII',
            8:'VIII',
            9:'IX',
            10:'X',
            40:'XL',
            50:'L',
            90:'XC',
            100:'C',
            400:'CD',
            500:'D',
            900:'CM',
            1000:'M'
        };

    // 幾位數
    let character = String(number).length;
    console.log(character,'位數',number);

    // 一位數
    if(character == 1){
        let rlt = romanScores[number];
        return(rlt)
    }
    // 兩位數
    else if(character == 2){
        let rlt = '';
        let characters = String(number);
        let charactersContainer = [characters[0],characters[1]];
        console.log(charactersContainer);

        // 40以下
        if(Number(characters[0]) < 4){
            // 十位數
            for(let i=0; i< characters[0]; i++){
                rlt+= romanScores[10];
            }
            // 個位數
            rlt+= romanScores[characters[1]];
        }
        // 40~49
        else if(characters[0] == 4){
            // 十位數
            rlt+= romanScores[40];
            // 個位數
            rlt+= romanScores[characters[1]];
        }
        // 50~59
        else if(characters[0] == 5){
            // 十位數
            rlt+= romanScores[50];
            // 個位數
            rlt+= romanScores[characters[1]];
        }
        // 60~90以下
        else if(characters[0] > 5 && characters[0]<9){
            // 十位數
            // times = 需要幾個X
            let times = characters[0] - 5;
            rlt+= romanScores[50];
            for(let i=0; i<times; i++){
                rlt+= romanScores[10]
            }
            // 個位數
            rlt+= romanScores[characters[1]];
        }
        // 90~99
        else if(characters[0] == 9){
            // 十位數
            rlt+= romanScores[90]
            // 個位數
            rlt+= romanScores[characters[1]];
        }

        return(rlt)

    }

    // 三位數
    else if(character == 3){

            let rlt = '';
            let characters = String(number);
            let charactersContainer = [characters[0],characters[1],characters[2]];
            console.log(charactersContainer);

            // 1~400以下
            if(Number(characters[0]) < 4){
                for(let i=0; i< characters[0]; i++){
                    rlt+= romanScores[100];
                }

                // 40以下
                if(Number(characters[1]) < 4){
                    // 十位數
                    for(let i=0; i< characters[1]; i++){
                        rlt+= romanScores[10];
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 40~49
                else if(characters[1] == 4){
                    // 十位數
                    rlt+= romanScores[40];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 50~59
                else if(characters[1] == 5){
                    // 十位數
                    rlt+= romanScores[50];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 60~90以下
                else if(characters[1] > 5 && characters[1]<9){
                    // 十位數
                    // times = 需要幾個X
                    let times = characters[1] - 5;
                    rlt+= romanScores[50];
                    for(let i=0; i<times; i++){
                        rlt+= romanScores[10]
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 90~99
                else if(characters[1] == 9){
                    // 十位數
                    rlt+= romanScores[90]
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
            }
            // 400-499
            else if(Number(characters[0]) == 4){
                rlt += romanScores[400];

                // 40以下
                if(Number(characters[1]) < 4){
                    // 十位數
                    for(let i=0; i< characters[1]; i++){
                        rlt+= romanScores[10];
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 40~49
                else if(characters[1] == 4){
                    // 十位數
                    rlt+= romanScores[40];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 50~59
                else if(characters[1] == 5){
                    // 十位數
                    rlt+= romanScores[50];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 60~90以下
                else if(characters[1] > 5 && characters[1]<9){
                    // 十位數
                    // times = 需要幾個X
                    let times = characters[1] - 5;
                    rlt+= romanScores[50];
                    for(let i=0; i<times; i++){
                        rlt+= romanScores[10]
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 90~99
                else if(characters[1] == 9){
                    // 十位數
                    rlt+= romanScores[90]
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
            }
            // 5xx
            else if(Number(characters[0]) == 5){
                rlt += romanScores[500];

                // 40以下
                if(Number(characters[1]) < 4){
                    // 十位數
                    for(let i=0; i< characters[1]; i++){
                        rlt+= romanScores[10];
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 40~49
                else if(characters[1] == 4){
                    // 十位數
                    rlt+= romanScores[40];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 50~59
                else if(characters[1] == 5){
                    // 十位數
                    rlt+= romanScores[50];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 60~90以下
                else if(characters[1] > 5 && characters[1]<9){
                    // 十位數
                    // times = 需要幾個X
                    let times = characters[1] - 5;
                    rlt+= romanScores[50];
                    for(let i=0; i<times; i++){
                        rlt+= romanScores[10]
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 90~99
                else if(characters[1] == 9){
                    // 十位數
                    rlt+= romanScores[90]
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
            }
            // 6xx~8xx
            else if(Number(characters[0]) > 5 && Number(characters[0]) < 9 ){
                // times = 需要幾個百
                    let times = characters[0] - 5;
                    rlt+= romanScores[500];

                    for(let i=0; i<times; i++){
                        rlt+= romanScores[100]
                    }

                // 40以下
                if(Number(characters[1]) < 4){
                    // 十位數
                    for(let i=0; i< characters[1]; i++){
                        rlt+= romanScores[10];
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 40~49
                else if(characters[1] == 4){
                    // 十位數
                    rlt+= romanScores[40];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 50~59
                else if(characters[1] == 5){
                    // 十位數
                    rlt+= romanScores[50];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 60~90以下
                else if(characters[1] > 5 && characters[1]<9){
                    // 十位數
                    // times = 需要幾個X
                    let times = characters[1] - 5;
                    rlt+= romanScores[50];
                    for(let i=0; i<times; i++){
                        rlt+= romanScores[10]
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 90~99
                else if(characters[1] == 9){
                    // 十位數
                    rlt+= romanScores[90]
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
            }
            // 9xx
            else if(Number(characters[0]) == 9 ){

                rlt+= romanScores[900];

                // 40以下
                if(Number(characters[1]) < 4){
                    // 十位數
                    for(let i=0; i< characters[1]; i++){
                        rlt+= romanScores[10];
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 40~49
                else if(characters[1] == 4){
                    // 十位數
                    rlt+= romanScores[40];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 50~59
                else if(characters[1] == 5){
                    // 十位數
                    rlt+= romanScores[50];
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 60~90以下
                else if(characters[1] > 5 && characters[1]<9){
                    // 十位數
                    // times = 需要幾個X
                    let times = characters[1] - 5;
                    rlt+= romanScores[50];
                    for(let i=0; i<times; i++){
                        rlt+= romanScores[10]
                    }
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
                // 90~99
                else if(characters[1] == 9){
                    // 十位數
                    rlt+= romanScores[90]
                    // 個位數
                    rlt+= romanScores[characters[2]];
                }
            }
            
            return rlt;
    }

    // 四位數以上
    else{
        let thousandResult = '';
        let characters = String(number);

        // M 多少個千
        // 千位數的羅馬
        let M = Math.floor(number/1000);
        for(let i=0; i < M ; i++){
            thousandResult+= romanScores[1000];
        }

        // 百位的羅馬數字
        let hundrenRoman = Int_ToRoman(number%1000);


        let finalResult = thousandResult + hundrenRoman;

        return finalResult;



    }
};

export{ Int_ToRoman }