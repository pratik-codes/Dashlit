import { SearchItem } from "./SearchItem";

export const getOptionsValue = (data: any) => {
 const options: any = [];
  data?.forEach((link: any) => {
    const { data } = link;
    options.push({
      label: SearchItem(data),
      value: data.linkTitle,
      link: data,
      key: data.id
    });
  });
  return options;
};
