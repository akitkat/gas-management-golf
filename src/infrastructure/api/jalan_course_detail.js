import BaseApi from "./baseApi";
import JalanCourseDetail from "../../models/jalan_course_detail";

export default class JalanCourseDetailApi extends BaseApi {
  constructor() {
    super('jalan');
  }

  fetch(clubCd) {
    this.urlPath = clubCd;
    const res = super.fetch()['clubDto'][0];

    return new JalanCourseDetail(
      res?.clubCd,
      res?.acareUsable,
      res?.accessBus,
      res?.accessCar,
      res?.accessTrain,
      res?.address,
      res?.approvalContent,
      res?.approvalDate,
      res?.approvalFlg,
      res?.bankAccountFlg,
      res?.cancelFeeDayHoliday,
      res?.cancelFeeDayUsual,
      res?.cancelFeeFlg,
      res?.cancelNote,
      res?.card,
      res?.cardNote,
      res?.cartNote,
      res?.catchCopy,
      res?.chargeName,
      res?.chargeSCd,
      res?.chgDedlineDayReal,
      res?.chgDedlineDayReq,
      res?.chgDedlineHmReal,
      res?.chgDedlineHmReq,
      res?.clubRegistDatetime,
      res?.clubUpdateDatetime,
      res?.cnlDedlineDayReal,
      res?.cnlDedlineDayReq,
      res?.cnlDedlineHmReal,
      res?.cnlDedlineHmReq,
      res?.compeRoom,
      res?.compeRoomNote,
      res?.contractFlg,
      res?.coreSystemId,
      res?.couponClubUsable,
      res?.couponRUsable,
      res?.courseCount,
      res?.courseDesigner,
      res?.coursePresentation,
      res?.courseSize,
      res?.courseType,
      res?.createModuleCd,
      res?.createUserCd,
      res?.createdAt,
      res?.deleted,
      res?.delivery,
      res?.distanceUnit,
      res?.drconHole,
      res?.dress,
      res?.faxNo,
      res?.gdoFrameFlg,
      res?.gdoPlanFlg,
      res?.greenBent,
      res?.greenCount,
      res?.greenKorai,
      res?.greenOther,
      res?.holeCountAll,
      res?.hotSpring,
    );
  }
}
