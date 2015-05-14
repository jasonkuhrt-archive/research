let log = console.log

function ADD (a: number, b: number): number {
  return a + b
}

function curry2<A,B,C> (f: (x:A, y:B) => C): (x:A) => (y:B) => C {
  return (x) => (y) => f(x,y)
}

let add = curry2(ADD)

log(`add(1)(2) = ${add(1)(2)}`)
log(`add(1, 2) = ${add(1, 2)}`)
log(`add(1)('2') = ${add(1)('2')}`)
log(`add(1, '2') = ${add(1, '2')}`)

/*
function curry22 (f) {
  function iteration (argsOld) {
    function argsCollector (...argsNew) {
      let argsNow = argsOld.concat(argsNew)
      if (argsNow.length >= 2) return f(...argsNow)
      return iteration(argsNow)
    }
    return argsCollector
  }
  return iteration([])
}

let add = curry22(ADD)

log(`add(1)(2) = ${add(1)(2)}`)
log(`add(1, 2) = ${add(1, 2)}`)
//log(`add(1)('2') = ${add(1)(2)}`)
//log(`add(1, '2') = ${add(1, 2)}`)
*/
