import React from "react";
import ReactEcharts from "echarts-for-react";
export function Qd5Ahart(props) {
  const getOption = () => {
    return {
      title: {
        text: "",
        subtext: "",
      },

      legend: {
        show: false,
      },

      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: (function () {
            var now = new Date();
            var res = [];
            var len = 10;

            return res;
          })(),
        },
        {
          type: "category",
          boundaryGap: true,
          data: (function () {
            var res = [];
            var len = 10;

            return res;
          })(),
        },
      ],
      yAxis: [
        {
          type: "value",
          scale: true,
          name: "",

          // boundaryGap: [0.2, 0.2],
        },
        {
          type: "value",
          scale: true,
          name: "",
        },
      ],
      series: [
        {
          name: "",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: (function () {
            var res = [];
            var len = 10;
            while (len--) {
              res.push(Math.round(Math.random() * 1000));
            }
            return res;
          })(),
        },
        {
          name: "",
          type: "line",

          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: (function () {
            var res = [];
            var len = 0;
            while (len < 10) {
              res.push((Math.random() * 10 + 5).toFixed(1) - 0);
              len++;
            }
            return res;
          })(),
        },
      ],
    };
  };
  return <ReactEcharts option={getOption()} />;
}
