import BaseApi from "../baseApi";
import CourseBasic from "../../../models/course_basic";

export default class extends BaseApi {
  propertyName = 'gora'
  urlPath = "GoraGolfCourseSearch/20170623";

  fetchAll() {
    this.config.parameters.areaCode = 0;
    this.config.parameters.reservation = 1;
    this.config.parameters.page = 1;
    const tmp = this.fetch();

    let rows = [];
    while (this.config.parameters.page <= tmp.pageCount) {
      const res = this.fetch();
      rows = rows.concat(res.Items);
      this.config.parameters.page++;
    }

    return rows.map((e) => {
      return new CourseBasic(
        e?.golfCourseId,
        e?.golfCourseName,
        e?.golfCourseAbbr,
        e?.golfCourseNameKana,
        e?.golfCourseCaption,
        e?.address,
        e?.latitude,
        e?.longitude,
        e?.highway,
        e?.golfCourseDetailUrl,
        e?.reserveCalUrl,
        e?.ratingUrl,
        e?.golfCourseImageUrl,
        e?.evaluation
      );
    });
  }
}
