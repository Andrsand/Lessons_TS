interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person; // 'name' or 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // 'mail' | 'name'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; // 'mail' | 'name'

let u1: UserKeysNoMeta1 = 'name'; // 'name'
