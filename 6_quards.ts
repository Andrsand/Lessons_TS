function strip(x: string | number) {
    if (typeof x === 'number') {   // если x будет number - вернуть - 2  
        return x.toFixed(2);
    }
    return x.trim()                // иначе x будет строкой
}