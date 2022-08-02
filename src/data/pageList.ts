export type Page = {
  title: string;
  path: string;
  isService?: boolean;
  imageUrl?: string;
};

export const pageList: Page[] = [
  {
    title: "会社概要",
    path: "/About",
  },
  {
    title: "研修について",
    path: "/Training",
  },
  {
    title: "郵便番号から住所",
    path: "/Service/ZipCodeSearch",
    isService: true,
    imageUrl:
      "https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    title: "緯度経度から地図",
    path: "/Service/Map",
    isService: true,
    imageUrl:
      "https://images.unsplash.com/photo-1612798993808-36ca518f7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];
