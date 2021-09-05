import BaseApi from "../baseApi";
import courseBasic from "../../../models/rakuten/courseBasic";

export default class extends BaseApi {
  urlPath = "GoraGolfCourseSearch/20170623";

  constructor() {
    super("gora");
  }

  fetchAll() {
    this.config.parameters.areaCode = 0;
    this.config.parameters.page = 1;
    const tmp = this.fetch();

    let rows = [];
    while (this.config.parameters.page <= tmp.pageCount) {
      const res = this.fetch();
      rows = rows.concat(res.Items);
      this.config.parameters.page++;
    }

    return rows.map((e) => {
      return new courseBasic(
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
        e?.golfCourseImageUrl
      );
    });
  }
}
