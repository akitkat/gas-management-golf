import GolfCourseList from "../infrastructure/spreadsheet/golfCourseList";

export default (e) => {
  const data = new GolfCourseList().fetchAll();
  return ContentService.createTextOutput(
    JSON.stringify(data, null, 2)
  ).setMimeType(ContentService.MimeType.JSON);
};
