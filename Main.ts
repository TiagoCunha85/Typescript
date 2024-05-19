export abstract class Animal {
    private nome: string;
    private tamanho: number;
    private idade: number;

    public constructor(Nome: string, Tamanho: number, Idade: number) {
        this.nome = Nome;
        this.tamanho = Tamanho;
        this.idade = Idade;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getNome(): string {
        return this.nome;
    }

    public setTamanho(Tamanho: number): void {
        this.tamanho = Tamanho;
    }
    public getTamanho(): number {
        return this.tamanho;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }
    public getIdade(): number {
        return this.idade;
    }
}