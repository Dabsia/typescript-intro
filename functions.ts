const add = (n1: number, n2: number): number => {
    return n1 + n2
}

// The void means ithe function doesnt return anything
const printResult = (num: number): void => {
    console.log(`The result is ${num}`)
}

// const printResult = (num: number) => {
//     return `The result is ${num}`
// }

let combineValues: (a: number, b: number) => number;


console.log('Function.ts')


const addAndHandler = (a: number, b: number, cb: (res: number) => void) => {
    const result = a + b
    cb(result)
}

console.log(addAndHandler(12, 43, (result) => {
    console.log(result)
}))


console.log('TypeScript is fun')

// to start watch mode, tsc functions.ts -watch
