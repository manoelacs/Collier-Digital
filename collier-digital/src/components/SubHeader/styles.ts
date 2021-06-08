import { Header } from "antd/lib/layout/layout";
import styled from "styled-components";

export const SubHeader = styled(Header)`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* height: 100px;
  max-height: 150px; */
  background: #FCFCFC;
 // padding: 0px 80px;
  margin-top: 50px
  
`;

export const StyledSubHeaderTitle = styled.p`
  letter-spacing: 0px;
  font: normal normal bold 25px/20px Poppins;
  color: #404040;
  text-align: left;
  opacity: 1;
  text-overflow: ellipsis;
  overflow: hidden;
 // white-space: nowrap;
  margin: 0 0 0 0;
  height: 20px; 
  
`;

export const StyledSubHeaderSubTitle = styled.p`
  letter-spacing: 0px;
  color: #ACACAC;
  text-align: left;
  font: normal normal 300 14px/18px Poppins;
  opacity: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 5px 0 0 0; 
  
`;


export const StyledSubHeaderText = styled.div`
   overflow: hidden; 
  line-height: 100%;
`;

export const StyledSpace = styled.div`
  margin: auto;
`;