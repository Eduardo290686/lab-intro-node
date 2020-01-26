class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, element) =>
      accumulator + element);
  }

  avg() {
    return (this.items.reduce((accumulator, element) =>
      accumulator + element)) / this.items.length;
  }
}

module.exports = SortedList;
