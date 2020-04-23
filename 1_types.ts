const isF: boolean = true
const isL: boolean = false

const int: number = 42
const float: number = 4.2
const numb: number = 3e10

const message: string = 'Hello TS'

const numberArr: number[] = [1, 2, 3]
const numberArr2: Array<number> = [1, 2, 3]

const words: string[] = ['hello', 'typescript']

// Tuple

const contact: [string, number] = ['ya', 12345]

// Any

let variable: any = 32

variable = 'New String'
variable = []

//========

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName("sdsd")

// Never

function throwError(message: string): never {

    throw new Error(message)

}

function infinite(): never {
    while (true) { }
}


// Type

type Login = string
const login: Login = '23'



const id1: string | number = 1234
const id12: string | number = "1234"

type ID = string | number

const id11: ID = 1234
const id121: ID = "1234"
// const id: ID = true


type SomeType = string | null | undefined