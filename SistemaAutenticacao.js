/*
Ser autenticavel significa ter o métodp autenticar

ducky type
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
        }
        return false;
    }

    // metodo estático eu não preciso de uma instância para chama-lo
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }  
}