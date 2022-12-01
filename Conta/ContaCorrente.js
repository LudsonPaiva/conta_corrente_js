import { Conta } from "./Conta.js";

// "extends" traz tuddo da classe conta para cá = herdar de uma classe
export class ContaCorrente extends Conta{
    static numeroDeContas = 0; // o static faz que o atributo não altere
    constructor(cliente, agencia){
        super(0, cliente, agencia);  // super é uma palavra especial que chama o da classe mãe, neste caso chamou o construtor. 
                                     //Se fosse em outro método seria relacionado ao método
        ContaCorrente.numeroDeContas +=1; // o ContaCorrente é um atributo estático altera a classe como um todo
    }

    // sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}