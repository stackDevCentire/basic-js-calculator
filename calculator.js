function getKeyValue(id){
    var target_id = document.getElementById(id);
    var target_id_value = target_id.textContent;
    var html_element_create = document.createElement("span");
    var element_text = document.createTextNode(target_id_value);
    html_element_create.appendChild(element_text);
    document.getElementById("calc-typed-nuber").appendChild(html_element_create);
}
function docalcalculation(){
    var keyboardValue = document.getElementsByTagName("li");
    var screenValue = document.getElementById("calc-typed-nuber").textContent;
    var resultShow = document.getElementById("result");
    for(i=0;i<screenValue.length;i+=1){
        if(screenValue[i].textContent = "+"){
            var digit = parseInt(screenValue[i]);
            resultShow.textContent = eval(digit.textContent);
        }
        console.log(sum);
    }
    
 
 
      
}






