export type detailGameType = {
  string: {
    data: {
      name: string;
      is_free: boolean;
      price_overview?: {
        final_formatted: string;
      };
      platforms: {
        windows: boolean;
        mac: boolean;
        linux: boolean;
      };
      genres: {
        description: string;
      }[];
      release_date: {
        coming_soon: boolean;
        date: string;
      };
      header_image: string;
      short_description: string;
      supported_languages: string;
      metacritic?: {
        score: number;
        url: string;
      };
    };
  };
};

export type appListType = {
  applist: {
    apps: { appid: number; name: string }[];
  };
};
