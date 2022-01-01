export class BMEKind {
    static PRESSURE = new BMEKind("pressure", "field2");
    static TEMPERATURE = new BMEKind("temperature", "field1");
    static HUMIDITY = new BMEKind("humidity", "field3");
    constructor(name, apiKey) {
      this.name = name;
      this.apiKey = apiKey;
    }
  }