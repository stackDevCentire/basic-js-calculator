function doCalc(id){
    var target_id = document.getElementById(id);
    var target_id_value = target_id.textContent;
    var html_element_create = document.createElement("span");
    var element_text = document.createTextNode(target_id_value);
    html_element_create.appendChild(element_text);
    document.getElementById("calc-typed-nuber").appendChild(html_element_create);
}