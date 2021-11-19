class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    })
  }

  get(pos) {
    for (let i = 0; i < this.items.length; i ++){
      if (i === pos){
        return this.items[i];
      } else if ( this.items[pos] == undefined){
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    let max = 0;
    for (let i = 0; i < this.items.length; i++){
      if ( this.items[i] > max){
        max = this.items[i]
      }
      else if ( this.items[i] === 0 ){
        throw new Error('EmptySortedList');}
    }

      return max;
  }

  min() {
    let min;
    for (let i = 0; i < this.items.length; i++){
      min = this.items[i];
      if (this.items[i] < this.items[i+1]){
        return min;
      }
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++){
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    let avg = 0;
    let sum = 0;
    sum = this.items.reduce(function( a, b){ return a + b});
    avg = sum / this.items.length;
    return avg;
  }
}

module.exports = SortedList;
