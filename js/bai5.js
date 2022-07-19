function lastEven() {
    
    var pos_lastENum = -1 ; 
    for(var i = mainArr.length-1 ; i >=0  ; i--){
        if(mainArr[i] % 2 == 0 ){
            pos_lastENum = i ; 
            break ; 
        } 
    }
    console.log(pos_lastENum , mainArr[pos_lastENum]) ; 
    if(pos_lastENum != -1){
        document.getElementById("resultBai5").innerHTML = mainArr[pos_lastENum] ; 
    }else {
        document.getElementById("resultBai5").innerHTML = pos_lastENum ; 
    }
    
}
document.querySelector("#btnBai5").onclick = lastEven ; 