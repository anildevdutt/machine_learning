class Perceptron {

  errorMsg(message) {
    console.log('Error: ' + message);
  }

  sign(output) {
    if(output >= 0) {
      return 1;
    } else {
      return 0;
    }
  }

  constructor(num_inputs = 2, learning_rate = 0.1) {
    this.weights = [];
    this.learning_rate = learning_rate;
    for(let i = 0; i < num_inputs; i++) {
      this.weights.push(Math.random() * 2 - 1);
    }
    this.bias = Math.random() * 2 - 1;
  }

  describe() {
    console.log('weights:');
    console.log(this.weights);
    console.log('bias:');
    console.log(this.bias);
  }

  process(inputs) {
    if(inputs.length != this.weights.length) {
      this.errorMsg('Number of inputs and weight mismatch');
      return;
    }
    let output = this.bias;
    for(let i = 0; i < inputs.length; i++) {
      output += this.weights[i] * inputs[i];
    }
    return this.sign(output);
  }

  train(inputs, target) {
    let output = this.process(inputs);
    let error = target - output;
    for(let i = 0; i < this.weights.length; i++) {
      this.weights[i] += inputs[i] * error * this.learning_rate;
    }
    this.bias += error * this.learning_rate;
  }

  batchTrain(inputs, targets, cycles = 10) {
    if(inputs.length != targets.length) {
      this.errorMsg('Number of inputs and targets mismatch');
      return;
    }

    for(let i = 0; i < cycles; i++) {
      for(let j = 0; j < inputs.length; j++) {
        let input = inputs[j];
        let target = targets[j];
        this.train(input, target);
      }
    }
  }
}
