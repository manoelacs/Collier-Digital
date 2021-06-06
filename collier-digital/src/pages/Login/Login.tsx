import { FC, useState } from "react";
import * as S from "./styles";
import { Form, message } from "antd";
import { EyeFilled, EyeInvisibleFilled, LockOutlined, RedEnvelopeOutlined  } from "@ant-design/icons";
/* import background from "../../assets/login-background-big.png"; */
//import logo from "../../assets/compal-logo-big.png";
import { useHistory } from "react-router";
import { ISignIn, signIn } from "../../services/login";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as routes from "../../routes/paths";
import {Link} from 'react-router-dom';



//TODO verify field name username or email
const Login: FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    const history = useHistory();
  
    const handlePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };
  
    const handleLogin = async (values: ISignIn) => {
      setIsLoading(true);
      try {
        await signIn(values);
        history.push(routes.HOME);
      } catch (error) {
        message.error(
          error.response?.data?.message === "Invalid credentials"
            ? "Credenciais inválidas"
            : "Erro não esperado, tente novamente mais tarde"
        );
      }
      setIsLoading(false);
    };
  
    return (
      <S.Container>
        <S.BackgroundImageWrapper>
          {/* <S.BackgroundImage src={background} alt="collier"></S.BackgroundImage> */}
        </S.BackgroundImageWrapper>
        <S.LoginFormWrapper>
          <S.LoginForm>
          <S.Title>Entrar</S.Title>
          <S.Subtitle>Faça login em sua conta usando e-mail e senha fornecidos 
            durante o cadastro.
          </S.Subtitle>
          <Form onFinish={handleLogin}>
            <S.StyledFormItem             
              name="username"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "Insira o e-mail ou usuário" }]}
              required
            >
              <Input prefix={<RedEnvelopeOutlined />} placeholder="E-mail" />
            </S.StyledFormItem>
            <S.StyledFormItem
              name="password"
              labelCol={{ span: 24 }}
              rules={[{ required: true, message: "Insira sua senha" }]}
            >
              <Input
                placeholder="Senha"
                prefix={<LockOutlined />}
                suffix={
                  showPassword ? (
                    <EyeFilled
                      onClick={handlePasswordVisibility}
                      style={{ fontSize: "20px" }}
                    />
                  ) : (
                    <EyeInvisibleFilled
                      onClick={handlePasswordVisibility}
                      style={{ fontSize: "20px" }}
                    />
                  )
                }
                type={showPassword ? "text" : "password"}
              />
            </S.StyledFormItem>
            {/* TODO this is a p tag now, probably it will be a Link from react router */}
            <S.LinkText> <Link to={ routes.FORGOT_PASSWORD }>Esqueceu a senha?</Link></S.LinkText>
  
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Entrar
            </Button>
            <S.LinkText >Não tem uma conta? <S.StyledSpan><Link  to={ routes.REGISTER }>Inscreva-se
               </Link>
            </S.StyledSpan>
            </S.LinkText>
          </Form>

          </S.LoginForm>
         
        </S.LoginFormWrapper>        
      </S.Container>
    );
  };
  
  export default Login;