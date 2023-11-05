import ApiService from "./Api";

const JSON_QUERY = ".json?print=pretty";
const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const client = new ApiService({ baseURL: BASE_URL });

const PAGE_LIMIT = 20;

class HackerNewsApi {
  constructor(client) {
    this.client = client;
  }

  async getTopStoryIds() {
    return this.client.get(`/topstories${JSON_QUERY}`);
  }

  async getStory(id) {
    return this.client.get(`/item/${id}${JSON_QUERY}`);
  }

  async getStoriesByPage(ids, page = 0) {
    const { begin, end } = this.getPageSlice(PAGE_LIMIT, page);
    const activeIds = this.getPageValues({ begin, end, items: ids });
    const storyPromises = activeIds.map((id) => this.getStory(id));
    return Promise.all(storyPromises);
  }

  getPageSlice(limit, page) {
    const begin = page * limit;
    const end = (page + 1) * limit;
    return { begin, end };
  }

  getPageValues({ begin, end, items }) {
    return items.slice(begin, end);
  }
}

const hackerNewsApi = new HackerNewsApi(client);

export default hackerNewsApi;
