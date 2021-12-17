const selectNum = () => {
    num = (((new Date()).getMilliseconds().toString())[1])
    pNum = parseInt(num)
    if(pNum <= 6 && pNum !== 0){
        return pNum
    } else {
        return 'Dice could not settle on the ground well! Try again!'
    }
}
console.log(selectNum())