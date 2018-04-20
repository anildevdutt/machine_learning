class NeuralNetwork {

  getRandom() {
    return Math.random();
  }

  constructor(inputs = 1, layers = 1, layersSetup = [1]) {
    this.layers = [];
    for(let i = 0; i < layers; i++) {
      let ip;
      let layer = {
        weights: [],
        biases: []
      };
      if(i == 0) {
        ip = inputs;
      } else {
        ip = this.layers[i-1].biases.length;
      }
      for(let k = 0; k < layersSetup[i]; k++) {
        let weight = [];
        for(let j = 0; j < ip; j++) {
          weight.push(this.getRandom());
        }
        layer.weights.push(weight);
        layer.biases.push([this.getRandom()]);
      }
      this.layers.push(layer);
    }
  }

  feedForword(inputs) {
    let output = inputs;
    for(let i = 0; i < this.layers.length; i++) {
      output = matActivation(matAdd(matMul(this.layers[i].weights, output), this.layers[i].biases));
      console.table(output);
    }
    return output;
  }

}
