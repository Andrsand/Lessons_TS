function strip(x: string | number) {
    if (typeof x === 'number') {   // если x будет number - вернуть - 2  
        return x.toFixed(2);
    }
    return x.trim()                // иначе x будет строкой
}

// instance of - для проверки объекта к классу

class MyResponse {
    header = 'response header';
    result = 'response result';
}

class MyError {
    header = 'error header';
    message = 'error message';
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {  // если объект res содержит MyResponse - то вернем объект info с соответствующими классу полями
        return {
            info: res.header + res.result
        }
    } else {                       // иначе в поле info будут поля из класса MyError
        return {
            info: res.header + res.message
        }
    }
}

//===== несколько значений типа =================
type AlertType = 'success' | 'warning' | 'danger'; // присваиваем типу несколько значений
function setAlertType(type: AlertType) {
    //................................................................
}

setAlertType('danger');
setAlertType('warning');

// setAlertType('default'); присвоение изначально не определенного в AlertType значения не прокатит

