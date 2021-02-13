import React from "react";
import ReactEcharts from "echarts-for-react";
export function HeatChart(props) {
  var hours = [
    "12pm",
    "2pm",
    "4pm",
    "6pm",
    "8pm",
    "10pm",
    "12am",
    "2am",
    "4am",
    "6am",
    "8am",
    "10am",
  ];
  var days = [
    "Saturday",
    "Friday",
    "Thursday",
    "Wednesday",
    "Tuesday",
    "Monday",
    "Sunday",
  ];

  var data = [
    [10, 3, 5, 5, 5, 5, 5, 5],
    [0, 2, 2],
    [2, 4, 10],
  ];

  data = data.map(function (item) {
    return [item[1], item[0], item[2] || "-"];
  });

  const getOption = () => {
    return {
      title: {
        text: "Quality Data 2",
        subtext: "",
        left: "center",
      },
      tooltip: {
        position: "top",
      },
      grid: {
        height: "60%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: days,
        // splitArea: {
        //   show: true,
        // },
      },
      yAxis: {
        type: "category",
        data: hours,
        // splitArea: {
        //   show: true,
        // },
      },
      visualMap: {
        // min: 0,
        // max: 10,
        calculable: true,
        orient: "horizontal",
        left: "center",
        // bottom: "15%",
      },
      series: [
        {
          name: "Punch Card",
          type: "heatmap",
          data: data,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  };
  return <ReactEcharts option={getOption()} />;
}
