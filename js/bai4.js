function minB4() {
    var minBai4 = Number.MAX_VALUE ; 
    for(var i = 0 ; i < mainArr.length ; i++){
        if(mainArr[i] < minBai4 && mainArr[i] > 0 ) minBai4 = mainArr[i] ; 
    }
    document.querySelector("#resultBai4").innerHTML = ` Số dương nhỏ nhất trong mảng là ${minBai4} ` ; 
}
document.querySelector("#btnBai4").onclick = minB4 ; 