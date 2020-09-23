var nums = [10, 12, 45, 14, 26, 55, 35, 17, 0, 6];
nums.sort(numSort);
function numSort(a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
}
console.log(nums);
