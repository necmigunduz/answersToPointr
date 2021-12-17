const selectNum = () => {
    num = (((new Date()).getMilliseconds().toString())[1])
    pNum = parseInt(num)
    if(pNum <= 6 && pNum !== 0){
        return pNum
    } else {
        return (pNum % 6) + 1
    }
}
console.log(selectNum())