// slice spread operator
function tongDuong() {
    var subArray1 = mainArr.map(num => num) ; 
    var sum = 0  ; 
    for(var i = 0 ; i < subArray1.length ; i++){
        if(subArray1[i] > 0) sum += subArray1[i] ; 
    }
    document.querySelector("#resultBai1").innerHTML ="Tổng các phần tử dương trong mảng là :  " +  sum ; 
}

document.querySelector("#btnBai1").onclick = tongDuong ; 
