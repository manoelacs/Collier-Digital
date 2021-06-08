import {FC, ReactNode} from 'react';
import * as S from './styles';
import { Row, Col } from 'antd';

interface ICardProps{
    icon?: ReactNode | null
    title?: string;
    subtitle?: string;
    color?:any;
    codigo?:string;
}

const CardDashboard:FC<ICardProps> = ({icon, title, subtitle, color, codigo}) => {
    return(
        <S.Container>
            <S.StyledRow>
                <S.ColLeft>
                    <Row>                           
                        <S.ColLeftUp >
                            <S.StyledIcon>{icon}</S.StyledIcon>
                        </S.ColLeftUp>

                        <S.ColLeftUp span={18} >
                            <S.Title>{title}</S.Title>
                            <S.Subtitle>{subtitle}</S.Subtitle>
                        </S.ColLeftUp>

                        <S.ColLeftDow  >
                            <S.StyledButton color={color}>Ver mais</S.StyledButton>
                        </S.ColLeftDow>
                    </Row>
                    
                </S.ColLeft>
                <Col style={{paddingTop : '45px', paddingLeft:'40px'}} >
                    <S.StyledSpan color={color}>
                        {codigo}
                    </S.StyledSpan>
                </Col>
        </S.StyledRow>

        </S.Container>       

    );
}; export default CardDashboard;