import { MenuItem } from '../interfaces/appInterfaces';


export const menuItems: MenuItem[] = [
  { name: 'Animation 101', icon: 'cube', components: 'Animated101Screen' },
  { name: 'Animation 102', icon: 'cubes', components: 'Animated102Screen' },
  { name: 'Switches', icon: 'toggle-on', components: 'SwitchScreen' },
  { name: 'Alertas', icon: 'exclamation-circle', components: 'AlertScreen' },
  { name: 'Input', icon: 'font', components: 'TextInputScreen' },
  { name: 'Pul to Refresh', icon: 'retweet', components: 'PullToRefreshScreen' },
  { name: 'Section List', icon: 'list', components: 'SectionListScreen' },
  { name: 'Modal', icon: 'clone', components: 'ModalScreen' },
  { name: 'Infinite Scroll', icon: 'angle-double-down', components: 'InfiniteScrollScreen' },
  { name: 'Slide', icon: 'map', components: 'SlidesScreen' },
  { name: 'Themes', icon: 'tint', components: 'ChangeThemeScreen' },
];
