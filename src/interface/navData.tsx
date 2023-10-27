export interface NavItem {
  type: 'menu';
  id: string;
  name: string;
  icon?: string;
  submenu?: NavItem[];
}

export const navDataMenu: NavItem[] = [
  {
    type: 'menu',
    id: '/',
    icon: 'navHome',
    name: 'Home',
  },
  {
    type: 'menu',
    id: '/world',
    icon: 'navKoalaWorld',
    name: 'Koala World',
  },
  {
    type: 'menu',
    id: '/inventory',
    icon: 'navInventory',
    name: 'Inventory',
  },
  {
    type: 'menu',
    id: '/quests',
    icon: 'navQuest',
    name: 'Quest',
  },
  {
    type: 'menu',
    id: '/marketplace',
    icon: 'navMarketplace',
    name: 'Marketplace',
  },
  {
    type: 'menu',
    id: '/events',
    icon: 'navEvent',
    name: 'Event',
  },
  {
    type: 'menu',
    id: '/news',
    icon: 'navNews',
    name: 'News',
  },
  {
    type: 'menu',
    id: '/leaderboard',
    icon: 'navLeaderboard',
    name: 'Leaderboard',
  },
];

export const navDataChain: NavItem[] = [
  {
    type: 'menu',
    id: '/koala-fi/staking',
    icon: 'navGameFi',
    name: 'Koala-Fi',
  },
  {
    type: 'menu',
    id: '/governance',
    icon: 'navGov',
    name: 'Governance',
  },
];
