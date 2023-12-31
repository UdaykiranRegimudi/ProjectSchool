/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { PageLayout } from "../page-layout";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graphs extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Projects Graph",
      },
      axisX: {
        valueFormatString: "DD MMM",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        },
      },
      axisY: {
        title: "Projects Count",
        valueFormatString: "",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function (e) {
            return "€" + CanvasJS.formatNumber(e.value, "##0.00");
          },
        },
      },
      data: [
        {
          type: "area",
          xValueFormatString: "DD MMM",
          yValueFormatString: "0",
          dataPoints: [
            { x: new Date("2018-03-01"), y: 1 },
            { x: new Date("2018-03-02"), y: 5 },
            { x: new Date("2018-03-05"), y: 10 },
            { x: new Date("2018-03-06"), y: 20 },
            { x: new Date("2018-03-07"), y: 5 },
            { x: new Date("2018-03-08"), y: 2 },
            { x: new Date("2018-03-09"), y: 6 },
            { x: new Date("2018-03-12"), y: 4 },
            { x: new Date("2018-03-13"), y: 2 },
            { x: new Date("2018-03-14"), y: 1 },
            { x: new Date("2018-03-15"), y: 6 },
            { x: new Date("2018-03-16"), y: 3 },
            { x: new Date("2018-03-19"), y: 5 },
            { x: new Date("2018-03-20"), y: 15 },
            { x: new Date("2018-03-21"), y: 4 },
            { x: new Date("2018-03-22"), y: 8 },
            { x: new Date("2018-03-23"), y: 5 },
            { x: new Date("2018-03-26"), y: 1 },
            { x: new Date("2018-03-27"), y: 10 },
            { x: new Date("2018-03-28"), y: 5 },
            { x: new Date("2018-03-29"), y: 0 },
          ],
        },
      ],
    };

    return (
      <PageLayout>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </PageLayout>
    );
  }
}

export default Graphs;
