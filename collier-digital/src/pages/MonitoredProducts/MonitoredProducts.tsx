import React, {FC, useState} from 'react';
import { Row, Space, Col, Radio } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined,
     StarOutlined, WarningOutlined, DownloadOutlined, SearchOutlined  } from '@ant-design/icons'
import SubHeader from '../../components/SubHeader/SubHeader';
import ProductsTable from '../../components/ProductsTable/ProductsTable';
import * as S from './styles';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import * as routes from '../../routes/paths';


const MonitoredProducts: FC = () => {

    const [valueRadio, setValueRadio] = useState();
    const path = [
        {text: 'Produtos', url: routes.PRODUCTS},      
    ]

   const onChange = (e:any) => {
        console.log('radio4 checked', e.target.value);
        setValueRadio( e.target.value );
      };

    const filterButtons = () => (
        <S.StyledRadioGroup  onChange={onChange}>
            <Radio.Button value='all' >Todos</Radio.Button>
            <Radio.Button value="02-blue"> 
                 <ArrowDownOutlined 
                     style={{color: '#007BFF', fontSize: '15px', marginRight:10 }}/>
                 02                     
            </Radio.Button>
            <Radio.Button value="02-purple">
                 <ArrowUpOutlined 
                     style={{color: '#9B59B6', fontSize: '13px',  marginRight:10 }} />
                 02
            </Radio.Button>
            <Radio.Button value="01-green">
                 <StarOutlined 
                     style={{color: '#2ECC71', fontSize: '13px',  marginRight:10}} />
                 01
            </Radio.Button>
            <Radio.Button value="01-yellow">
                 <WarningOutlined 
                     style={{color: '#F1C40F', fontSize: '13px',  marginRight:10}} />
                 01
            </Radio.Button>
       </S.StyledRadioGroup>
    )
    

    return(
        <S.StyledWrapper>
           <SubHeader
                title={'Produtos Monitorados'}
                subtitle='It is a long established fact that a reader will bet.'
                suffix={<><Space/><BreadCrumb itens={path}/></>}
            />
            
                <Row  gutter={[0, 16]}>
                
                    <Col> <S.StyledInput placeholder="Buscar Produtos" prefix={<SearchOutlined />} /></Col>
                    <Col>
                        <S.StyledButton
                            icon={<DownloadOutlined />} 
                        > Exportar </S.StyledButton>
                    </Col>
                    <Col> {filterButtons()}</Col>
                
                    
                </Row>
                <Row>
                    <ProductsTable/>
                </Row>
           
        </S.StyledWrapper>

    )

}; export default MonitoredProducts;