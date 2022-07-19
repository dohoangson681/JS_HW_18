function randomArr() {
    mainArr = [] ; 
    document.querySelector("#randomArray_output").innerHTML = "" ; 
    // resetRandomArr(mainArr) ; 

    var randomEle = Number(document.querySelector("#randomArrInput").value) ; 
    var maxInputRandom = Number(document.querySelector("#maxRandomInput").value)
    
    for(var i = 0 ; i < randomEle ; i++){
        var x = Math.floor(Math.random()*maxInputRandom) ;
        mainArr.push(x) ;  
    }
    var content = "" ; 
    for(var i = 0 ; i < mainArr.length ; i++){
        content += mainArr[i] + " " ; 
    }
    document.querySelector("#randomArray_output").innerHTML = content ; 
}
function resetRandomArr(array) {
    array = [] ; 
    // document.querySelector("#randomArray_output").innerHTML = "" ; 
}
document.getElementById("btnRamdom").onclick = randomArr ; 
// document.querySelector("#btnRamdom").onclick = randomArr ; 






// khoi tao mang
var myArray = [1,2,3,4,5,3,4] ; 
console.log(myArray) ; 
// tao ham reset mang ve rong
function resetRandomArr(array) {
    array = [] ; 
}
// resetRandomArr(myArray) ; 
// console.log(myArray) ; 

// myArray = [] ;
// console.log(myArray) ; 


// ham sort
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
select(myArray) ; 
console.log(myArray) ;