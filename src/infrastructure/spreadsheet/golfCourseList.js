import BaseSpreadSheet from './baseSpreadSheet';
import CourseBasic from '../../models/course_basic'

export default class extends BaseSpreadSheet {
  constructor() {
    super('golfCourseList');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => {
        return new CourseBasic(...e);
      });
  }
}
