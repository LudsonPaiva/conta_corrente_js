//os conteudos das classes são atributos
export class Cliente{
    get cpf(){
        return this._cpf;
    }

    // o construtos faz com que outros códigos não possam alterar estes atributos
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}