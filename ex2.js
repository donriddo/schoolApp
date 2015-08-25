// An example of how /this/ works in JavaScript written by donriddo @ 18th Aug, 2015.

/*

---------------------------------------- A Brief Explanation ----------------------------------------

The concept of /this/ in JavaScript is an epitome of subtlety, 
Even seasoned JS developers find it difficult to grasp what truly /this/ is,
and instead of them really learning what it truly is, they tend to avoid it and label it
a bad side of JavaScript whereas it can be as easy as declaring a variable. 

Now, lets get on with /this/.

The shorcut to getting a hold of what /this/ truly is to know that this is not 
author-time(write-time) but run-time, what this means is that /this/ comes 
into play when it is called and not when it is declared.

In the below example, we can make a mistake to think that /this/ belongs to the objCreator but NO!
it isn't so, it belongs to the 'obj' object because that is where it is called. So it is very very 
wrong to think the engine is doing a Lexical lookup in the lexical scope whereas it is actually
bound to a dynamic scope which is created at run-time.

*/

function objCreator() {
	this.a = function (b, c) { 
	this.b = b;
	this.c = c;
	},
	this.d = function () {
		console.log(this.b * this.c);
	};
}
var obj = {};
 
objCreator.call(obj);

obj.a(3,4);
obj.d();
console.log(obj);



// A complex example on /this/

function foo(el) {
 console. log( el, this. id );
}
var obj = {
 id: "awesome"
};
// use `obj` as `this` for `foo(..)` calls
[1, 2, 3]. forEach( foo, obj);


function PascalCase (camelCase) {
	camelCase = camelCase.split('');
	camelCase[0] = camelCase[0].toUpperCase();
	console.log(camelCase.join(''));

}

PascalCase('cssFiles');