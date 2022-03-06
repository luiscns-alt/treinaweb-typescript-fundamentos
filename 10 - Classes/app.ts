interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

class Animal implements IAnimal {
    readonly nome: string;
    idade: number;
    private _estaVivo: boolean;

    get estaVivo(): boolean {
        return this._estaVivo;
    }

    // set estaVivo(status: boolean) {
    //     this._estaVivo = status;
    // }

    constructor(nome: string) {
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }

    nascer() {
        this._estaVivo = true;
        return console.log(`O ${this.nome} nasceu.`);
    }

    crescer() {
        this.idade++;
        return console.log(
            `O ${this.nome} cresceu. Ele está com ${this.idade}
            ${this.idade === 1 ? 'ano' : 'anos'}`
        );
    }

    morrer() {
        this._estaVivo = false;
        this.idade = 0;
        console.log(`O ${this.nome} morreu.`);
    }
}

let cachorro = new Animal('Toto');

cachorro.nascer();
cachorro.crescer();
console.log(cachorro.estaVivo === true ? 'Vivo' : 'Morto');
cachorro.crescer();
cachorro.morrer();
console.log(cachorro.estaVivo);

let gato = new Animal('Simba');
gato.nascer();
gato.crescer();
gato.morrer();
