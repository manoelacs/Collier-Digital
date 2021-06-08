import styled from 'styled-components';
import { Col, Button, Row } from 'antd';
import { ArrowUpOutlined, } from '@ant-design/icons'


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    /* width: 545px; */
    height: 180px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 15px #00000008;
    border-radius: 12px;
    opacity: 1;
`;
export const StyledRow = styled(Row)`
    padding: 30px 0px
    
`
export const ColLeft = styled(Col)`
    width: 387px; 
    height: 180px;
`;
export const ColRight = styled(Col)`
    width: 158px;    
    height: 180px;
`;
export const ColLeftUp = styled(Col)`
    height: 98px;
`;
export const ColLeftDow = styled(Col)`
    width: 298px; 
    height: 77px;
`;
export const StyledLeftSider = styled.div`
    width: 387px;
    
`;
export const StyledRightSider = styled.div`
    width: 158px;   
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const StyledSpan = styled.span`
    text-align: center;
    font: normal normal bold 50px/20px Poppins;
    letter-spacing: 0px;
    color: ${props => props.color? props.color : '#9B59B6' };
    opacity: 1;

`;
export const StyledIcon = styled.div`
    margin: 0px 20px
   
`;
export const Title = styled.p`
    text-align: left;
    margin-bottom: 3px;
    font: normal normal normal 20px/18px Poppins;
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
`;
export const Subtitle = styled.p`
    text-align: left;
    font: normal normal 300 14px/18px Poppins;
    letter-spacing: 0px;
    color: #ACACAC;
    opacity: 1;
`;
export const StyledButton = styled(Button)`
    
    width: 110px;
    height: 40px;
    background: ${props => props.color? props.color : '#007BFF' } 0% 0% no-repeat padding-box;
    border-radius: 12px;
    opacity: 1;
    font: normal normal 300 16px/25px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-left: 200px;

`;