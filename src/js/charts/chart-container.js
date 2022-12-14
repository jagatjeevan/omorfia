Highcharts.setOptions({
  lang: {
    thousandsSep: '',
    numericSymbols: null,
  },
});

export const addChart = () => {
  Highcharts.chart('chart-container', {
    chart: {
      zoomType: 'xy',
      marginTop: 50,
      backgroundColor: '#edf1f3',
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
            fontWeight: 'normal',
            textOutline: '0px contrast',
          },
          borderRadius: 2,
        },
        lineWidth: 1,
        borderWidth: 0,
        animation: {
          duration: 1500,
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
        categories: [
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
        ],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        softMin: 0,
        softMax: 80,
        gridLineColor: '#BABABA',
        startOnTick: false,
        endOnTick: false,
        labels: {
          style: {
            fontSize: '0px',
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
        softMax: 4000,
        visible: false,
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        softMin: 0,
        startOnTick: false,
        endOnTick: false,
        softMax: 4000,
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
      backgroundColor: '#edf1f3',
    },
    series: [
      {
        name: 'Revenue',
        type: 'column',
        yAxis: 1,
        color: '#003d50',
        dataLabels: { color: '#133d4e' },
        data: [
          25.5,
          28.0,
          36.5,
          40.3,
          43.9,
          49.5,
          59.5,
          74.0,
          96.4,
          124.7,
          157.2,
          223.1,
          { y: 290, color: '#6b9e78', dataLabels: { color: '#6b9e78' } },
        ],
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
        data: [479, 439.2, 528.6, 561, 591, 675, 809, 940, 1096, 1389.5, 1786, 2395, 3557],
      },
      {
        name: 'Client Gross Margin %',
        color: '#cc850a',
        marker: {
          symbol: 'circle',
        },
        data: [
          59.9, 57.0, 64.7, 69.56, 70.22, 69.11, 67.33, 67.41, 68.91, 66.5, 66.26, 66.64, 59.1,
        ],
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
