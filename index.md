# DOCU - Documentation and Testing Framework

## usage 

```js
//index.js


/* Docu comments are regular comments that begin at the start of a statement. Docu
will automatically insert following statement into the documentation output for this file */
var d = {doc:data};


/*  
	Docu comments recognize special symbols that make it easier to link Javascript information into 
	Files, such as the $NAME of the linked statement

	$constructor.arg1
	$constructor.arg2
	
	Unit tests can be directly integrated into Docu
	$expect.instance().module(124) == 500;
*/
class Test {
	
	constructor(tree = 2, time = 1){

	}

	module(){

	}
}
	

```