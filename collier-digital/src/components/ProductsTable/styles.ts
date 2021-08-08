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
    .ant-table-thead tr th {
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0px;
        color: var(--unnamed-color-727272);
        opacity: 1;
        white-space: pre;
        size: auto;
        ::before{
            display: none;
        }
    };
    .ant-table-tbody  tr  td {
        font: normal normal 300 14px/21px 'Poppins';
        letter-spacing: 0px;
        color: #727272;
        opacity: 1;
        white-space: nowrap;
    //max-width: 200px;
    }
    .ant-table-tbody  tr{
        margin: 10px 0px;
    }
    .ant-table-thead  tr  th,
    .ant-table-tbody  tr  td,
    .ant-table tfoot  tr  th,
    .ant-table tfoot  tr  td {
        padding: 10px 10px;

    }
   
`;
export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const TableCustonHeader = styled.div`
     display: flex;
     flex-direction: column;
     span{
        color: var(--unnamed-color-727272);
        text-align: left;
        font: normal normal 300 12px/18px 'Poppins';
        letter-spacing: 0px;
     }
    
`;
export const ProductName = styled.p`
    font: normal normal 300 14px/21px 'Poppins';
    letter-spacing: 0px;
    color: #727272;
    opacity: 1;
    white-space: nowrap;
    width: 193px;
    max-width: 193px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0px;
`


export const StyledButton = styled(Button)`    
    width: 80px;
    height: 31px;
    background: ${props => props.color? props.color : lowPriceColor } 0% 0% no-repeat padding-box;
    border-radius: 12px;
    opacity: 1;
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
    font-family: 'Poppins', sans-serif;
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
    font: normal normal ${ props => props.fontWeight? props.fontWeight: 'normal' } 14px/21px 'Poppins';
    letter-spacing: 0px;
    opacity: 1;
`;
export const StyledSiteParagraph = styled.p`
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: ${basicGrayColor};
    opacity: 1;
    margin-bottom: 0;
`;
export const StyledSiteSpan = styled.span`    
    text-align: left;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    font-family: 'Poppins', sans-serif;
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
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0px;
    color: ${basicGrayColor};
    opacity: 1;
`;

