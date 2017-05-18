/**
 * Created by wesleylopes on 18/05/2017.
 */
var musica1 = {
    titulo: 'O amor não tem rollback',
    autor: 'SQL'
}

var musica2 = {
    titulo: 'Nada se componentiza a você',
    autor: 'React'
}

var musicas = new WeakSet([musica1, musica2]);
for(var musica of musicas){
    console.log(musica);
}

//O WeakSet não é iteravel