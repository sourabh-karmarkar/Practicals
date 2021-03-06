const primeFactorFunction = number => {
    if(number == 1)
    {
        return null
    }
    let primeFactorArray = []
    let factor = 2
    while(number/2 >= factor)
    {
        if(number % factor == 0)
        {
            primeFactorArray.push(factor)
            number /= factor
        }
        else
        {
            factor++
        }
    }
    if(number > 1)
    {
        primeFactorArray.push(number)
    }
    return primeFactorArray
}

module.exports = {primeFactorFunction}