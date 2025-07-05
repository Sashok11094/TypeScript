import { Buyable } from './cart'

export class Movie implements Buyable {
    constructor (
        public price: number,
        public id: number,
        public name: string,
        public year: number,
        public country: string,
        public slogan: string,
        public genre: string[],
        public duration: number
    ) {}
}

export default Movie;