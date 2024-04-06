import config from '../../config/config';
import { stringify } from 'query-string';

export default class BaseApi {
  config = {};

  constructor() {
    this.config = config['api'][this.propertyName];
  }

  fetch() {
    const url = `${this.config.baseUrl + this.urlPath}?${stringify(this.config.parameters)}`;
    const res = UrlFetchApp.fetch(url).getContentText();
    Utilities.sleep(1000);
    console.log('fetch: ', url, res);
    return JSON.parse(res);
  }
}
