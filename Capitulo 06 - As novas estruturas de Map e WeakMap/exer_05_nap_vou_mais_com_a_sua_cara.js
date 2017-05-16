/**
 * Created by wesleylopes on 16/05/2017.
 */
let amigos = {
    'Joao Silva': [23, 'masculino'],
    'Luisa Pimenta': [18, 'feminino'],
    'Julio Marinho': [52, 'masculino'],
    'Marcela Mel': [27, 'feminino']
};

const deletaAmigos = (amigos, exAmigos) => exAmigos.map((item) => {
    "use strict";
    if(amigos[item]){
        delete amigos[item];
        console.log(item + ' foi deletado.');
    } else {
        console.log(item + ' não é seu amigo.');
    }

    console.log(amigos);
});

deletaAmigos(amigos, ['Joao Silva', 'Andre', 'Marcela Mel'])