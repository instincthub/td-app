var data = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri"],
  series: [
    [
      { x: 10, y: 10 },
      { x: undefined, y: 30 },
      { x: undefined, y: 1 },
      { x: undefined, y: 13 },
      { x: undefined, y: 7 },
    ],
  ],
};

var responsiveOptions = [
  [
    "screen and (min-width: 641px) and (max-width: 1024px)",
    {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        },
      },
    },
  ],
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      },
    },
  ],
];
var options = {
  axisY: {
    labelInterpolationFnc: function (series) {
      // when the floored value is the same as the value we have a whole number
      if (Math.floor(series) === series) {
        return series;
      }
    },
  },
};
new Chartist.Line(".ct-chart", data, responsiveOptions, options);

// let foregnObj = document.querySelectorAll(".ct-label");
// console.log(foregnObj);

// toolTipContent: "{x} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C",
