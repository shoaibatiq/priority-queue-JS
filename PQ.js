class node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
class PQ {
    constructor() {
      this.values = [];
    }
    enqueue(value,priority) {
      let newNode = new node(value, priority);
      this.values.push(newNode);
      this.bubbleUp(this.values);
    }
  
    bubbleUp(values) {
      let temp;
      let last = values.length - 1;
      let last_p = Math.floor((last - 1) / 2);
      if(last_p<0) {return values;}
      while (values[last].priority < values[last_p].priority && last_p >= 0) {
        //[values[last], values[last_p]] = [values[last_p], values[last]]
        temp = values[last];
        values[last] = values[last_p];
        values[last_p] = temp;
        last = last_p;
        last_p = Math.floor((last - 1) / 2);
        if(values[last_p] === undefined) break;

      }
      return values;
    }
  
    dequeue(){
        if (this.values.length == 0) {return undefined;}
        let last = this.values.length - 1;
        [this.values[last], this.values[0]] = [this.values[0], this.values[last]]
        let max = this.values.pop();
        let i=0;
        let swap_ind;
        while(i*2+1 <= this.values.length - 1){
            if(this.values[i].priority > this.values[i*2+1].priority || this.values[i].priority > this.values[i*2+2].priority){
                if(this.values[i*2+2] !== undefined)
                  swap_ind = this.values[i*2+1].priority < this.values[i*2+2].priority ? i*2+1 : i*2+2;
                else
                  swap_ind= i*2+1;
                [this.values[i], this.values[swap_ind]] = [this.values[swap_ind], this.values[i]]
                i = swap_ind;
            }
            else break;
        }
        return max.value;
    }
  }

let pq = new PQ;
pq.enqueue(10,2);
pq.enqueue(21,1);
pq.enqueue(1,5);
pq.enqueue(55,3);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
pq.enqueue(78,5);
console.log(pq.dequeue());



