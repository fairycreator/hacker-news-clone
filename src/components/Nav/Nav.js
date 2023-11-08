import React from "react";
import PropTypes from "prop-types";
import { layouts, themes } from "../../store/app/utils";

import {
  Header,
  Spacer,
  NavSection,
  Content,
  Icon,
  Logo,
  ExternalLink,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faThList,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ layout, theme, setLayout, setTheme }) => (
  <>
    <Header>
      <Content as="nav">
        <NavSection>
          <ExternalLink href="https://gitconnected.com" target="_blank">
            <Logo
              src="https://gitconnected.com/public/meta/favicon/gc-fav.png"
              alt="gitconnected logo"
            />
            gitconnected
          </ExternalLink>
        </NavSection>
        <NavSection>
          {layout === layouts.list ? (
            <Icon
              onClick={() => setLayout(layouts.grid)}
              title="Switch to Grid Layout"
            >
              <FontAwesomeIcon icon={faThLarge} />
            </Icon>
          ) : (
            <Icon
              onClick={() => setLayout(layouts.list)}
              title="Switch to List Layout"
            >
              <FontAwesomeIcon icon={faThList} />
            </Icon>
          )}
          {theme === themes.light ? (
            <Icon
              onClick={() => setTheme(themes.dark)}
              title="Switch to Dark Theme"
            >
              <FontAwesomeIcon icon={faMoon} />
            </Icon>
          ) : (
            <Icon
              onClick={() => setTheme(themes.light)}
              title="Switch to Light Theme"
            >
              <FontAwesomeIcon icon={faSun} />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </>
);

Nav.propTypes = {
  layout: PropTypes.oneOf(Object.values(layouts)).isRequired,
  theme: PropTypes.oneOf(Object.values(themes)).isRequired,
  setLayout: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Nav;
