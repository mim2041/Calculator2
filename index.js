function insertNumber(number){
    var existingNumber = $("#result").val();
    $("#result").val(existingNumber + number)
}
function clearResult(){
    $("#result").val('')
}
function calculate(){
    var res= eval($("#result").val())
    $("#result").val(res)
}
function deleteValue(){
    var presentValue=$("#result").val();
    if(presentValue!=0){
        $("#result").val(presentValue.slice(0,-1));
    }
}