// tim so nho nhat trong mang
function minB3(params) {
    var minBai3 = mainArr[0] ; 
    for(var i = 0 ; i < mainArr.length ; i++){
        if(mainArr[i] < minBai3) minBai3 = mainArr[i] ; 
    }
    document.querySelector("#resultBai3").innerHTML = `Số  nhỏ nhất trong mảng là ${minBai3} ; ` ; 
}
document.querySelector("#btnBai3").onclick = minB3 ; 