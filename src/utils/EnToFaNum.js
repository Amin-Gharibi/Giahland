const EnToFaNum = (number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return number.toString().replace(/\d/g, (digit) => persianDigits[digit])
}

export default EnToFaNum;
