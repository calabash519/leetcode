function insertionSort(arr) {
    var length = arr.length,
        prevIndex, current

    for (var i = 1; i < length; i++) {
        prevIndex = i - 1
        current = arr[i]

        while (prevIndex >= 0 && arr[prevIndex] > current) {
            arr[prevIndex + 1] = arr[prevIndex]
            prevIndex--
        }

        arr[prevIndex + 1] = current
    }

    return arr
}

console.log(insertionSort(([1001, 99, -100, -1, 9])))