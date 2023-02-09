$(document).ready(function() {
  $("#calculate").click(function() {
    let start = $("#start-time").val();
    let end = $("#end-time").val();
    let breakDuration = $("#break-duration").val();

    let startTime = new Date("01/01/1970 " + start);
    let endTime = new Date("01/01/1970 " + end);
    let breakTime = breakDuration.split(":");
    let breakHours = parseInt(breakTime[0]);
    let breakMinutes = parseInt(breakTime[1]);
