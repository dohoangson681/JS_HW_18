function compareAD() {
    var cntAm = 0 ; 
    var cntDuong = 0 ; 
    for(var i = 0 ; i < mainArr.length ; i++){
        if(mainArr[i] > 0) cntDuong++ ;
        else if(mainArr[i] < 0) cntAm++ ; 
        else {
            cntAm += 0;
            cntDuong +=  0 ; 
        }
    }
    if(cntAm > cntDuong) {
        document.querySelector("#resultBai10").innerHTML = "Số lượng số âm lớn hơn."
    }else if(cntAm == cntDuong){
        document.querySelector("#resultBai10").innerHTML = "Số lượng số dương bằng số lượng số âm." ; 
    }
    else{
        document.querySelector("#resultBai10").innerHTML = "Số lượng số dương lớn hơn."
    }
}
document.querySelector("#btnBai10").onclick = compareAD ; 