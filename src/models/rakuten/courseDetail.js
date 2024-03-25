export default class {
  constructor(
    golfCourseId,
    golfCourseName,
    golfCourseAbbr,
    golfCourseNameKana,
    golfCourseCaption,
    information,
    highway,
    ic,
    icDistance,
    latitude,
    longitude,
    postalCode,
    address,
    telephoneNo,
    faxNo,
    openDay,
    closeDay,
    creditCard,
    shoes,
    dressCode,
    practiceFacility,
    lodgingFacility,
    otherFacility,
    golfCourseImageUrl1,
    golfCourseImageUrl2,
    golfCourseImageUrl3,
    golfCourseImageUrl4,
    golfCourseImageUrl5,
    weekdayMinPrice,
    baseWeekdayMinPrice,
    holidayMinPrice,
    baseHolidayMinPrice,
    designer,
    courseType,
    courseVerticalInterval,
    dimension,
    green,
    greenCount,
    holeCount,
    parCount,
    courseName,
    courseDistance,
    longDrivingContest,
    nearPin,
    ratingNum,
    evaluation,
    staff,
    facility,
    meal,
    course,
    costperformance,
    distance,
    fairway,
    reserveCalUrl,
    voiceUrl,
    layoutUrl,
    routeMapUrl,
    month,
    planName,
    planDate,
    service,
    price,
    basePrice,
    salesTax,
    courseUseTax,
    otherTax,
    title,
    nickName,
    prefecture,
    age,
    sex,
    times,
    evaluation,
    staff,
    facility,
    meal,
    course,
    costperformance,
    distance,
    fairway,
    comment
  ) {
    this.golfCourseId = golfCourseId;
    this.golfCourseName = golfCourseName;
    this.golfCourseAbbr = golfCourseAbbr;
    this.golfCourseNameKana = golfCourseNameKana;
    this.golfCourseCaption = golfCourseCaption;
    this.information = information;
    this.highway = highway;
    this.ic = ic;
    this.icDistance = icDistance;
    this.latitude = latitude;
    this.longitude = longitude;
    this.postalCode = postalCode;
    this.address = address;
    this.telephoneNo = telephoneNo;
    this.faxNo = faxNo;
    this.openDay = openDay;
    this.closeDay = closeDay;
    this.creditCard = creditCard;
    this.shoes = shoes;
    this.dressCode = dressCode;
    this.practiceFacility = practiceFacility;
    this.lodgingFacility = lodgingFacility;
    this.otherFacility = otherFacility;
    this.golfCourseImageUrl1 = golfCourseImageUrl1;
    this.golfCourseImageUrl2 = golfCourseImageUrl2;
    this.golfCourseImageUrl3 = golfCourseImageUrl3;
    this.golfCourseImageUrl4 = golfCourseImageUrl4;
    this.golfCourseImageUrl5 = golfCourseImageUrl5;
    this.weekdayMinPrice = weekdayMinPrice;
    this.baseWeekdayMinPrice = baseWeekdayMinPrice;
    this.holidayMinPrice = holidayMinPrice;
    this.baseHolidayMinPrice = baseHolidayMinPrice;
    this.designer = designer;
    this.courseType = courseType;
    this.courseVerticalInterval = courseVerticalInterval;
    this.dimension = dimension;
    this.green = green;
    this.greenCount = greenCount;
    this.holeCount = holeCount;
    this.parCount = parCount;
    this.courseName = courseName;
    this.courseDistance = courseDistance;
    this.longDrivingContest = longDrivingContest;
    this.nearPin = nearPin;
    this.ratingNum = ratingNum;
    this.evaluation = evaluation;
    this.staff = staff;
    this.facility = facility;
    this.meal = meal;
    this.course = course;
    this.costperformance = costperformance;
    this.distance = distance;
    this.fairway = fairway;
    this.reserveCalUrl = reserveCalUrl;
    this.voiceUrl = voiceUrl;
    this.layoutUrl = layoutUrl;
    this.routeMapUrl = routeMapUrl;
    this.month = month;
    this.planName = planName;
    this.planDate = planDate;
    this.service = service;
    this.price = price;
    this.basePrice = basePrice;
    this.salesTax = salesTax;
    this.courseUseTax = courseUseTax;
    this.otherTax = otherTax;
    this.title = title;
    this.nickName = nickName;
    this.prefecture = prefecture;
    this.age = age;
    this.sex = sex;
    this.times = times;
    this.evaluation = evaluation;
    this.staff = staff;
    this.facility = facility;
    this.meal = meal;
    this.course = course;
    this.costperformance = costperformance;
    this.distance = distance;
    this.fairway = fairway;
    this.comment = comment;
  }

  toArray() {
    return [
      this.golfCourseId,
      this.golfCourseName,
      this.golfCourseAbbr,
      this.golfCourseNameKana,
      this.golfCourseCaption,
      this.information,
      this.highway,
      this.ic,
      this.icDistance,
      this.latitude,
      this.longitude,
      this.postalCode,
      this.address,
      this.telephoneNo,
      this.faxNo,
      this.openDay,
      this.closeDay,
      this.creditCard,
      this.shoes,
      this.dressCode,
      this.practiceFacility,
      this.lodgingFacility,
      this.otherFacility,
      this.golfCourseImageUrl1,
      this.golfCourseImageUrl2,
      this.golfCourseImageUrl3,
      this.golfCourseImageUrl4,
      this.golfCourseImageUrl5,
      this.weekdayMinPrice,
      this.baseWeekdayMinPrice,
      this.holidayMinPrice,
      this.baseHolidayMinPrice,
      this.designer,
      this.courseType,
      this.courseVerticalInterval,
      this.dimension,
      this.green,
      this.greenCount,
      this.holeCount,
      this.parCount,
      this.courseName,
      this.courseDistance,
      this.longDrivingContest,
      this.nearPin,
      this.ratingNum,
      this.evaluation,
      this.staff,
      this.facility,
      this.meal,
      this.course,
      this.costperformance,
      this.distance,
      this.fairway,
      this.reserveCalUrl,
      this.voiceUrl,
      this.layoutUrl,
      this.routeMapUrl,
      this.month,
      this.planName,
      this.planDate,
      this.service,
      this.price,
      this.basePrice,
      this.salesTax,
      this.courseUseTax,
      this.otherTax,
      this.title,
      this.nickName,
      this.prefecture,
      this.age,
      this.sex,
      this.times,
      this.evaluation,
      this.staff,
      this.facility,
      this.meal,
      this.course,
      this.costperformance,
      this.distance,
      this.fairway,
      this.comment
    ];
  }
}
