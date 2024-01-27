const inputArr = document.querySelectorAll('input');
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
[...inputArr].forEach((item, index) => {
    item.addEventListener('change', () => {
        option.series[0].data[0].value[index] = item.value
        option && myChart.setOption(option);
    })
})
option = {
    title: {
        text: '雷达图'
    },
    legend: {
        data: ['多方数据']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '统率', max: 6500 },
            { name: '魅力', max: 16000 },
            { name: '武力', max: 30000 },
            { name: '政治', max: 38000 },
            { name: '智力', max: 52000 },
        ]
    },
    series: [
        {
            name: 'image',
            type: 'radar',
            data: [
                {
                    value: [inputArr[0].value, inputArr[1].value, inputArr[2].value, inputArr[3].value, inputArr[4].value],
                    name: '多方数据'
                },
            ]
        }
    ]
};

option && myChart.setOption(option);
