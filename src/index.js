import doGet from './func/doGet';
import fetchAllGolfCourse from './func/fetchAllGolfCourse';
import fetchAllCourseDetail from './func/fetch_all_course_detail';
import onOpen from './func/onOpen';

global.doGet = (e) => doGet(e);
global.fetchAllGolfCourse = () => fetchAllGolfCourse();
global.fetchAllCourseDetail = () => fetchAllCourseDetail();
global.onOpen = (e) => onOpen(e);
