// declare const myPoint: {
//     x: number;
//     y:number
// }

interface Point {
    x: number,
    y:number
}

declare const myPoint: Point

interface Point {
    z: number
}

myPoint.z

