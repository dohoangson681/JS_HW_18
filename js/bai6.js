/**
 * doi cho 2 phan tu bat ki trong mang
 */
function swap () {
    var subArray6 = mainArr.map(num => num) ;
    var index1 ; 
    var index2 ; 
    index1 = Number(document.getElementById("input1Bai6").value) ; 
    index2 = Number(document.getElementById("input2Bai6").value)
    if(index1 < 0 || index1 >= mainArr.length || index2 < 0 || index2 >= mainArr.length){
        alert("Vị trí mảng không tồn tại !") ;
    }else{
        var tmp = subArray6[index1] ; 
        subArray6[index1] = subArray6[index2] ; 
        subArray6[index2] = tmp ;
        var contentB6 = ""  ; 
        for(var i = 0 ; i < subArray6.length ; i++){
        contentB6 += subArray6[i] + " " ;  
        }
        document.getElementById("resultBai6").innerHTML = `Ta có được mảng mới <br> ${contentB6}` ; 
    }
    
}
document.querySelector("#btnBai6").onclick = swap ; 