import React, {FunctionComponent} from "react";
import StyledNavigation from "@nehalist/gatsby-theme-nehalem/src/components/navigation";
import {Description, StyledHeader, StyledTopics, Title, TitleWrapper} from "@nehalist/gatsby-theme-nehalem/src/components/header/style";
import reactStringReplace from 'react-string-replace';
import {MenuItem} from "@nehalist/gatsby-theme-nehalem/src/utils/models";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: MenuItem[];
  search: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({title, description, menu, topics = [], search = true}) => {
  if (topics.length > 0) {
    description = reactStringReplace(description, '%TOPICS%', (match, i) => {
      return (
        <StyledTopics
          strings={topics}
          typeSpeed={50}
          backSpeed={60}
          shuffle={true}
          backDelay={1500}
          loop={true}
          key={match + i}
        />
      );
    }) as any;
  }

  return (
    <StyledHeader>
      <StyledNavigation title={title} menu={menu} showSearch={search}/>
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
