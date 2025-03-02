import {Cliente} from "../Conta/cliente.js";
import { Gerente } from "./gerente.js";
import { Diretor } from "./diretor.js";
import { SistemaAutenticacao } from "./autenticacao.js";

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Ricardo', 5000, 12345678901);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Lais', 12345678902);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');

console.log(gerenteEstaLogado, diretorEstaLogado);

