var rect1 = {
    id: '6666',
    size: {
        width: 100,
        height: 100
    },
    color: 'red'
};
var rect2 = {
    id: '7777',
    size: {
        width: 100,
        height: 100
    }
};
rect2.color = 'blue';
var rect3 = {}; // Приведение объект
var rect4 = {}; // альтернативный способ приведения объекта
var rect5 = {
    id: '8888',
    size: {
        width: 100,
        height: 100
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
};
