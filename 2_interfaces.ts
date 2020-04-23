interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}





const rect1: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    color: '#cccc'
}

const rect2: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },

}

rect2.color = '#cccc'
// rect2.id = '#cccc'

const rect3 = {} as Rect
const rect4 = <Rect>{}

//=========

interface RectWithAre extends Rect {
    getArea: () => number
}

const rect5: RectWithAre = {
    id: '12',
    size: {
        width: 23,
        height: 12
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

//===========

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// ===========
interface Styles {
    [key: string]: string
}


const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
}
