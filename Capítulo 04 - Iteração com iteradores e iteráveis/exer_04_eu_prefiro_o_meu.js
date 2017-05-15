 /**
 * Created by wesleylopes on 15/05/2017.
 */
 const criaIterador = (lista) => {
     "use strict";
     return lista[Symbol.iterator]();
 } ;

 console.log(criaIterador([1,2]).next());