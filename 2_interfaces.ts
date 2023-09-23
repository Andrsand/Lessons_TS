interface Rect {
    readonly id: string // readonly - делает параметр только для чтения
    color?: string      // ? - делает параметр необязательным 
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '6666',
    size: {
        width: 100,
        height: 100
    },
    color:'red'
};

const rect2: Rect = {
    id: '7777',
    size: {
        width: 100,
        height: 100
    }
};

rect2.color = 'blue';
