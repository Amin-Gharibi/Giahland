const EnToFaNum = (number, useGrouping = false) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    let formattedNumber;
    if (useGrouping) {
        formattedNumber = new Intl.NumberFormat('en-US', {useGrouping: true}).format(number);
    } else {
        formattedNumber = number.toString();
    }

    return formattedNumber.replace(/\d/g, (digit) => persianDigits[digit]);
}

export default EnToFaNum;
