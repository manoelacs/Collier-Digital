import React, { FC } from "react";
import * as S from "./styles";

interface ISubHeaderProps {
  prefix?: React.ReactNode | null;
  suffix?: React.ReactNode | null;
  title?: string;
  subtitle?: string;
}
const SubHeader: FC<ISubHeaderProps> = ({ prefix, suffix, title, subtitle }) => {

  const subtitleComp = (text: string) => (<S.StyledSubHeaderSubTitle>
    {text}
  </S.StyledSubHeaderSubTitle>)

  const titleComp = (text: string) => (<S.StyledSubHeaderTitle>
    {text}
  </S.StyledSubHeaderTitle>)

  return <S.SubHeader>
    {prefix}
    <S.StyledSubHeaderText>
      {title ? titleComp(title) : null}
      {subtitle ? subtitleComp(subtitle) : null}
    </S.StyledSubHeaderText>
    <S.StyledSpace />
    {suffix}
  </S.SubHeader>;
};

export default SubHeader;