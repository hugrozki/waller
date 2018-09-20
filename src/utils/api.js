import { getSession, getSettings } from './webstorage';

const api = () => {
  const { token } = getSession();
  const root = 'https://api.instagram.com/v1/';
  const settings = {
    method: 'GET'
  }

  function send(segment = '', params = null) {

    const urlParams = params ? `&${params}` : '';

    const endpoint = `${root}${segment}?access_token=${token}${urlParams}&count=20`;

    return fetch(endpoint, settings)
      .then(resp => resp.json())
      .then(data => data)
      .catch((error) => {
        const errorMessage = error.message === 'Failed to fetch' ? 'Ocurrió un error al comunicarse con el servidor.' : error.message;
        return { detail_error: errorMessage };
      });
  }

  function parseFeed(data) {
    return data.map((item) => {
      const { id, comments, caption, likes, images, type, user } = item;

      return {
        id,
        comments,
        caption,
        likes,
        images,
        type,
        user
      }
    });
  }

  return {
    self: () => {
      return send('users/self/');
    },
    recent: async (params = null) => {
      const { hashtag, queryType } = getSettings();

      const endpoint = queryType === 'recentuser' ? 'users/self/media/recent/' : `tags/${hashtag}/media/recent`;

      const response = await send(endpoint, params);

      if (response.data && response.data.length > 0) {
        const posts = response.data.reverse();
        return parseFeed(posts);
      }

      return [];
    },
    tag: (tag) => {
      return send(`tags/${tag}`);
    },
    recentTag: (tag) => {
      return send(`tags/${tag}/media/recent`);
    }
  }


};

export default api();