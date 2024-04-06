import BaseSpreadSheet from './baseSpreadSheet';
import JalanCourseDetail from '../../models/jalan_course_detail';

export default class CourseDetailSheet extends BaseSpreadSheet {
  constructor() {
    super('JalanCourseDetailSheet');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => new JalanCourseDetail(...e));
  }
}
