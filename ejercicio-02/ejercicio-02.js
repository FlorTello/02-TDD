function busquedaLinear (array,itemToSearch) {
  //Escribe tu codigo aqui
 /*if(array	== undefined || itemToSearch == undefined){
  	return "Error";
  }
  else{
  		if(typeof array == 'string'){
  			return "Error de dato";
  		}
  		if(array.indexOf(itemToSearch) == -1){
	  	  return false;
	  	}
	  	else
	  	return array.indexOf(itemToSearch);
  }*/

  return array == undefined || itemToSearch == undefined ? "Error" : typeof array == 'string'? "Error de dato": array.indexOf(itemToSearch) == -1? false: array.indexOf(itemToSearch);
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
