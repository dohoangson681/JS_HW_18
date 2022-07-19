function firstPrime() {
    var idx_prime ; 
    for(var i = 0 ; i < mainArr.length ; i++){
        if(checkPrime(mainArr[i])){
            idx_prime = i ; 
            break ; 
        }
    }
    console.log(idx_prime , mainArr[idx_prime]) ; 
    document.querySelector("#resultBai8").innerHTML = mainArr[idx_prime] ; 
}
function checkPrime(num) {
    if(num < 2) return false ; 
    for(var i = 2 ; i * i <= num ; i++){
        if(num % i == 0) return false ; 
    }
    return true ; 
}
document.querySelector("#btnBai8").onclick = firstPrime ; 