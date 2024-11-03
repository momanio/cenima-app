export interface IRoute {
  path: string;
  element: React.ReactNode;
  pageName?: string;
  icon?: React.ReactNode;
  notShown?: boolean;
}
