// Ejercicio 1

	var i = 0;
	var chk = 0;
	var suma = 0;

	for (i = 0; i < 101;  i++) {

	// console.log("suma vale: " + suma);

	// console.log("chk vale: " + chk);
	chk = i % 2;

		if ( chk == 0){
			
			suma = suma +i;

		}
	}	
	console.log("Suma de pares:" + suma);



	// Ejercicio 2


	var z = 0;
	var fact = 0;
	var numFact = 10;
	var numFact2 = 0;
	var cont = 0;

	for (z = numFact; z > 0;  z--) {

		if (z > 1) {
		numFact = (numFact * (z-1));
//		numFact2 = (numFact * (i-1));
		
	}
	cont = cont + 1;
	//console.log("i vale: " + z);


	//console.log("numFact vale: " + numFact);

	// console.log("numFact vale: " + numFact2);
	// console.log("chk vale: " + chk);
	
	}	
	console.log("Factorial de " + cont +": " + numFact);




	// Ejercicio 3

	var arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var arregloNvo = [];
	var apunta = 10;
	var i = 0;



	for (i = i; i < 10;  i++) {

		if (i > 1) {
	//	numFact = (numFact * (i-1));
	//numFact2 = (numFact * (i-1));
		
	}


	
	apunta = apunta-1;
	//console.log(arreglo[i]);

	//console.log(arreglo[apunta]);
	
	arregloNvo.push(apunta);



	// console.log("numFact vale: " + numFact2);
	// console.log("chk vale: " + chk);
	
	}	
	
console.log(arregloNvo);
	


