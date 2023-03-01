export class Libro {
    constructor(
        public id_libro: number,
        public id_usuario: number,
        public titulo: string,
        public autor: string,
        public precio: number,
        public photo: string) {}
}
