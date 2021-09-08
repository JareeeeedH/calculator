// 寫入括號
// 給array與 乘號or除號位置，完成乘除先括號。 1+(2*3)
let createdBrackets = function(array, index){
    array.splice(index+2, 0, ")");    
    array.splice(index-1, 0, "(");
    return array
    };
 
// 給array，將array跑迴圈，尋找每個位置，遇到 "＊"或者“/"，就調用寫入括號的function；
// 因為給了括號，array的length，會變多，最後面的幾個位置會沒有跑到迴圈；
// 將尋找到的 * / 號替換掉，避免重跑迴圈又遇到，然後再調用一次自己這個function跑迴圈，直到都括號完畢。
let bracketingUp = function(array){

    let needToBracket= false;
    let indexOfOperator = null;
    array.forEach( (item, index, array) =>{

            if( item == '*'){ 
            
            indexOfOperator = index;
            array[index] = 'x';
            createdBrackets(array, indexOfOperator);

            needToBracket = true;

            }
            else if( item == '/'){ 
            
            indexOfOperator = index;
            array[index] = '÷';
            createdBrackets(array, indexOfOperator);

            needToBracket = true;

            }

        })

    if(needToBracket){ 
        bracketingUp(array);
    }
    else{
        getOperatorBack(array);
        console.log(array);
        return array;
    }
};

// 把 x ÷ 換回 * /
let getOperatorBack = function(array){
    array.forEach(( item, index, array )=>{

        if(item == 'x'){
            array[index] = '*'}
        if(item == '÷'){
            array[index] = '/'}
        })
};

// 中序轉後序演算法
// 參數放入括號完成的array，執行中序轉後序演算法。
function toPostFix(arrayWithBrackets){

    // 輸出的結果
    let output = [];
    // 存放運算符的堆疊資料
    let opList = [];

    // 權重分數比較
    let scores= {
        'x': 10,
        '÷': 10,
        "+":2,
        "-": 2
    }

    arrayWithBrackets.forEach(( item, index, array )=>{

        //數字直接進去 output
        if(Number(item)){
            console.log('數字', item)
            output.push( item );
        }

        // '(' 左括號直接進去 opList堆疊
        else if( item == '(' ){ 
            console.log('左括號 進去Stake', item)
            opList.push( item ); 
        }

        // +-*/，堆疊空的話，直接進去堆疊
        else if( opList.length=== 0 && !(Number(item)) ){
            console.log('堆疊空 直接進去', item)
            opList.push( item );
        }


        // 右邊括號出現, opetator List 依序放入outpot，直到左括號出現．
        else if( item == ')'){

            console.log('右括號出現...')

            while(opList[opList.length-1] !== "("){

                let operatorOut = opList.pop();
                console.log(operatorOut, '拿出來放進去outout')
                output.push(operatorOut);
                

            }
            while(opList[opList.length-1] == "("){

                let operatorOut = opList.pop();
                console.log(operatorOut, '左括號刪除')

            }
        }

        // operator +,-,*,/,( 遇到左括號，直接入堆疊

        else if( opList.length>0 && (item == '+' || '-' || '*' ||'/' ||'(')){

            let lastOperator = opList[opList.length-1];
            console.log(item,'遇到', lastOperator,' next... ')
        
            if(lastOperator == '('){ 
                opList.push( item );
                console.log(item,'入堆疊')
            }

            else if(lastOperator == '+'||'-'||'*'||'/'){
                let scoreNow = scores[item];
                let stakeScore = scores[lastOperator];

                console.log(scoreNow, 'now')
                console.log(stakeScore, 'stakeScore')

                // 比較運算......有更換需要confirm/pending?
                if(scoreNow > stakeScore){

                    console.log('當前權重大於堆疊,當前' + item + 'Out', '舊的in',scoreNow,stakeScore)
                    output.push(item);

                }else{
                    console.log('當前'+   item   + '權重 沒有 大於堆疊, 舊的out, 當前in',scoreNow,stakeScore)

                    let operatorOut = opList.pop();
                    console.log(operatorOut,'需要進去output');
                    output.push(operatorOut);

                    opList.push(item)

                    // while()...?

                }

            }

        }

    })

    // loop跑完，處理堆疊剩下的內容，依序進入output
    while( opList.length>0 ){

        let opperatorOutStake = opList.pop();

        if(opperatorOutStake == '+' || '-' || 'x', '÷'){
            output.push(opperatorOutStake);
            console.log(output)
        }
    }

    // console.log('output',output)
    console.log('Stake',opList)
    return output;
};


// calcute for each operator
// 給入兩個數字+一個運算符號，做計算。
let eachCalculate = function(number1, number2, operator){

    if(operator == '+'){
        return number1 + number2
    }
    else if(operator == '-'){
        return number1 - number2
    }
    else if(operator == '*'){
        return number1 * number2
    }
    else if(operator == '/'){
        return number1 / number2
    }

    else{ alert('operator is wrong')}
};

// calcute by PostFix
// 參數放入後序排列的array，依後序計算的演算法計算。
let calcuteByPostFix = function(postfixArray){
    let stack = [];
    postfixArray.forEach((item =>{
        if(Number(item)){
            stack.push(parseFloat(item))
        }
        else{
            
            let stack1= stack.pop();
            let stack2 = stack.pop();
            let answer = eachCalculate(stack2, stack1, item);
            stack.push(answer);
        }
    }))

    return(stack)

};


export {createdBrackets, getOperatorBack, bracketingUp, toPostFix, eachCalculate, calcuteByPostFix}
