import config from '../../config/config';
import { stringify } from 'query-string';

export default class BaseApi {
  config = {};

  constructor(propertyName) {
    this.config = config['api'][propertyName];
  }

  fetch() {
    const url = `${this.config.baseUrl + this.urlPath}?${stringify(this.config.parameters)}`;
    try {
      const res = UrlFetchApp.fetch(url).getContentText();
      console.log('fetch: ', url, res);
      return JSON.parse(res);
    } catch (e) {
      console.error('fetch error: ', url, e);
      return [];
    } finally {
      Utilities.sleep(1000);
    }
  }
}
