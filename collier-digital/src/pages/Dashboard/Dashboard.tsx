import { Row, Space } from 'antd';
import React, { FC } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, StarOutlined, WarningOutlined  } from '@ant-design/icons'
import SubHeader from '../../components/SubHeader/SubHeader';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import * as S from './styles';
import {TOKEN_KEY} from "../../services/api";


const Dashboard: FC = (props: any) => {
  
  const getToken = () => {
    const token = sessionStorage.getItem(TOKEN_KEY);

    if (typeof token === "string"){
      return token
    } else {
      return ""
    }
  }
  return (
    <S.StyledWrapper>
      <SubHeader
       title={'Dashboard'}
       subtitle='It is a long established fact that a reader will bet.'
        suffix={<Space>
        </Space>}
      />

      <S.StyledContent>
       { <Row justify="space-around" gutter={[24, 24]}>
          <S.StyledCol span={6}>
                 <CardDashboard 
                    title="Preço muito baixo"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<ArrowDownOutlined style={{color: '#007BFF', fontSize: '30px'}}/>}
                    color= '#007BFF'
                    codigo='02'
                />
          </S.StyledCol>

          <S.StyledCol span={6}>
                <CardDashboard 
                    title="Preço muito acima"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<ArrowUpOutlined style={{color: '#9B59B6', fontSize: '30px'}} />}
                    color= '#9B59B6'
                    codigo='02'
                 />           
          </S.StyledCol>

          {/* <S.StyledCol span={6}>
                <CardDashboard 
                    title="Estoque exclusivo"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<StarOutlined  style={{color: '#2ECC71', fontSize: '30px'}} />}/>}
                    color= '#2ECC71'
                    codigo='01'
                 />  
           
          </S.StyledCol>
          <S.StyledCol span={6}>
                <CardDashboard 
                    title="Ruptura"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<WarningOutlined style={{color: '#F1C40F', fontSize: '30px'}} />}/>}
                    color= '#F1C40F'
                    codigo='01'
                />  
           
          </S.StyledCol> */}
         
        </Row>}
      </S.StyledContent>
    </S.StyledWrapper>
  );
}


export default Dashboard;