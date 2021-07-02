const dataArea = [
    264,
    417,
    438,
    887,
    309,
    397,
    550,
    575,
    563,
    430,
    525,
    592,
    492,
    467,
    513,
    546,
    983,
    340,
    539,
    243,
    226,
    192,
  ];

  export const configArea = {
    autoFit: true,
    data: dataArea,
    smooth: true,
  };

  const dataLine = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
];

export const configLine = {
    data: dataLine,
    xField: 'year',
    yField: 'value',
    point: {
        size: 5,
        shape: 'diamond',
    },
}


const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其他',
    value: 5,
  },
];
export const barConfig = {
  appendPadding: 10,
  data: data,
  angleField: 'value',
  colorField: 'type',
  radius: 1,
  innerRadius: 0.64,
  meta: {
    value: {
      formatter: function formatter(v: string) {
        return ''.concat(v, ' \xA5');
      },
    },
  },
  label: {
    type: 'inner',
    offset: '-50%',
    style: { textAlign: 'center' },
    autoRotate: false,
    content: '{value}',
  },
  interactions: [
    { type: 'element-selected' },
    { type: 'element-active' },
    { type: 'pie-statistic-active' },
  ],
};