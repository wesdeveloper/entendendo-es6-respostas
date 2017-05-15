/**
 * Created by wesleylopes on 15/05/2017.
 */
const ruas = ['Rua 1, Rua 2', 'Rua 3'];

const percorreRuas = (ruas, nomeRua) => {
    for(let rua of ruas) {
        console.log(rua);
        if (rua === nomeRua){
            break;
        }
    }
};

percorreRuas(ruas,'Rua 2');