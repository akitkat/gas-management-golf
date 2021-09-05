import BaseSpreadSheet from './baseSpreadSheet';
import GolfCourseList from '../../models/spreadsheet/golfCourseList'

export default class extends BaseSpreadSheet {
  constructor() {
    super('golfCourseList');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => {
        return new GolfCourseList(...e);
      });
  }
}
