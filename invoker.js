// From the book Functional JavaScript by Michael Fogus
// Good explanation on Stack Overflow
// http://stackoverflow.com/questions/20363857/how-does-this-javascript-work-functional-programming

function fail(thing) {
	throw new Error(thing);
}

function existy(x) { return x !== null };

// pg. 19
function truthy(x) {
	return (x !== false) && existy(x);
};

function doWhen(cond, action) {
	if(truthy(cond))
  	return action();
  else
  	return undefined;
}

// pg. 76
function invoker (name, method) {
	return function(target) {
  	if (!existy(target)) fail("Must provide a target");

    var targetMethod = target[name];
    var args = _.rest(arguments);

    return doWhen((existy(targetMethod) && method === targetMethod), function() {
    	return targetMethod.apply(target, args);
    });
  };
};

var rev = invoker('reverse', Array.prototype.reverse);

console.log(_.map([[1, 2, 3]], rev));
//=> [[3, 2, 1]]

var str = invoker('toString', Array.prototype.toString);

console.log(str(_.range(10)));
//=> "0,1,2,3,4,5,6,7,8,9"
