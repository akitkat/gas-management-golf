import ExportCourseDetailSheet from "../infrastructure/spreadsheet/export_course_detail_sheet";

export default (e) => {
  const data = new ExportCourseDetailSheet().fetchAll();
  return ContentService.createTextOutput(
    JSON.stringify(data, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
};
