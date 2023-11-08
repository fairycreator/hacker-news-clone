import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
// import Nav from "components/Nav";
import List from "../List/index";
import Grid from "components/Grid";
// import Loader from "components/Loader";
import { layouts, themes } from "../../store/app/utils";
import { colorsDark, colorsLight } from "../../styles/palette";
import { Wrapper, Title, TitleWrapper, GithubLink, SocialLink } from "./styles";

const App = ({
  layout,
  theme,
  stories,
  page,
  storyIds,
  isFetching,
  hasMoreStores,
  fetchStories,
  fetchStoriesFirstPage,
}) => {
  useEffect(() => {
    fetchStoriesFirstPage();
    setBodyBackgroundColor(theme);
  }, [fetchStoriesFirstPage, theme]);

  const setBodyBackgroundColor = (currentTheme) => {
    const backgroundColor =
      currentTheme === themes.light
        ? colorsLight.background
        : colorsDark.background;
    document.body.style = `background-color: ${backgroundColor};`;
  };

  const handleFetchStories = () => {
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  return (
    <ThemeProvider theme={theme === themes.light ? colorsLight : colorsDark}>
      <div>
        {/* <Nav /> */}
        <Wrapper>
          <TitleWrapper>
            <Title>
              <div>{"// Hacker News Reader"}</div>
              <GithubLink
                href="https://github.com/gitconnected/hacker-news-reader"
                target="_blank"
              >
                (build your own)
              </GithubLink>
            </Title>
            <SocialLink></SocialLink>
          </TitleWrapper>
          <InfiniteScroll
            dataLength={stories.length}
            next={handleFetchStories}
            hasMore={hasMoreStores}
            // loader={<Loader />}
            style={{ height: "100%", overflow: "visible" }}
          >
            {layout === layouts.list ? (
              <List stories={stories} />
            ) : (
              <Grid stories={stories} />
            )}
          </InfiniteScroll>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

App.defaultProps = {
  stories: [],
};

App.propTypes = {
  layout: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  stories: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  storyIds: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  hasMoreStores: PropTypes.bool.isRequired,
  fetchStories: PropTypes.func.isRequired,
  fetchStoriesFirstPage: PropTypes.func.isRequired,
};

export default App;
