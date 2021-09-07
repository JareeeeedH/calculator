// 寫入括號
// input array, and index of (* || /)
let createdBrackets = function(array, index){
    array.splice(index+2, 0, ")");    
    array.splice(index-1, 0, "(");

    return array
    };
 
// 遞迴括號起來
let bracketingUp = function(array){

    let needToBracket= false;
    let indexOf_mul_div = null;
    array.forEach( (item, index, array) =>{

            if( item == '*'){ 
            
            indexOf_mul_div = index;
            array[index] = 'x';
            createdBrackets(array, indexOf_mul_div);

            needToBracket = true;

            }
            else if( item == '/'){ 
            
            indexOf_mul_div = index;
            array[index] = '÷';
            createdBrackets(array, indexOf_mul_div);

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

// 把 x || ÷ 換回 * || /
let getOperatorBack = function(array){
    array.forEach(( item, index, array )=>{

        if(item == 'x'){
            array[index] = '*'}
        if(item == '÷'){
            array[index] = '/'}
        })
};

// 中序轉後序演算法
function toPostFix(arrayWithBrackets){

    let output = [];
    let opList = [];

    let scores= {
        'x': 10,
        '÷': 10,
        '(':5,
        ')':5,
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
        else if( item == '('){ 
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


    // loop跑完，處理堆疊Stake剩下的，依序進入postFix

    while( opList.length>0){

        let opperatorOutStake = opList.pop();

        if(opperatorOutStake == '+' || '-' || 'x', '÷'){
            output.push(opperatorOutStake);
            console.log(output)
        }
        
    }


    // console.log('output',output)
    console.log('Stake',opList)
    return output;
}



// calcute for each operator
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
