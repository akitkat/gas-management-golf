export default class {
  constructor(
    golfCourseId,
    golfCourseName,
    golfCourseAbbr,
    golfCourseNameKana,
    golfCourseCaption,
    address,
    latitude,
    longitude,
    highway,
    golfCourseDetailUrl,
    reserveCalUrl,
    ratingUrl,
    golfCourseImageUrl
  ) {
    this.golfCourseId = golfCourseId;
    this.golfCourseName = golfCourseName;
    this.golfCourseAbbr = golfCourseAbbr;
    this.golfCourseNameKana = golfCourseNameKana;
    this.golfCourseCaption = golfCourseCaption;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.highway = highway;
    this.golfCourseDetailUrl = golfCourseDetailUrl;
    this.reserveCalUrl = reserveCalUrl;
    this.ratingUrl = ratingUrl;
    this.golfCourseImageUrl = golfCourseImageUrl;
  }

  toArray() {
    return [
      this.golfCourseId,
      this.golfCourseName,
      this.golfCourseAbbr,
      this.golfCourseNameKana,
      this.golfCourseCaption,
      this.address,
      this.latitude,
      this.longitude,
      this.highway,
      this.golfCourseDetailUrl,
      this.reserveCalUrl,
      this.ratingUrl,
      this.golfCourseImageUrl,
    ];
  }
}
