import styled from 'styled-components';
import {Table, Button } from 'antd';
import {    basicGrayColor,
            lowPriceColor, 
            whiteFontColor } from '../../variables';
// consoleimport {Span} from '../../types';
export type Span = {    
    fontWeight?: number | string;
    color?: string
};

export const StyledTable = styled(Table)`
    .ant-table-thead > tr > th {
        text-align: left;
        font: normal normal 600 14px/21px Poppins;
        letter-spacing: 0px;
        color:basicGrayColor;
        opacity: 1;
    }
`;
export const StyledButton = styled(Button)`    
    width: 80px;
    height: 31px;
    background: ${props => props.color? props.color : lowPriceColor } 0% 0% no-repeat padding-box;
    border-radius: 12px;
    opacity: 1;
    font: normal normal 300 16px/25px Poppins;
    letter-spacing: 0px;
    color: ${whiteFontColor};
    :hover, :active, :focus{
        color: ${props => props.color? props.color : lowPriceColor } ;
        border-color: ${props => props.color? props.color : lowPriceColor } 
    }
    
`;
export const StyledSpan = styled.span<Span>`
    color: ${ props => props.color? props.color:basicGrayColor };
    text-align: left;
    font: normal normal ${ props => props.fontWeight? props.fontWeight: 'normal' } 14px/21px Poppins;
    letter-spacing: 0px;
    opacity: 1;
`;
export const StyledSiteParagraph = styled.p`
    text-align: left;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: ${basicGrayColor};
    opacity: 1;
    margin-bottom: 0;
`;
export const StyledSiteSpan = styled.span`    
    text-align: left;
    font: normal normal 300 12px/18px Poppins;
    letter-spacing: 0px;
    color: ${basicGrayColor};
    opacity: 1;    
`
export const StyledWrapper = styled.div`
   display: flex;
   flex-direction: row;
   gap: 19px;
   
`;
export const StyledLabel = styled.div`
    display: flex;
    flex-direction: column;
    width: 158px;
    height: 20px;
    text-align: left;
    font: normal normal normal 14px/21px Poppins;
    letter-spacing: 0px;
    color: ${basicGrayColor};
    opacity: 1;
`;

