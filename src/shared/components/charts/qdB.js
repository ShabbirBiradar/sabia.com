import React from "react";
import ReactEcharts from "echarts-for-react";
export function QdBChart(props) {
  const getOption = () => {
    var colors = ["orange", "blue", "green", "yellow"];
    return {
      color: colors,

      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        show: false,
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      dataZoom: [
        {
          type: "slider",
          xAxisIndex: 0,
          filterMode: "none",
        },
      ],
      xAxis: [
        {
          type: "category",

          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Now",
            "Dec",
          ],
        },
        {
          type: "category",
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
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3,
          ],
        },
        {
          name: "",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            3.9,
            5.9,
            11.1,
            18.7,
            48.3,
            69.2,
            231.6,
            46.6,
            55.4,
            18.4,
            10.3,
            0.7,
          ],
        },
        {
          name: "",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            213.9,
            125.9,
            112.1,
            98.7,
            28.3,
            59.2,
            131.6,
            66.6,
            25.4,
            28.4,
            10.3,
            0.7,
          ],
        },
        {
          name: "",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            113.9,
            55.9,
            111.1,
            118.7,
            148.3,
            169.2,
            31.6,
            146.6,
            155.4,
            118.4,
            101.3,
            50.7,
          ],
        },
      ],
    };
  };
  return <ReactEcharts option={getOption()} />;
}
