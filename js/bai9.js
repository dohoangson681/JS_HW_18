var arrayB9 = [] ; 
function addEle9() {
    var numb9 = Number(document.getElementById("arrayb9_input").value) ; 
    arrayB9.push(numb9) ; 
    var content = "" ; 
    for(var i = 0 ; i < arrayB9.length ; i++){
        content += arrayB9[i] + " " ; 
    }
    document.getElementById("contentarrayb9").innerHTML = content ; 
}
function cntInt() {
    var cnt = 0 ; 
    for(var i = 0 ; i < arrayB9.length ; i++){
        if(arrayB9[i] - Math.floor(arrayB9[i]) == 0) cnt++ ; 
    }
    console.log(cnt) ; 
    document.querySelector("#resultBai9").innerHTML = `Số lượng số nguyên trong mảng là ${cnt}` ; 
}
document.querySelector("#btnBai9").onclick = cntInt ; 
document.getElementById("btnarrayb9").onclick = addEle9 ;