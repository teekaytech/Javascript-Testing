class Analysis {
  analyze(arr) {
    this.dataObj = {
      average: arr.reduce((a, b) => a + b) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    };
    return this.dataObj;
  }
}

export default Analysis;