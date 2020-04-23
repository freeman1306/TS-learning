function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

class MyRes {
    header = 'header'
    result = 'redult'
}


class MyErr {
    header = 'header'
    message = 'message'
}

function handle(res: MyRes | MyErr) {
    if (res instanceof MyRes) {
        return {
            info: res.header + res.result
        }
    }
    else {
        return {
            info: res.header + res.message
        }
    }
}

// =========


type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')