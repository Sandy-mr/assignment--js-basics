/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 *
 * Hint : you will need to use the `typeof` operator
 **/


// ++ YOUR Code below (write the 'makeGreeting' function): ++

function justOneString(param1, param2){
	var val1 = typeof param1;
	var val2 = typeof param2;

	if(val1 === "string" && val2 === "string"){
		return false;
	}else if (val1 !== "string" && val2 !== "string") {
		return false;
	} else if (val1 === "string" || val2 === "string") {
		return true;
	}

function justOneString(par1, par2) {
    var typepar1 = typeof par1;
    var typepar2 = typeof par2;
    if (typepar1==="string" && typepar2==="string") {
        return false;
    } else if(typepar1!=="string" && typepar2!=="string"){
        return false;
    } else if(typepar1==="string" || typepar2==="string"){
        return true;
    }
}
}


/*-------------------TEST-1-------------------------*/
// function receives 2 strings
//    and returns boolean true if it is a vowel
/*--------------------------------------------------*/
console.assert(justOneString('peanut', 'butter') === false)


console.log("==== ex-08-isVowel : TEST 1 ====");
console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString(8, true) === false)
