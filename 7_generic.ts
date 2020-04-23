const arrNumb: Array<number> = [1, 1, 2, 3, 5]
const arrStr: Array<string> = ['hell', 'diw']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}