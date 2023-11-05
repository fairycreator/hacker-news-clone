import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/story/actions";
import { hasMoreStories } from "../../store/story/selectors";
import App from "./App";

const AppContainer = () => {
  const layout = useSelector((state) => state.app.layout);
  const theme = useSelector((state) => state.app.theme);
  const stories = useSelector((state) => state.story.stories);
  const page = useSelector((state) => state.story.page);
  const storyIds = useSelector((state) => state.story.storyIds);
  const isFetching = useSelector((state) => state.story.isFetching);
  const hasMoreStores = useSelector(hasMoreStories);

  const dispatch = useDispatch();

  const fetchStories = ({ storyIds, page }) =>
    dispatch(actions.fetchStories({ storyIds, page }));
  const fetchStoriesFirstPage = () => dispatch(actions.fetchStoryIds());

  return (
    <App
      layout={layout}
      theme={theme}
      stories={stories}
      page={page}
      storyIds={storyIds}
      isFetching={isFetching}
      hasMoreStores={hasMoreStores}
      fetchStories={fetchStories}
      fetchStoriesFirstPage={fetchStoriesFirstPage}
    />
  );
};

export default AppContainer;
