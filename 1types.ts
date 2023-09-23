

const isFetching: boolean = true;
const isLoading: boolean = false;

const intel: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello';

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['Alex', 9987623333];

// Any
let variable: any = 42;

variable = 'ddd'

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('jjj');

// Never
function throwError(message: string): never {
    
            throw new Error(message)
        }
    
function infinite(): never { // нельзя запускать эту функцию потому что все зависнет 
    while (true) {

    }
}

// Type

type Login = string;

const login: Login = 'admin';
//const login2: Login = 2;

