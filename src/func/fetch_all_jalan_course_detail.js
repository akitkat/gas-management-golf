import JalanCourseDetailApi from "../infrastructure/api/jalan_course_detail";
import JalanCourseDetailSheet from "../infrastructure/spreadsheet/jalan_course_detail_sheet";

export default () => {
  let i = 0;

  const courseDetails = new JalanCourseDetailSheet().fetchAll();
  const replaceCourseDetails = courseDetails.map((courseDetail) => {
    if (courseDetail.name !== "" ) {
      return courseDetail;
    }

    if (50 <= i) {
      return courseDetail;
    }

    i++;
    const res = new JalanCourseDetailApi().fetch(courseDetail.clubCd);
    if (res === null) {
      courseDetail.name = 'null';
      return courseDetail;
    }

    return res;
  });

  new JalanCourseDetailSheet().replaceAll(replaceCourseDetails);
};
