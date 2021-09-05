export default () => {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("ゴルフ場更新", "fetchAllGolfCourse")
    .addToUi();
};
