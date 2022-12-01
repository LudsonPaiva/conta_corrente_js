//os conteudos das classes são atributos
export class Cliente{
    get cpf(){
        return this._cpf;
    }

    // o construtos faz com que outros códigos não possam alterar estes atributos
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
    
}