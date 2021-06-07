import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as S from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Layout>
      <Header/>
      <S.Wraap>
      <S.Content>
        {children}
      </S.Content>
      <Footer />
      </S.Wraap>
    </S.Layout>
  );
};

export default Layout;