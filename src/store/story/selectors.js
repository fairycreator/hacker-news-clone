import { createSelector } from "reselect";

// Selector to get the IDs of stories
const storyIdsSelector = (state) => state.story.storyIds;

// Selector to get the actual story objects
const storiesSelector = (state) => state.story.stories;

export const hasMoreStories = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length
);
