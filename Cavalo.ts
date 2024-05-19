import { Animal } from "./Main";

export class Cavalo extends Animal {
    public constructor(nome: string, tamanho: number, idade: number, cor:string) {
        super(nome, tamanho, idade);
    }
}
