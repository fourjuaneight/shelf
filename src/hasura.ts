import {
  HasuraErrors,
  HasuraInsertResp,
  HasuraQueryResp,
  HasuraUpdateResp,
  ShelfItem,
} from './typings.d';

/**
 * Add shelf entry to Hasura.
 * @function
 * @async
 *
 * @param {ShelfItem} item data to upload
 * @returns {Promise<void>}
 */
export const addShelfItem = async (item: ShelfItem): Promise<void> => {
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

      throw `Adding record to Hasura - Shelf: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }
  } catch (error) {
    throw `Adding record to Hasura - Shelf: \n ${error}`;
  }
};

/**
 * Update shelf entry to Hasura.
 * @function
 * @async
 *
 * @param {string} id item id
 * @param {ShelfItem} item data to update
 * @returns {Promise<void>}
 */
export const updateShelfItem = async (
  id: string,
  item: ShelfItem
): Promise<void> => {
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

      throw `Updating record to Hasura - Shelf: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }
  } catch (error) {
    throw `Updating record to Hasura - Shelf: \n ${error}`;
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

      throw new Error(
        `Querying records from Hasura - Shelf: \n ${errors
          .map(err => `${err.extensions.path}: ${err.message}`)
          .join('\n')} \n ${query}`
      );
    }

    return (response as HasuraQueryResp).data.media_shelf;
  } catch (error) {
    throw new Error(`Querying records from Hasura - Shelf: \n ${error}`);
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
  patter: string
): Promise<ShelfItem[]> => {
  const query = `
    {
      media_shelf(
        order_by: {name: asc},
        where: {name: {_iregex: ".*${patter}.*"}}
      ) {
        category
        comments
        completed
        cover
        creator
        genre
        name
        rating
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

      throw new Error(
        `Searching records from Hasura - Shelf: \n ${errors
          .map(err => `${err.extensions.path}: ${err.message}`)
          .join('\n')} \n ${query}`
      );
    }

    return (response as HasuraQueryResp).data.media_shelf;
  } catch (error) {
    throw new Error(`Searching records from Hasura - Shelf: \n ${error}`);
  }
};
