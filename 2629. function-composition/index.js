const compose = (functions) => {
    return (x) => {
        let temp = x
        for(let i = functions.length - 1; i >= 0; i--){
            temp = functions[i](temp)
        }
        return temp
        
    }
}