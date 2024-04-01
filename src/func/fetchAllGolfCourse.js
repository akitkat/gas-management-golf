import ApiCourseSearch from "../infrastructure/api/rakuten/courseSearch";
import GolfCourseList from "../infrastructure/spreadsheet/golfCourseList";

export default () => {
  const res = new ApiCourseSearch().fetchAll();
  new GolfCourseList().replaceAll(res);
};
