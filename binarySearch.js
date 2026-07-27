const isValidUser = (array, target) => {
    let st = 0;
    let end = array.length - 1;
    while (end >= st) {
        let mid = st + (Math.round((end - st) / 2));
        console.log(array[mid])
        if (array[mid] == target) {
            return true;
        }

        if (array[mid] > target) {
            // left:
            end = mid - 1;
        } else st = mid + 1;
    }
}


let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isUser = isValidUser(arrs, 4);
console.log(isUser);
