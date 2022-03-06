interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

let cachorro: IAnimal = {
    nome: 'Rex',
    idade: 0,
    estaVivo: false,

    nascer() {
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu.`);
    },

    crescer() {
        this.idade++;
        return console.log(
            `O ${this.nome} cresceu. Ele está com ${this.idade}
            ${this.idade === 1 ? 'ano' : 'anos'}`
        );
    },

    morrer() {
        this.estaVivo = false;
        this.idade = 0;
        console.log(`O ${this.nome} morreu.`);
    },
};

cachorro.nascer();
cachorro.crescer();
cachorro.crescer();
cachorro.crescer();
cachorro.morrer();
