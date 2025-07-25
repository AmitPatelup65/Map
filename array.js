//1.-Add 1 to every element: [1, 2, 3, 4] → [2, 3, 4, 5
const arr=[1,2,3,4,5]
const code=arr.map((num)=>num+1)
//console.log(code)

//2.-Multiply every number by 5: [2, 4, 6] → [10, 20, 30]
const arr1=[2,4,6]
const mul=arr1.map((num)=>num*5)
// console.log(mul)

//3.-Convert all elements to strings: [1, 2, 3] → ["1", "2", "3"]
  const arr2=[1,2,3]
  const string=arr2.map((num)=>num.toString())
//   console.log(string)

//4.-Convert all strings to uppercase: ["a", "b", "c"] → ["A", "B", "C"]
const alph=["a", "b", "c"]
const upcase=alph.map((num)=>num.toUpperCase())
// console.log(upcase)

//5.-Get the length of each string: ["hi", "hello", "bye"] → [2, 5, 3]
const str= ["hi", "hello", "bye"]
const length=str.map((letter)=>letter.length)
//console.log(length)

//6.-Add the index to each element: [10, 20, 30] → [10, 21, 32]
const array=[10,20,30]
const index=array.map((num,index)=>num+index)
//console.log(index)


//6.-Square every number: [2, 3, 4] → [4, 9, 16]
const ar=[2,3,4]
const Square=ar.map((num)=>num*num)
//console.log(Square)

//7.-Append "!" to every string: ["Hi", "Hello"] → ["Hi!", "Hello!"
const arr4=["Hi","Hello"]
const append=arr4.map((word)=>word+"!")
//console.log(append)

//MEDIUM LEVEL
//8.-Add 2 to only even numbers, keep odd numbers the same: [1, 2, 3, 4] → [1, 4, 3, 6]
const arr5=[1,2,3,4]
const even=arr5.map((num)=>{
    if(num%2==0){
        return num+2
    }   
    else{
        return num
    }
})
//console.log(even)

//9.-Replace each number with 0 if it’s odd, or 1 if it’s even: [1, 2, 3, 4, 5] → [0, 1, 0, 1, 0]
const arr6=[1,2,3,4,5]
const replace=arr6.map((num)=>{
    if(num%2!=0){
        return 0
    }
    else{
        return 1
    }
})
//console.log(replace)

//10.-Get the first letter of each string: ["Apple", "Banana", "Cherry"] → ["A", "B", "C"]
const arr7=["Apple","Banana","Cherry"]
const fletter=arr7.map((word)=>word[0])
//console.log(fletter)

//11.-Add "User " before each name: ["Alice", "Bob"] → ["User Alice", "User Bob"
const arr8= ["Alice", "Bob"] 
const user=arr8.map((word)=>"User"+word)
//console.log(user)

//12.-Convert Celsius to Fahrenheit: [0, 10, 20] → [32, 50, 68](temp * 9/5) + 32;
const arr9=[0,10,20]
const Fahrenheit=arr9.map((num)=>(num*9/5)+32)
//console.log(Fahrenheit)

//13.-Add "Index-" prefix with index: ["X", "Y", "Z"] → ["Index-0 X", "Index-1 Y", "Index-2 Z"]
const arr10=["X","Y","Z"]
const index1=arr10.map((value,index)=>{
    return "Index-"+`${index} ${value}`
})
//console.log(index1)


//14.-Map each number to "Even" or "Odd": [1, 2, 3, 4] → ["Odd", "Even", "Odd", "Even"
const arr11=[1,2,3,4]
const evod=arr11.map((num)=>{
    if(num%2!=0){
        return "Odd"
    }
    else{
        return "Even"
    }
})
//console.log(evod)

//15.-Create a new array where each value is the sum of element + its index: [5, 10, 15] → [5, 11, 17]
const arr12=[5,10,15]
const ind=arr12.map((value,index)=>value+index)
//console.log(ind)

//16.-Replace negative numbers with "NEG", positive with "POS": [5, -2, 0, -10] → ["POS", "NEG", "POS", "NEG"]
const arr13=[5,-2,0,-10]
const positive=arr13.map((num)=>{
    if(num>0){
        return "POSITIVE"
    }
    else{
        return "NEGATIVE"
    }
})
//console.log(positive)

//17.-FizzBuzz with map: [3, 5, 15, 7] → ["Fizz", "Buzz", "FizzBuzz", 7]
const arr14=[3,5,15,7]
const fizz=arr14.map((num)=>{
    if(num%3==0 && num%5==0){
        return "FizzBuzz"
    }
    else if(num%3==0){
        return "Fizz"
    }
    else if(num%5==0){
        return "Buzz"
    }
    else{
        return num
    }
})
//console.log(fizz)

//18.-Convert array of digits into a single string: [1, 2, 3] → "123" (use map+join)
const arr15=[1,2,3]
const single=arr15.map(num=>String(num)).join("")
//console.log(single)

//19.-Multiply each number by its index: [1, 2, 3, 4, 5] → [0, 2, 6, 12, 20]
const arr16=[1,2,3,4,5]
const multi=arr16.map((value,index)=>value*index)
console.log(multi)

//20.-Return array of booleans for even check: [1, 2, 3, 4] → [false, true, false, true]
const arr17=[1,2,3,4]
const tf=arr17.map((num)=>num%2==0)
//console.log(tf)


//21.-Prefix numbers with 'Even-' or 'Odd-': [1, 2, 3] → ["Odd-1", "Even-2", "Odd-3"
const arr18=[1,2,3]
const prefix=arr18.map((num)=>{
    if(num%2==0){
        return "Even- "+num
    }
    else{
        return "Odd- "+num
    }
})
console.log(prefix)