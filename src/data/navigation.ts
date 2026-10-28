export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: '五术总览', href: '/' },
  { label: '共通基础', href: '/foundations/' },
  { label: '学习路径', href: '/learn/' },
  { label: '典籍馆', href: '/library/' },
  { label: '工具坊', href: '/tools/' },
  { label: '术语词典', href: '/glossary/' },
  { label: '关于', href: '/about/' },
];
