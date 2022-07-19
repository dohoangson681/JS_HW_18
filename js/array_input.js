var mainArr = [] ; 
function arrayInput() {
    var arrayEle = Number(document.querySelector("#mainArrayInput").value) ; 
    mainArr.push(arrayEle) ; 
    var content = duyetMang() ; 
     
    document.querySelector("#mainArray_output").innerHTML = content ; 
}
document.querySelector("#btnAddNum").onclick  = arrayInput ; 
function duyetMang() {
    var content = "" ; 
    for(var i = 0 ; i < mainArr.length  ; i++){
        content +="i =" + i + " : " + "[ " + mainArr[i] + " ]" + "<br>"  ; 
    }
    
    return content ; 
}
// reset array 
document.querySelector("#btnResetArray").onclick = function () {
    mainArr = []  ; 
    document.querySelector("#mainArray_output").innerHTML = "" ; 
}