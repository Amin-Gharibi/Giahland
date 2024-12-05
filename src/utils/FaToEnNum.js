const FaToEnNum = (number) => {
    const digitsEquivalents = {'۰': 0, '۱': 1, '۲': 2, '۳': 3, '۴': 4, '۵': 5, '۶': 6, '۷': 7, '۸': 8, '۹': 9}
    return number.toString().replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (digit) => digitsEquivalents[digit])
}

export default FaToEnNum;
