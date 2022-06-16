export default class RawgApiWrapper {
  url: string;
  apiKey: string;

  constructor(apiKey: string) {
    this.url = "https://api.rawg.io/api/";
    this.apiKey = apiKey;
  }

  appendKey(string: string) {
    return `${string}${this.apiKey}`;
  }
}
