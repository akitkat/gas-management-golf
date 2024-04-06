import BaseApi from "./baseApi";
import JalanCourseDetail from "../../models/jalan_course_detail";

export default class JalanCourseDetailApi extends BaseApi {
  constructor() {
    super('jalan');
  }

  fetch(clubCd) {
    this.urlPath = clubCd;
    const res = super.fetch();
    if (res.length === 0) {
      return null;
    }

    const row = res[0]['clubDto'];

    return new JalanCourseDetail(
      row?.clubCd,
      row?.acareUsable,
      row?.accessBus,
      row?.accessCar,
      row?.accessTrain,
      row?.address,
      row?.approvalContent,
      row?.approvalDate,
      row?.approvalFlg,
      row?.bankAccountFlg,
      row?.cancelFeeDayHoliday,
      row?.cancelFeeDayUsual,
      row?.cancelFeeFlg,
      row?.cancelNote,
      row?.card,
      row?.cardNote,
      row?.cartNote,
      row?.catchCopy,
      row?.chargeName,
      row?.chargeSCd,
      row?.chgDedlineDayReal,
      row?.chgDedlineDayReq,
      row?.chgDedlineHmReal,
      row?.chgDedlineHmReq,
      row?.clubRegistDatetime,
      row?.clubUpdateDatetime,
      row?.cnlDedlineDayReal,
      row?.cnlDedlineDayReq,
      row?.cnlDedlineHmReal,
      row?.cnlDedlineHmReq,
      row?.compeRoom,
      row?.compeRoomNote,
      row?.contractFlg,
      row?.coreSystemId,
      row?.couponClubUsable,
      row?.couponRUsable,
      row?.courseCount,
      row?.courseDesigner,
      row?.coursePresentation,
      row?.courseSize,
      row?.courseType,
      row?.createModuleCd,
      row?.createUserCd,
      row?.createdAt,
      row?.deleted,
      row?.delivery,
      row?.distanceUnit,
      row?.drconHole,
      row?.dress,
      row?.faxNo,
      row?.gdoFrameFlg,
      row?.gdoPlanFlg,
      row?.greenBent,
      row?.greenCount,
      row?.greenKorai,
      row?.greenOther,
      row?.holeCountAll,
      row?.hotSpring,
    );
  }
}
