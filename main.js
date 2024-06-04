function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
  
  // The Counter function takes two parameters: element and value. element is expected to be a reference to the DOM element that contains the counter UI elements, and value is the initial value of the counter.
  
  // Inside the constructor function:
  
  // this.counter = element: Stores a reference to the main container element.
  // this.value = value: Stores the initial value of the counter.
  // this.resetBtn, this.increaseBtn, this.decreaseBtn, this.valueDOM: Store references to specific DOM elements within the container element.
  // this.valueDOM.textContent = this.value: Sets the initial value of the counter element in the DOM.
  // this.increase, this.decrease, this.reset: Binds this to the respective methods to ensure they have the correct context when invoked.
  // Event listeners are added to the increase, decrease, and reset buttons to trigger their respective methods (this.increase, this.decrease, this.reset) when clicked.
  
  function Counter(element, value) {
    
    this.counter = element;
    this.value = value;
    
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    
    this.valueDOM.textContent = this.value;
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);
  
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  
  // Counter.prototype.increase: This line is adding a method named increase to the prototype of the Counter constructor function.
  // function() {...}: This is an anonymous function that serves as the implementation of the increase method.
  // this.value++: This line increments the value property of the object instance (this) by 1.
  // this.valueDOM.textContent = this.value;: This line updates the textContent property of the valueDOM element with the new value of this.value.
  
  Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
  };
  
  // Counter.prototype.decrease: This line adds a method named decrease to the prototype of the Counter constructor function.
  // function() {...}: This is an anonymous function that serves as the implementation of the decrease method.
  // this.value--: This line decrements the value property of the object instance (this) by 1.
  // this.valueDOM.textContent = this.value;: This line updates the textContent property of the valueDOM element with the new value of this.value.
  
  
  Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
  };
  
  // Counter.prototype.reset: This line adds a method named reset to the prototype of the Counter constructor function.
  // function() {...}: This is an anonymous function that serves as the implementation of the reset method.
  // this.value = 0;: This line sets the value property of the object instance (this) to zero.
  // this.valueDOM.textContent = this.value;: This line updates the textContent property of the valueDOM element with the new value of this.value, which is now zero.
  
  Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  };
  
  const firstCounter = new Counter(getElement('.first-counter'), 100);
  const secondCounter = new Counter(getElement('.second-counter'), 300);