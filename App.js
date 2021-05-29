function isPrime(num) {
    
    if(num < 2) return `${num} is not a Prime Number`

    for (let i=2; i<num; i++){
        if (num % i === 0) {
            return `${num} is not a Prime Number`
        }    
    }
    return `${num} is a PRIME NUMBER`
}

console.log(isPrime(3))
console.log(isPrime(7))
console.log(isPrime(8))
