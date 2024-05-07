export default class ExportCourseDetail {
  constructor(
    golfCourseId,
    golfCourseName,
    golfCourseCaption,
    information,
    highway,
    ic,
    address,
    creditCard,
    shoes,
    dressCode,
    golfCourseImageUrl1,
    weekdayMinPrice,
    baseWeekdayMinPrice,
    holidayMinPrice,
    baseHolidayMinPrice,
    courseType,
    dimension,
    green,
    greenCount,
    holeCount,
    parCount,
    evaluation,
    staff,
    facility,
    meal,
    course,
    costperformance,
    rating1Title,
    rating1NickName,
    rating1Age,
    rating1Sex,
    rating1Evaluation,
    rating1Comment,
    rating2Title,
    rating2NickName,
    rating2Age,
    rating2Sex,
    rating2Evaluation,
    rating2Comment,
    clubCd,
    accessTrain,
    cartNote,
    hotSpring,
    hotSpringNote,
    hotel,
    restaurantNote
  ) {
    this.golfCourseId = golfCourseId;
    this.golfCourseName = golfCourseName;
    this.golfCourseCaption = golfCourseCaption;
    this.information = information;
    this.highway = highway;
    this.ic = ic;
    this.address = address;
    this.creditCard = creditCard;
    this.shoes = shoes;
    this.dressCode = dressCode;
    this.golfCourseImageUrl1 = golfCourseImageUrl1;
    this.weekdayMinPrice = weekdayMinPrice;
    this.baseWeekdayMinPrice = baseWeekdayMinPrice;
    this.holidayMinPrice = holidayMinPrice;
    this.baseHolidayMinPrice = baseHolidayMinPrice;
    this.courseType = courseType;
    this.dimension = dimension;
    this.green = green;
    this.greenCount = greenCount;
    this.holeCount = holeCount;
    this.parCount = parCount;
    this.evaluation = evaluation;
    this.staff = staff;
    this.facility = facility;
    this.meal = meal;
    this.course = course;
    this.costperformance = costperformance;
    this.rating1Title = rating1Title;
    this.rating1NickName = rating1NickName;
    this.rating1Age = rating1Age;
    this.rating1Sex = rating1Sex;
    this.rating1Evaluation = rating1Evaluation;
    this.rating1Comment = rating1Comment;
    this.rating2Title = rating2Title;
    this.rating2NickName = rating2NickName;
    this.rating2Age = rating2Age;
    this.rating2Sex = rating2Sex;
    this.rating2Evaluation = rating2Evaluation;
    this.rating2Comment = rating2Comment;
    this.clubCd = clubCd;
    this.accessTrain = accessTrain;
    this.cartNote = cartNote;
    this.hotSpring = hotSpring;
    this.hotSpringNote = hotSpringNote;
    this.hotel = hotel;
    this.restaurantNote = restaurantNote;
  }

  toArray() {
    return [
      this.golfCourseId,
      this.golfCourseName,
      this.golfCourseCaption,
      this.information,
      this.highway,
      this.ic,
      this.address,
      this.creditCard,
      this.shoes,
      this.dressCode,
      this.golfCourseImageUrl1,
      this.weekdayMinPrice,
      this.baseWeekdayMinPrice,
      this.holidayMinPrice,
      this.baseHolidayMinPrice,
      this.courseType,
      this.dimension,
      this.green,
      this.greenCount,
      this.holeCount,
      this.parCount,
      this.evaluation,
      this.staff,
      this.facility,
      this.meal,
      this.course,
      this.costperformance,
      this.rating1Title,
      this.rating1NickName,
      this.rating1Age,
      this.rating1Sex,
      this.rating1Evaluation,
      this.rating1Comment,
      this.rating2Title,
      this.rating2NickName,
      this.rating2Age,
      this.rating2Sex,
      this.rating2Evaluation,
      this.rating2Comment,
      this.clubCd,
      this.accessTrain,
      this.cartNote,
      this.hotSpring,
      this.hotSpringNote,
      this.hotel,
      this.restaurantNote,
    ];
  }
}
