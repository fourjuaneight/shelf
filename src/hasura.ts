import {
  HasuraErrors,
  HasuraInsertResp,
  HasuraQueryResp,
  HasuraQueryTagsResp,
  HasuraUpdateResp,
  ShelfItem,
} from './typings.d';

/**
 * Get shelf tags from Hasura.
 * @function
 * @async
 *
 * @param {string} db table name
 * @returns {Promise<RecordData[]>}
 */
export const queryTags = async (db: string): Promise<string[]> => {
  const query = `
    {
      meta_${db}(where: {schema: {_eq: "media"}, table: {_eq: "shelf"}}) {
        name
      }
    }
  `;

  try {
    const request = await fetch(`${HASURA_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': `${HASURA_ADMIN_SECRET}`,
      },
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryTagsResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(queryTags) - ${db}: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    const tags = (response as HasuraQueryTagsResp).data[`meta_${db}`].map(
      tag => tag.name
    );

    return tags;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Get shelf entries from Hasura.
 * @function
 * @async
 *
 * @returns {Promise<ShelfItem[]>}
 */
export const queryShelfItems = async (): Promise<ShelfItem[]> => {
  const query = `
    {
      media_shelf(order_by: {name: asc}) {
        category
        comments
        completed
        cover
        creator
        genre
        name
        rating
        id
      }
    }
  `;

  try {
    const request = await fetch(`${HASURA_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': `${HASURA_ADMIN_SECRET}`,
      },
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(queryShelfItems): \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraQueryResp).data.media_shelf;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Search shelf entries from Hasura.
 * @function
 * @async
 *
 * @param {string} term shelf item name
 * @returns {Promise<ShelfItem[]>}
 */
export const searchShelfItems = async (
  pattern: string
): Promise<ShelfItem[]> => {
  const query = `
    {
      media_shelf(
        order_by: {name: asc},
        where: {name: {_iregex: ".*${pattern}.*"}}
      ) {
        category
        comments
        completed
        cover
        creator
        genre
        name
        rating
        id
      }
    }
  `;

  try {
    const request = await fetch(`${HASURA_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': `${HASURA_ADMIN_SECRET}`,
      },
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(searchShelfItems): \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraQueryResp).data.media_shelf;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Add shelf entry to Hasura.
 * @function
 * @async
 *
 * @param {ShelfItem} item data to upload
 * @returns {Promise<string>}
 */
export const addShelfItem = async (item: ShelfItem): Promise<string> => {
  const query = `
    mutation {
      insert_media_shelf_one(object: {
        category: "${item.category}",
        comments: "${item.comments}",
        completed: ${item.completed},
        cover: "${item.cover}",
        creator: "${item.creator}",
        genre: "${item.genre}",
        name: "${item.name}",
        rating: ${item.rating}
      }) {
        name
      }
    }
  `;

  try {
    const existing = await searchShelfItems(item.name);

    if (existing.length !== 0) {
      throw `(addShelfItem): Shelf item already exists.`;
    }

    const request = await fetch(`${HASURA_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': `${HASURA_ADMIN_SECRET}`,
      },
      body: JSON.stringify({ query }),
    });
    const response: HasuraInsertResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(addShelfItem): \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraInsertResp).data.insert_media_shelf_one.name;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Update shelf entry to Hasura.
 * @function
 * @async
 *
 * @param {string} id item id
 * @param {ShelfItem} item data to update
 * @returns {Promise<string>}
 */
export const updateShelfItem = async (
  id: string,
  item: ShelfItem
): Promise<string> => {
  const query = `
    mutation {
      update_media_shelf(
        where: {id: {_eq: "${id}"}},
        _set: {
          category: "${item.category}",
          comments: "${item.comments}",
          completed: ${item.completed},
          cover: "${item.cover}",
          creator: "${item.creator}",
          genre: "${item.genre}",
          name: "${item.name}",
          rating: ${item.rating}
        }
      ) {
        returning {
          name
        }
      }
    }
  `;

  try {
    const request = await fetch(`${HASURA_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': `${HASURA_ADMIN_SECRET}`,
      },
      body: JSON.stringify({ query }),
    });
    const response: HasuraUpdateResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(updateShelfItem): \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraUpdateResp).update_media_shelf.returning[0].name;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
