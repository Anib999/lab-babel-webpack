import { MenuSettings } from "./MenuSettings"

export const MenuRoute = [
  {
    icon: 'icon-line2-home',
    key: 'dashbord',
    name: 'dashboard',
    path: '/',
    isactive: MenuSettings.dashboard,
  },
  
  {
    icon: 'icon-line-bag',
    key: 'goodsin',
    name: 'goods in',
    path: '/goodsin',
    isactive: MenuSettings.goodsin,
  },
  {
    icon: 'icon-line-shopping-bag',
    key: 'goodsOut',
    name: 'Goods Out',
    path: '/goodsout',
    isactive: MenuSettings.goodsout,
  },
  
  {
    icon: 'icon-line-trash',
    key: 'wastage',
    name: 'wastage',
    path: '/wastage',
    isactive: MenuSettings.wastage,
  },
  {
    icon: 'icon-line2-doc',
    key: 'reports',
    name: 'Reports',
    path: '/reports',
    isactive: MenuSettings.reports,
  },
  {
    icon: 'icon-graph',
    key: 'finance',
    name: 'Finance',
    path: '/finance',
    isactive: MenuSettings.finance
  },
  {
    icon: 'icon-line2-doc',
    key: 'misreports',
    name: 'MIS Reports',
    path: '/datametric',
    isactive: MenuSettings.misreports,
  },
]

export const settingsMenu = [
  {
    icon: 'icon-line-box',
    key: 'item',
    name: 'Item',
    path: '/item',
    isactive: MenuSettings.item,
  },
  {
    icon: 'icon-lab2',
    key: 'itemVsRatio',
    name: 'Item Vs Ratio',
    path: '/itemvsratio',
    isactive: MenuSettings.itemvsratio,
  },
  {
    icon: 'icon-line-stack',
    key: 'type',
    name: 'type',
    path: '/type',
    isactive: MenuSettings.type,
  },
  {
    icon: 'icon-line-book',
    key: 'category',
    name: 'category',
    path: '/category',
    isactive: MenuSettings.category,
  },
  {
    icon: 'icon-location',
    key: 'location',
    name: 'location',
    path: '/location',
    isactive: MenuSettings.location,
  },
  {
    icon: 'icon-line-archive',
    key: 'rack',
    name: 'rack',
    path: '/rack',
    isactive: MenuSettings.rack,
  },
  {
    icon: 'icon-bar-chart',
    key: 'unit',
    name: 'unit',
    path: '/units',
    isactive: MenuSettings.units,
  },
  {
    icon: 'icon-bar-chart',
    key: 'consumption',
    name: 'consumption',
    path: '/consumption',
    isactive: MenuSettings.consumption,
  },
  {
    icon: 'icon-bar-chart',
    key: 'cons lookup',
    name: 'cons lookup',
    path: '/consumptionlook',
    isactive: MenuSettings.consumptionlook,
  },
]