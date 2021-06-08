import React, {FC, useState} from "react";
import * as S from "./styles";
//import logo from "./../../assets/Logo/compal.png";
import {Menu, Select} from "antd";
import {CaretDownFilled, UserOutlined} from "@ant-design/icons";
import {useHistory, useLocation} from "react-router-dom";
import {signOut} from "../../services/login";
import * as routes from "../../routes/paths";


const {Option} = Select;

const Header: FC = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [selectedMenuTab, setSelectedMenuTab] = useState<string>(
    history.location.pathname
  );
  const handleSignOut = () => {
    signOut();
    history.push("/");
  };
  const navMenuList = [
    {name: "Início", url: routes.HOME},
    {name: "Produtos", url: "/produtos"},
    {name: "Mix de Produtos", url: "/mix_de_produtos"},
  ];
  const profileMenu = () => (
    <Menu>
      <Menu.Item>Configuração</Menu.Item>
      <Menu.Item>Perfil</Menu.Item>
      <Menu.Item onClick={handleSignOut}>Logout</Menu.Item>
    </Menu>
  );

  const goTo = (item: { name?: string; url: any; }) => {
    history.push(item.url);    
    window.location.reload();
    setSelectedMenuTab(item.url);
  }
  const handleVerifyClick = (item: any) => {
    switch(item.name) {
      case "Início": {
          goTo(item)       
        break;
      }
      case "Produtos": {
        goTo(item)   
        break;
      }
      case "Mix de Produtos": {
        goTo(item)   
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
  const navMenuOptions = () => {
    return navMenuList.map((item) => (
      <S.StyledMenu.Item
        key={item.url}
        onClick={() => handleVerifyClick(item)}
      >
        {item.name}
      </S.StyledMenu.Item>
    ));
  };
  return (
    <S.StyledHeader>
     {/*  <S.StyledHeaderLogo alt="logo" src={logo}/> */}
      <S.StyledSpace/> 
      <S.StyledMenu mode="horizontal" selectedKeys={[selectedMenuTab]}>
        {navMenuOptions()}
      </S.StyledMenu>
      
      
     
      <S.StyledHeaderButton type="text">
        <S.StyledNotificationIcon/>
      </S.StyledHeaderButton>

      <S.StyledHeaderDivider/> 


       <S.StyledHeaderProfileDropdown overlay={profileMenu} trigger={["click"]}>
        <S.StyledHeaderProfileButton type="text">
          <S.StyledAvatar icon={<UserOutlined/>}/>
        </S.StyledHeaderProfileButton>
      </S.StyledHeaderProfileDropdown> 
    </S.StyledHeader>
  );
};
  export default Header;
