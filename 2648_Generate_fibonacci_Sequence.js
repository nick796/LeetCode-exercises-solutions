/**
 * Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    yield 0
    yield 1
    yield 1
    let sum=1
    let x1=1
    let x2=1

    while(true){
        sum = x1 + x2
        yield sum
        x1 = x2
        x2 = sum
        
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */