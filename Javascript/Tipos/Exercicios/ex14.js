let usuarioLogado = true;  // Simula se o usuário está logado
let usuarioAdmin = false;  // Simula se o usuário é administrador

if (usuarioLogado && usuarioAdmin) {
  console.log('Acesso permitido: você é um administrador.');
} else {
  console.log('Acesso negado: é necessário estar logado e ser administrador.');
}
