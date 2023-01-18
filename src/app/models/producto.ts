export class Producto {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id:any, name:any, description='', price=0, imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Rubik%27s_cube_almost_solved.svg/1200px-Rubik%27s_cube_almost_solved.svg.png') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
