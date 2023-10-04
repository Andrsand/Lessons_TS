class Typescript {
    version: string;
    
    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel;       // не смотря на то, что поле model - readonly, его можно изменить внутри конструктора
    }
}

class Car_1 {                       // более короткая запись класса Car
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) { } // конструктор сам создаст в классе полк model с типом readonly
}


// модификаторы ===========

class Animal {                      // protected, public и private - модификаторы 
    protected voice: string = ' '
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('Meow');
console.log(cat.color);  // публичные свойства доступны 
