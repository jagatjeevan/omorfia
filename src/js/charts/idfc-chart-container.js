Highcharts.setOptions({
  lang: {
    thousandsSep: '',
    numericSymbols: null,
  },
});

export const addIdfcChart = (containerName, color) => {
  Highcharts.chart(containerName, {
    chart: {
      zoomType: 'xy',
      marginTop: 50,
      height: 420,
      width: 870,
      backgroundColor: 'white',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '10px',
            fontWeight: 'bold',
            textOutline: '0px contrast',
          },
          borderRadius: 2,
        },
        lineWidth: 1,
        borderWidth: 0,
        animation: {
          duration: 2000,
        },
      },
    },
    xAxis: [
      {
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        categories: ['2019', '2020', '2021', '2022(YTD)'],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        softMin: 0,
        softMax: 60,
        gridLineColor: '#BABABA',
        startOnTick: false,
        endOnTick: false,
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        title: {
          text: '',
        },
        opposite: true,
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        softMin: 0,
        softMax: 250,
        visible: false,
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        softMin: 0,
        startOnTick: false,
        endOnTick: false,
        softMax: 250,
        labels: {
          style: {
            fontSize: '10px',
          },
        },
        title: {
          text: '',
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      floating: true,
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      itemStyle: {
        fontSize: '10px',
        fontWeight: 'normal',
      },
      x: 0,
      y: 0,
      backgroundColor: 'white',
    },
    series: [
      {
        name: 'Revenue',
        type: 'column',
        yAxis: 1,
        color: '#003d50',
        dataLabels: { color: '#133d4e' },
        data: [3.9, 13, 16.9, { y: 11.2, color: color, dataLabels: { color: color } }],
        tooltip: {
          valueSuffix: ' Mn',
        },
      },
      {
        name: 'Average Headcount',
        yAxis: 2,
        color: '#f2617a',
        marker: {
          symbol: 'circle',
        },
        data: [65, 163, 200, 234],
      },
      {
        name: 'Client Gross Margin %',
        color: '#61507C',
        marker: {
          symbol: 'circle',
        },
        data: [53.4, 52.3, 57.5, 57.0],
        tooltip: {
          valueSuffix: ' %',
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return Highcharts.numberFormat(this.y, 2) + '%';
          },
        },
      },
    ],
  });
};
