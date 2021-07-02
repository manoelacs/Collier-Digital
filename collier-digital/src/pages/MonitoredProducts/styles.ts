import { Col, Button, Input, Radio} from "antd";
import { Content } from "antd/lib/layout/layout";
import styled from "styled-components";

export const StyledWrapper = styled.div`
    height: 100%;    
`;
export const StyledContent = styled(Content)`
  padding: 30px 0px;
  margin-left: 20px;
`;
export const StyledCol = styled(Col)`
    width: 545px;
    height: 180px;
`;
export const StyledButton = styled(Button)`
    margin: 0px 35px 0px 84px;
    width: 127px;
    height: 40px; 
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 12px;
    border: none;
    opacity: 1;    
    
    .ant-btn > span { 
        font: normal normal 300 16px/25px Poppins;
        text-align: center;    
        letter-spacing: 0px;
        color: #727272;
        opacity: 1;
        
    }
`;
export const StyledInput = styled(Input)`  
    width:500px;
    height: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #EFEFEF;
    border-radius: 12px;
    margin-bottom: 8px;
    opacity: 1;
    text-align: left;
    font: normal normal 300 16px/25px Poppins;
    letter-spacing: 0px;
    color: #727272;
    
    .anticon {
        color: #cecfd0;
        font-size: 16px;
    }
`;
export const StyledRadioGroup = styled(Radio.Group)`
margin-left: 35px;
.ant-radio-button-wrapper {
    height: 40px;
    width: 78px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-bottom: none;
    border-top: none;
}
.ant-radio-button-wrapper:not(:first-child)::before {
    background: #f5f5f5;
}
.ant-radio-button-input{

}
.ant-radio-group {
    
    
}
`;