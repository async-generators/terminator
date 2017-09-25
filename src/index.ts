export default function <T>(source: Iterable<T>): Iterable<T>;
export default function <T>(source: AsyncIterable<T>): AsyncIterable<T>;
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>):
  AsyncIterable<T> | Iterable<T> {

  if (source[Symbol.asyncIterator]) {
    return {
      [Symbol.asyncIterator]() {
        const it = source[Symbol.asyncIterator]();
        it.return = function (value) {
          return it.next(Symbol.for("terminated"));
        }
        return it;
      }
    }
  } else if (source[Symbol.iterator]) {
    return {
      [Symbol.iterator]() {
        const it = source[Symbol.iterator]();
        it.return = function (value) {
          return it.next(Symbol.for("terminated"));
        }
        return it;
      }
    }
  }

  throw Error("source is not iterable!");
}