function fibonacci(VALUE) {
    let PREVIOUS = 0, CURRENT = 1, NEXT = 1
    let result = []

    for(let i = 0; i <= VALUE; i++) {
        result.push(NEXT)
        PREVIOUS = CURRENT + NEXT
        CURRENT = NEXT
        NEXT = PREVIOUS
        
        if(PREVIOUS>VALUE) break
    }

    console.log(result)
    if(result.find(i=>i===VALUE))  
        return "Existe na sequencia" 
    else 
        return "Não existe"
}

console.log(fibonacci(2554))
