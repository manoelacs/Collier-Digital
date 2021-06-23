import React, {FC, Fragment, useState} from 'react';
import { Row, Space, Col, Radio } from 'antd';
import { Line } from '@ant-design/charts';
import { ArrowDownOutlined, ArrowUpOutlined,
     StarOutlined, WarningOutlined, DownloadOutlined, SearchOutlined  } from '@ant-design/icons'
import SubHeader from '../../components/SubHeader/SubHeader';
import ProductsTable from '../../components/ProductsTable/ProductsTable';
import * as S from './styles';
import * as routes from '../../routes/paths';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
const data = [
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

const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

const ProductsMix: FC = () => {

    const [valueRadio, setValueRadio] = useState();
    const path = [
      {text: 'Mix de produtos', url: routes.MIX_DE_PRODUTOS},      
  ]

   const onChange = (e:any) => {
        console.log('radio4 checked', e.target.value);
        setValueRadio( e.target.value );
      };

    const filterButtons = () => (
        <S.StyledRadioGroup  onChange={onChange}>
            <Radio.Button value='all' >Todos</Radio.Button>
            <Radio.Button value="02-blue"> <ArrowDownOutlined style={{color: '#007BFF', fontSize: '15px'}}/>02</Radio.Button>
            <Radio.Button value="02-purple"> <ArrowUpOutlined style={{color: '#9B59B6', fontSize: '13px'}} />02</Radio.Button>
            <Radio.Button value="01-green"> <StarOutlined  style={{color: '#2ECC71', fontSize: '13px'}} />01</Radio.Button>
            <Radio.Button value="01-yellow"> <WarningOutlined style={{color: '#F1C40F', fontSize: '13px'}} />01</Radio.Button>
       </S.StyledRadioGroup>
    )
    

    return(
        <S.StyledWrapper>
           <SubHeader
                title={'Mix de Produtos'}
                subtitle='It is a long established fact that a reader will bet.'
                suffix={<><Space/><BreadCrumb itens={path}/></>}
            />          
             <Fragment>
                <Line {...config} />               
                <Row>
                    <ProductsTable/>
                </Row>
            </Fragment> 
            
           
        </S.StyledWrapper>

    )

}; export default ProductsMix;