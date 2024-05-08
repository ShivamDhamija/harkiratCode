/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.index = {};
    this.val = {};
    this.currenInd = 0;
  } 
  add(todo){
    this.index[this.currenInd]=todo;
    this.val[todo]=this.currenInd;
    this.currenInd += 1;
  }
  remove(indexOfTodo){
    let valOfIndex=this.index[indexOfTodo];
    delete this.val[valOfIndex];
    this.currenInd -= 1;
    indexOfTodo += 1;
    while(indexOfTodo in this.index)
    {
      this.index[indexOfTodo-1]=this.index[indexOfTodo];
      this.val[this.index[indexOfTodo]]=indexOfTodo-1;
      indexOfTodo+=1;
    }
    indexOfTodo --;
    
    delete this.index[indexOfTodo];  
  }
  update(indexVal, updatedTodo){
    if(indexVal>=this.currenInd)return;
    let tVal=this.index[indexVal];
    this.index[indexVal]=updatedTodo;
    delete this.val[tVal];
    this.val[updatedTodo]=indexVal;
    console.log(this.getAll())
  }
  getAll(){
    let ans=[];
    for (let key in this.index) {
      ans.push(this.index[key]);
    }
    return ans;
  }
  get(indexOfTodo){
    if(indexOfTodo>=this.currenInd)return null;
    return this.index[indexOfTodo];
  }
  clear(){
    this.index = {};
    this.val = {};
    this.currenInd = 0;
  }
}

module.exports = Todo;
