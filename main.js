let arr = [1, 2, 3, 4, 5, 6, 5, 7]
let result = [];
let result1 = 0;
arr.forEach((e) => {result.push(e*(-1))});
arr.forEach((e) => {
    result1 += +e;
});

max = arr.pop();
arr.forEach((e) => {
    if( max < e){
        max = e;
    }
});
min = arr[0];
arr.forEach((e) => {
    if( min > e ){
        min = e;
    }
});
middle = 0;
arr.forEach((e) => {
    middle += e;
    middle = middle / arr.length + 1;
});

let sumCh = 0;
arr.forEach((e,i) => {
    if ( i % 2 == 0 && i != 0){
        sumCh += e;
    }
});

console.log('Все элементы массива умноженные на -1: ', result);
console.log('Сумма элементов: ',result1);
console.log('Макс. число: ',max)
console.log('Мин. число: ',min)
console.log('Ср. арифм. равно: ',middle)
console.log('Сумма чисел на четн позициях: ',sumCh)

let arr1 = ['бРЕст','мИНСк','КОБРин']

let ar = arr1.map((e) => {
    return e.toLowerCase();
});
console.log(ar)
let  words = [];
ar.forEach((e) => {
    let word = e
    word = e[0].toUpperCase() + e.slice(1)
    words += word+' '
});
console.log(words)