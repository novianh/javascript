//last array

var arr = [1, 2, 3, "ayam", 'chiken'];

function lastArr(arrIn) {
	for (var i = 0; i < arrIn.length; i++) {
		if (i == arrIn.length-1) {
			let result = arr[i];
			return result;
		}
	}
}


console.log(lastArr(arr));