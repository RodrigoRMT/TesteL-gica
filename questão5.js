
                
var palavra = ['R','O','D','R','I','G','O']
                

function inverter (){
   
    var palavraNova =''
    
    for(i = palavra.length - 1; i >=0; i--){
        palavraNova = palavraNova + palavra[i];   
    }
     return palavraNova;
}

console.log(inverter())

