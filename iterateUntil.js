// Page 74 of Functional JavaScript by Michael Fogus
// Takes 2 functions and performs some action until the other
// function returns false

function iterateUntil(func, check, init) {
	let ret = [];
  let result = func(init);

  while (check(result)) {
  	ret.push(result);
    result = func(result);
  }

  return ret;
};

const someArray = iterateUntil(function(n) { return n + n },
															 function(n) { return n <= 1024 },
                               1);

console.log(someArray);

//=> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
