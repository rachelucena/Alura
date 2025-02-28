export class ContaCorrente {
    static numeroDeContas = 0;
    _saldo = 0;
    agencia;
    cliente;



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

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor; // condicional para verificar se o saldo em conta e 
                                        // maior do que o valor que vai ser sacado
            return valor;
        }
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