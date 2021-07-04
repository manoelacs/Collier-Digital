import React, { useState, useEffect } from 'react';
import { DualAxes } from '@ant-design/charts';
import { barConfig, configArea, configLine } from './data';
import { TinyArea, Line, Pie } from '@ant-design/charts';
import * as S from './styles';



const BarChart: React.FC = () => {
  var data = [
    {
      time: '25 JAN',
      value: 70,
      count: 45,
    },
    {
      time: '26 JAN',
      value: 75,
      count: 22,
    },
    {
      time: '27 JAN',
      value: 80,
      count: 40,
    },
    {
      time: '28 JAN',
      value: 65,
      count: 62,
    },
    {
      time: '29 JAN',
      value: 85,
      count: 220,
    },
    {
      time: '30 JAN',
      value: 65,
      count: 50,
    },
    {
      time: '31 JAN',
      value: 75,
      count: 60,
    },
  ];
  var config = {
    data: [data, data],
    color: ['#E74C3C', '#2ECC71'],
    xField: 'time',
    yField: ['value', 'count'],
    geometryOptions: [
      { geometry: 'column' },
      {
        geometry: 'line',
        lineStyle: { lineWidth: 2 },
      },
    ],
  };
  return   <S.Wrapper>
            <S.Container>
              <DualAxes {...config} />
            </S.Container>
          </S.Wrapper>  
};

export default BarChart;