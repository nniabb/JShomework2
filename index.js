// Write a program to remove all negative numbers from an array

let array = [-1, 10, -25, -40, 30, 55, 12];
let newarray = []

for(let i=0; i<array.length; i++){
    if(array[i] > 0){
        newarray.push(array[i])
    }
}
console.log(newarray)



// remove duplicate elements from an array


let array3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
let uniquearray =[]
for(let i=0; i<array3.length; i++){
    if(!uniquearray.includes(array3[i])){
        uniquearray.push(array3[i])
    }
}
console.log(uniquearray)



// split an array into two separate arrays, one with even numbers and  the other with odd numbers


let array2 = [1,2,3,4,5,6,7,8,9,10]
let even = []
let odd =[]

for(let i=0; i<array2.length; i++){
    if(array2[i] % 2 === 0){
        even.push(array2[i])
    }
    else {
        odd.push(array2[i])
    }
}

console.log(even)
console.log(odd)