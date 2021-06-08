import {FC, useState} from 'react';
import { Row, Space, Col, Radio } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined,
     StarOutlined, WarningOutlined, DownloadOutlined, SearchOutlined  } from '@ant-design/icons'
import SubHeader from '../../components/SubHeader/SubHeader';
import * as S from './styles';


const MonitoredProducts: FC = () => {

    const [valueRadio, setValueRadio] = useState();

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
                title={'Produtos Monitorados'}
                subtitle='It is a long established fact that a reader will bet.'
                suffix={<Space> </Space>}
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
           
        </S.StyledWrapper>

    )

}; export default MonitoredProducts;