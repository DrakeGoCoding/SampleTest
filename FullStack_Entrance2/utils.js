export function shuffleArray(array) {
    let j, tmp;
    for (let i = array.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}