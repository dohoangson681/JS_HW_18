/**
 * dem so duong
 */
function cntDuong() {
    var subArray2 = mainArr.map(num => num) ; 
    var cnt = 0 ;
    for(var i = 0 ; i < subArray2.length ; i++){
        if(subArray2[i] > 0) cnt++ ; 
    }
    document.querySelector("#resultBai2").innerHTML = `Số lượng số dương trong mảng là ${cnt}  `; 
    
}
document.querySelector("#btnBai2").onclick = cntDuong ; 