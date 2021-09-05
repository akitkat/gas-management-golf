import fetchAllGolfCourse from './func/fetchAllGolfCourse';
import onOpen from './func/onOpen';

global.fetchAllGolfCourse = () => fetchAllGolfCourse();
global.onOpen = (e) => onOpen(e);
