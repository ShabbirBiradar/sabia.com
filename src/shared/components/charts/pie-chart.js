import React from "react";
import ReactEcharts from "echarts-for-react";
export function Piehart(props) {
  const getOption = () => {
    return {
      title: {
        text: "Quality Data 3",
        subtext: "",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        show: false,
      },
      series: [
        {
          type: "pie",
          radius: "65%",
          center: ["50%", "50%"],
          label: {
            show: false,
            position: "center",
          },
          data: [
            { value: 735, name: "a" },
            { value: 735, name: "b" },
            { value: 510, name: "c" },
            { value: 434, name: "d" },
            { value: 335, name: "e" },
          ],
        },
      ],
    };
  };
  return <ReactEcharts option={getOption()} />;
}
