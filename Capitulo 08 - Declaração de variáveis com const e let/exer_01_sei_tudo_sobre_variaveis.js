/**
 * Created by wesleylopes on 18/05/2017.
 */
var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
    arrayFuncoes.push(function(){
        console.log(i);
    });
}

arrayFuncoes.forEach(function(funcao){
    funcao();
});

//a) 10   b) mudando o var do for para let