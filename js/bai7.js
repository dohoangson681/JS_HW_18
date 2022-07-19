function sort() {
    var subArray7 = mainArr.map(num => num) ; 
    select(subArray7) ; 
    var content = "" ; 
    for(var i = 0 ; i < subArray7.length ; i++){
        content += subArray7[i] + " " ; 
    }
    document.querySelector("#resultBai7").innerHTML = `Mảng sau khi được sắp xếp <br> ${content}` ; 
}
function select(array) {
    for(var i = 0 ; i < array.length-1 ; i++){
        var min_pos = i ; 
        for(var j = i + 1 ; j < array.length ; j++){
            if(array[j] < array[min_pos]){
                min_pos = j ; 
            }
        }
        var tmp = array[i] ; 
        array[i] = array[min_pos] ;
        array[min_pos] = tmp ; 
    }
}
document.getElementById("btnBai7").onclick = sort ; 