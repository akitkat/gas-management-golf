import doGet from './func/doGet';
import fetchAllGolfCourse from './func/fetchAllGolfCourse';
import onOpen from './func/onOpen';

global.doGet = (e) => doGet(e);
global.fetchAllGolfCourse = () => fetchAllGolfCourse();
global.onOpen = (e) => onOpen(e);
