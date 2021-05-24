function selectionSort(arr) {
    var length = arr.length,
        currentIndex = 0

    for (var i = 0; i < length - 1; i++) {
        currentIndex = i

        for (var j = i + 1; j < length; j++) {
            if (arr[j] < arr[currentIndex]) {
                currentIndex = j
            }
        }

        var temp = arr[i]
        arr[i] = arr[currentIndex]
        arr[currentIndex] = temp
    }

    return arr
}

console.log(selectionSort([1001, 99, -100, -1, 9]))