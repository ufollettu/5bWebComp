export type FooterGroupItemBean = {label: string; link: string};

export type FooterGroupBean = {
  id: string;
  title: string;
  items: FooterGroupItemBean[];
};

enum Ordering {
  UP = '0',
  DOWN = '1'
};

export type TabItem =
{
  order: Ordering;
  selected: boolean;

};
