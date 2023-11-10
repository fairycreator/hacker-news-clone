/**
 * Generates a link to an article or comment on Hacker News.
 *
 * @param {Object} params - Parameters for generating the link.
 * @param {string} params.url - The URL of the article.
 * @param {number} params.id - The ID of the article or comment.
 * @returns {string} The URL of the article or the comment page on Hacker News.
 */
export const getArticleLink = ({ url, id }) => url || `${HN_ITEM}${id}`;

export const HN_ROOT = "https://news.ycombinator.com";
export const HN_ITEM = `${HN_ROOT}/item?id=`;
export const HN_USER = `${HN_ROOT}/user?id=`;
