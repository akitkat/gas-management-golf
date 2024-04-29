import BaseSpreadSheet from './baseSpreadSheet';
import ExportCourseDetail from '../../models/export_course_detail';

export default class ExportCourseDetailSheet extends BaseSpreadSheet {
  constructor() {
    super('ExportCourseDetailSheet');
  }

  fetchAll() {
    return super
      .selectAll()
      .map((e) => new ExportCourseDetail(...e));
  }
}
