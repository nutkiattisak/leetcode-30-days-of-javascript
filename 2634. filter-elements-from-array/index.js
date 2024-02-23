const filter = (arr, fn) => {
    const temp = []
	for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            temp.push(arr[i])
        }
    }
	return temp
}