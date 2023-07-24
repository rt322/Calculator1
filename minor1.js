let displayvalue="";
function appendValue(value) {
    displayvalue+=value;
    document.getElementById("display").value=displayvalue;
}
function appendOperator(operator) {
    displayvalue+=operator;
    document.getElementById("display").value=displayvalue;
}
function clearDisplay(){
    displayvalue="";
    document.getElementById("display").value=displayvalue;
}
function appendDEL(){
    displayvalue=displayvalue.substring(0,displayvalue.length-1);
    document.getElementById("display").value=displayvalue;
}
function calculate(){
    try{
    const result=eval(displayvalue);
    document.getElementById("display").value=result;
    displayvalue="";
} catch(error) {
document.getElementById("display").value="error";
}}






