/**
 * Created by wesleylopes on 18/05/2017.
 */
const lista = [1,1,2,2,3,3]
const removeDuplicatas = (lista)=> {
    "use strict";
    const set = new Set()
    lista.map((item) => set.add(item))
    return set
}

console.log(removeDuplicatas(lista))