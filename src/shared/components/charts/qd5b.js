import React from "react";
import ReactEcharts from "echarts-for-react";
export function Qd5BChart(props) {
  const getOption = () => {
    var colors = ["#5470C6", "#EE6666"];
    return {
      legend: {
        data: ["a", "b", "c", "d", "e"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["a", "b", "c", "d", "e"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "",
          type: "bar",
          stack: "广告",
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "",
          type: "bar",
          stack: "广告",
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "",
          type: "bar",
          stack: "广告",
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
  };
  return <ReactEcharts option={getOption()} />;
}
