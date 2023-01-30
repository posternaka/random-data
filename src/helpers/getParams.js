export const getParams = (userNumber, arrList) => {
    if (arrList.length < 1) {
        return [];
    }

    if (arrList.length === 1) {
        const arr = arrList[0];
        const index = (userNumber - 1) % arr.length; 
        return [arr[index]];
    }

    const [firstArr, ...otherArrList] = arrList;
    const offset = Math.floor((userNumber - 1) / firstArr.length);
    const firstIndex = (userNumber - 1) % firstArr.length;
    const otherArrUserNumber = firstIndex + offset + 1
    const otherArrParams = getParams(otherArrUserNumber, otherArrList);

    return [firstArr[firstIndex], ...otherArrParams];
}