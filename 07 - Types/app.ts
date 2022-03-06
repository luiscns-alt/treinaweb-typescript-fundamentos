type TipoArray = (number | 'Luis')[];

let a: TipoArray = [1, 2, 3, 'Luis'];
let b: TipoArray = [1, 'Luis', 2, 'Luis'];

console.log(a, b);

type Animal = {
    nome: string;
    idade: number;
    vivo?: boolean;
};

let cachorro: Animal;

cachorro = {
    nome: 'Thor',
    idade: 1,
    vivo: true,
};
let cachorro2: Animal = {
    nome: 'Toto',
    idade: 2,
};

console.log(cachorro);
console.log(cachorro2);
