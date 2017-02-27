function fibonacci(upperLimit) {
  //Escribe tu codigo aqui
  var array = [0,1];
  if(upperLimit == -1 || typeof	upperLimit == "string" || upperLimit == 0){
  		return "Error";
  }
  else if(upperLimit == 1){
  		return array[0];
  }
  else{
  		for (var i = 2; i < upperLimit; i++) {
  			array[i] = array[i - 2] + array[i - 1];
  		}
  		return  array;
  	}
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
