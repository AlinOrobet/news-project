const API_KEY = "b0ae4f23-4e26-4361-8478-2ed4cefacdaa";

export const getNewsCategoriesEndpoint = (category, page = 1, pageSize = 20) => {
  return `https://content.guardianapis.com/search?api-key=${API_KEY}&show-fields=all&section=${category}&page=${page}&page-size=${pageSize}`;
};

export const getNewsDetailsEndpoint = (newsId) => {
  return `https://content.guardianapis.com/${newsId}?api-key=${API_KEY}&show-fields=all`;
};
