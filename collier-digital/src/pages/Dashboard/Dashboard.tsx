import { Row, Space } from 'antd';
import React, { FC, useState } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined, StarOutlined, WarningOutlined  } from '@ant-design/icons'
import SubHeader from '../../components/SubHeader/SubHeader';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import * as S from './styles';
import {TOKEN_KEY} from "../../services/api";
import {useHistory, useLocation} from "react-router-dom";
import * as routes from '../../routes/paths';


const Dashboard: FC = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedMenuTab, setSelectedMenuTab] = useState<string>(
    history.location.pathname
  );
  
  const goTo = (/* item: { name?: string; url: any; } */) => {
    history.push(routes.PRODUCTS);    
    window.location.reload();
    //setSelectedMenuTab(item.url);
  } 
  
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
       { <Row   gutter={[16, 16]}>
          <S.StyledCol  span={10}>
                 <CardDashboard 
                    title="Preço muito baixo"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<ArrowDownOutlined style={{color: '#007BFF', fontSize: '30px'}}/>}
                    color= '#007BFF'
                    codigo='02'
                    goTo = { goTo }
                />
          </S.StyledCol>

          <S.StyledCol  span={10}>
                <CardDashboard 
                    title="Preço muito acima"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<ArrowUpOutlined style={{color: '#9B59B6', fontSize: '30px'}} />}
                    color= '#9B59B6'
                    codigo='02'
                    goTo = { goTo }
                 />           
          </S.StyledCol>

           <S.StyledCol  span={10}>
                <CardDashboard 
                    title="Estoque exclusivo"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<StarOutlined  style={{color: '#2ECC71', fontSize: '30px'}} />}
                    color= '#2ECC71'
                    codigo='01'
                    goTo = { goTo }
                 />  
           
          </S.StyledCol>
          <S.StyledCol span={10}>
                <CardDashboard 
                    title="Ruptura"
                    subtitle='It is a long established fact that a reader will bet.'
                    icon = {<WarningOutlined style={{color: '#F1C40F', fontSize: '30px'}} />}
                    color= '#F1C40F'
                    codigo='01'
                    goTo = { goTo }
                />  
           
          </S.StyledCol> 
         
        </Row>}
      </S.StyledContent>
    </S.StyledWrapper>
  );
}


export default Dashboard;