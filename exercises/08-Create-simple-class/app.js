class Counter{
	constructor(){
		this.counter = 0;
		
	}
	increaseOne(){
		return this.counter ++
	}
	decreaseOne(){
		return this.counter--
	}
	getValue(){
		return this.counter
	}	
}

let myNewCounter = new Counter();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.increaseOne();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.decreaseOne();
myNewCounter.decreaseOne();
console.log(myNewCounter.getValue());

