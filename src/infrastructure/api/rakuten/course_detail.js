import BaseApi from "../baseApi";
import CourseDetail from "../../../models/course_detail";

export default class CourseDetailApi extends BaseApi {
  urlPath = "GoraGolfCourseDetail/20170623";

  constructor() {
    super("gora");
  }

  fetch(golfCourseId) {
    this.config.parameters.golfCourseId = golfCourseId;
    const res = super.fetch()["Item"];

    return new CourseDetail(
      res?.golfCourseId,
      res?.golfCourseName,
      res?.golfCourseAbbr,
      res?.golfCourseNameKana,
      res?.golfCourseCaption,
      res?.information,
      res?.highway,
      res?.ic,
      res?.icDistance,
      res?.latitude,
      res?.longitude,
      res?.postalCode,
      res?.address,
      res?.telephoneNo,
      res?.faxNo,
      res?.openDay,
      res?.closeDay,
      res?.creditCard,
      res?.shoes,
      res?.dressCode,
      res?.practiceFacility,
      res?.lodgingFacility,
      res?.otherFacility,
      res?.golfCourseImageUrl1,
      res?.golfCourseImageUrl2,
      res?.golfCourseImageUrl3,
      res?.golfCourseImageUrl4,
      res?.golfCourseImageUrl5,
      res?.weekdayMinPrice,
      res?.baseWeekdayMinPrice,
      res?.holidayMinPrice,
      res?.baseHolidayMinPrice,
      res?.designer,
      res?.courseType,
      res?.courseVerticalInterval,
      res?.dimension,
      res?.green,
      res?.greenCount,
      res?.holeCount,
      res?.parCount,
      res?.courseName,
      res?.courseDistance,
      res?.longDrivingContest,
      res?.nearPin,
      res?.ratingNum,
      res?.evaluation,
      res?.staff,
      res?.facility,
      res?.meal,
      res?.course,
      res?.costperformance,
      res?.distance,
      res?.fairway,
      res?.reserveCalUrl,
      res?.voiceUrl,
      res?.layoutUrl,
      res?.routeMapUrl,
      // res?.month,
      // res?.planName,
      // res?.planDate,
      // res?.service,
      // res?.price,
      // res?.basePrice,
      // res?.salesTax,
      // res?.courseUseTax,
      // res?.otherTax,

      res?.ratings[0]?.title,
      res?.ratings[0]?.nickName,
      res?.ratings[0]?.age,
      res?.ratings[0]?.sex,
      res?.ratings[0]?.evaluation,
      res?.ratings[0]?.comment,
      res?.ratings[1]?.title,
      res?.ratings[1]?.nickName,
      res?.ratings[1]?.age,
      res?.ratings[1]?.sex,
      res?.ratings[1]?.evaluation,
      res?.ratings[1]?.comment
    );
  }
}
