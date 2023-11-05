import hackerNewsApi from "services/hackerNewsApi";
import { buildRequestCreator } from "store/utils";

const NS = "@hackerNewsReader/story";

export const actionTypes = {
  FETCH_STORY_IDS: `${NS}/FETCH_STORY_IDS`,
  FETCH_STORIES: `${NS}/FETCH_STORIES`,
};

const actions = {
  fetchStoryIds: buildRequestCreator(
    actionTypes.FETCH_STORY_IDS,
    async ({ request, payload, dispatch }) => {
      dispatch(request.request(payload));
      try {
        const storyIds = await hackerNewsApi.getTopStoryIds();
        dispatch(request.success({ storyIds }));
        // Directly await the dispatch result
        await dispatch(actions.fetchStories({ storyIds, page: 0 }));
        return storyIds;
      } catch (err) {
        dispatch(request.failure(err));
      }
    }
  ),
  fetchStories: buildRequestCreator(
    actionTypes.FETCH_STORIES,
    async ({ request, payload, dispatch }) => {
      dispatch(request.request(payload));
      try {
        const { storyIds, page } = payload;
        const stories = await hackerNewsApi.getStoriesByPage(storyIds, page);
        dispatch(request.success({ stories }));
      } catch (err) {
        dispatch(request.failure(err));
      }
    }
  ),
};

export default actions;
