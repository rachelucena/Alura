export class Conta {
    constructor(saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
            throw new Error('Voce nao deveria instanciar um objeto do tipo conta diretamente, pois essa e uma classe abstrata');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
            if (novoValor instanceof Cliente) {
                this._cliente = novoValor;
            }
        }
    
        get cliente() {
            return this._cliente;
        }
    
        get saldo() {
            return this._saldo;
        }

    // metodo abstrato, feito para ser sempre sobrescrito
    sacar(valor) {
        throw new Error('O metodo sacar da conta e abstrato')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado; // condicional para verificar se o saldo em conta e 
                                        // maior do que o valor que vai ser sacado
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return
        this._saldo += valor; // condicional para adicionar valor ao saldo da conta corrente
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}