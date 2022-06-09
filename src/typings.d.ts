/* eslint-disable camelcase */
export interface ShelfItem {
  category: string;
  comments: string;
  completed: boolean;
  cover: string;
  creator: string;
  genre: string;
  id?: string;
  name: string;
  rating: number;
}

export interface HasuraInsertResp {
  data: {
    insert_media_shelf_one: {
      name: string;
    };
  };
}

export interface HasuraUpdateResp {
  update_media_shelf: {
    returning: {
      name: string;
    }[];
  };
}

export interface HasuraQueryResp {
  data: {
    media_shelf: ShelfItem[];
  };
}

export interface HasuraQueryTagsResp {
  data: {
    [key: string]: { name: string }[];
  };
}

export interface HasuraErrors {
  errors: {
    extensions: {
      path: string;
      code: string;
    };
    message: string;
  }[];
}

export interface RequestPayload {
  type: string;
  tagList?: string;
  data?: ShelfItem;
  query?: string;
}
