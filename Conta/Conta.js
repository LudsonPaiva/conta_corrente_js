//Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta Diretamente, pois esta é uma classe abstrata");
        }

        this._saldo = saldoInicial;  // o # protege o atributo de edição pelo Node, informando que a classe é privada. Mas por convenção usar o _ na frente
        this._cliente = cliente;
        this._agencia = agencia; // o this significa desta conta       
    }

    // protegendo um atributo privado com setter. Damos acesso a propriedade privada com a regra de proteção aqui dentro
    // apesar de parecer um método, o setter é um acessor
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }        
    }

    // se alguém desejar acessar o valor do meu cliente, usa-se o acessor get
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }
    
    //Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");            
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    // early return = Primeiro ver o que não se quer
    depositar(valor){
        if (valor <= 100){
            return;
        }
        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    teste(){
        console.log("teste na classe conta corrente");
    }
}