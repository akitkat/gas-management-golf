import CourseDetailApi from "../infrastructure/api/rakuten/course_detail";
import CourseDetailSheet from "../infrastructure/spreadsheet/course_detail_sheet";

export default () => {
  let i = 0;

  const courseDetails = new CourseDetailSheet().fetchAll();
  const replaceCourseDetails = courseDetails.map((courseDetail) => {
    if (courseDetail.golfCourseName !== "" ) {
      return courseDetail;
    }

    if (10 <= i) {
      return courseDetail;
    }

    i++;
    return new CourseDetailApi().fetch(courseDetail.golfCourseId);
  });

  new CourseDetailSheet().replaceAll(replaceCourseDetails);
};
