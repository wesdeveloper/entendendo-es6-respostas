/**
 * Created by wesleylopes on 18/05/2017.
 */
const status = [
    { codigo: 'OK', resposta: 'Sucesso' },
    { codigo: 'FAILED', resposta: 'Erro' },
    { codigo: 'PENDING', resposta: 'Pendente' }
];
let mensagem = '';
let codigoAtual = 'OK';

for (let i = 0; i < status.length; i++) {
    if (status[i].codigo === codigoAtual) {
        mensagem = status[i].resposta;
    }
}

console.log(mensagem);

/*
* var status = [
 { codigo: 'OK', resposta: 'Sucesso' },
 { codigo: 'FAILED', resposta: 'Erro' },
 { codigo: 'PENDING', resposta: 'Pendente' }
 ];
 var mensagem = '';
 var codigoAtual = 'OK';

 for (var i = 0; i < status.length; i++) {
 if (status[i].codigo === codigoAtual) {
 mensagem = status[i].resposta;
 }
 }

 console.log(mensagem);
*/