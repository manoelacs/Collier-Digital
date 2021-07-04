import { Button, Dropdown, Menu, Select, Avatar } from "antd";
import { Header,Content, Footer, } from "antd/lib/layout/layout";
import { SettingFilled, BellFilled,  } from "@ant-design/icons";
import styled from "styled-components";


export const StyledHeader = styled(Header)`
    display: flex;
    align-items: center;
    flex-direction: row;
    line-height: 80px;
    height: 80px;
    background: transparent linear-gradient(274deg, #007BFF 0%, #1A008E 100%) 0% 0%
    no-repeat padding-box;
    box-shadow: 0px 3px 12px #00000029;
    opacity: 1;
    padding: 0 24px;
    transition: filter 0.2s;
    * {
        max-height: 80px;
    }
    .ant-layout-header {
    background: transparent linear-gradient(274deg, #007BFF 0%, #1A008E 100%) 0% 0%
}
    .ant-menu-horizontal {
        border: 0px;
    }
    .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
        top: 0px;
        border: 0px;
    }
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, 
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, 
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, 
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, 
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, 
    .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
        color: #FFFFFF; 
        filter: brightness(0.9);
               
       // background :#1A008E;     
        background   : #007BFF;
        box-sizing: border-box;
    }
`;
export const StyledMenu = styled(Menu)`
    letter-spacing: 0px;
    color: #FFFFFF;
    text-align: left;
    font: normal normal 300 16px/25px Poppins;
    text-transform: initial;
    opacity: 1;
    border-bottom: 0px;
    background: none;
    margin-right: 30px;
`;
export const StyledSpace = styled.div`
    margin: auto;
`;
export const StyledHeaderButton = styled(Button)`
    height: 57px;
    min-width: 57px;
`;
export const StyledHeaderLogo = styled.img`
    display: inline-block;
    width: 101px;
    height: 24px;
    margin-right: 20px;
`;

export const StyledHeaderDivider = styled.div`
    display: inline-block;
    height: 60%;
    border-right: 1px solid #EBF2EA;
`;

 export const  StyledNotificationIcon =  styled(BellFilled)`
    font-size: 16px;
    color: #FFFFFF;
`;

export const  StyledAvatar =  styled(Avatar)`

   // background-color: #007BFF;
   // border: 2px solid #FFFFFF;
   // opacity: 0.5;
    
`;

export const StyledHeaderProfileButton = styled(Button)`

    height: 50px;
    width: 50px;  
    
`;
export const StyledAvatarCircle = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;     
    border: 1px solid #FFFFFF;
    border-radius: 50%;
`

export const StyledHeaderProfileDropdown = styled(Dropdown)`
    padding: 1px 5px;
    margin-right: 75px;
    .anticon-caret-down {
        color: #3F7E06;
        font-size: 12px;
    }
`;