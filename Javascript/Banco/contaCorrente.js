export class ContaCorrente {
    _saldo = 0;
    agencia;
    cliente;

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