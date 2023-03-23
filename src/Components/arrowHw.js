
let c=(c)=> //Synthesis or Induction.
console.log('called from w6 =',c(4));
//console.log('called from w5 =',w5(5));
//console.log('called from w1 =',w1(6));


let x1=(c,a=0)=>c+a; //Synthesis or Induction.
console.log('called from x1 = ',x1(10));
console.log('called from x1 = ',x1(10,20));
//X1 => reference for calling
//c => arguments
//c+c => return of c+c


let x2=(c,a=0)=>wish(c,a); //Synthesis or Induction.
console.log('called from x2 = ',x2(9));
console.log('called from x2 = ',x2(9,4));

//Higher order Function.
function wish(c,a){
	console.log('return from wish 1');
	console.log('return from wish 2');
	console.log('return from wish 3');
	console.log('return from wish 4');
	console.log('return from wish 5');
	return c+a;
}
