import config from '../../config/config';
import { stringify } from 'query-string';

export default class BaseApi {
  config = {};

  constructor(propertyName) {
    this.config = config['api'][propertyName];
  }

  fetch() {
    const url = `${this.config.baseUrl + this.urlPath}?${stringify(this.config.parameters)}`;
    console.log("🚀 ~ file: baseApi.js ~ line 13 ~ BaseApi ~ fetch ~ url", url)
    const res = UrlFetchApp.fetch(url).getContentText();
    Utilities.sleep(1000);
    return JSON.parse(res);
  }
}
