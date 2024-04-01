import BaseSpreadSheet from './baseSpreadSheet';
import CourseDetail from '../../models/rakuten/course_detail';

export default class CourseDetailSheet extends BaseSpreadSheet {
  constructor() {
    super('CourseDetailSheet');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => new CourseDetail(...e));
  }
}
