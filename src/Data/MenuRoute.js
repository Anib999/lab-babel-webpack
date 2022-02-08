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
    icon: 'icon-line-content-right',
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
  {
    icon: 'icon-line2-screen-desktop',
    key: 'theme',
    name: 'theme',
    path: '/theme',
    isactive: MenuSettings.theme,
  },
]

export const dataMetricCon = [
  // {
  //   icon: 'icon-building2',
  //   key: 'department',
  //   name: 'department',
  //   path: '/department',
  //   isactive: MenuSettings.department,
  // },
  {
    icon: 'icon-line2-screen-desktop',
    key: 'outsourcing',
    name: 'outsourcing',
    path: '/outsourcing',
    isactive: MenuSettings.outsourcing,
  },
  // {
  //   icon: 'icon-calendar21',
  //   key: 'marketing',
  //   name: 'marketing',
  //   path: '/marketing',
  //   isactive: MenuSettings.marketing,
  // },
  // {
  //   icon: 'icon-chat',
  //   key: 'tatanalysis',
  //   name: 'tat analysis',
  //   path: '/tatanalysis',
  //   isactive: MenuSettings.tatanalysis,
  // },
  // {
  //   icon: 'icon-stethoscope',
  //   key: 'testanalysis',
  //   name: 'testanalysis',
  //   path: '/testanalysis',
  //   isactive: MenuSettings.testanalysis,
  // },
  // {
  //   icon: 'icon-line2-screen-desktop',
  //   key: 'expesemangement',
  //   name: 'expesemangement',
  //   path: '/expesemangement',
  //   isactive: MenuSettings.expesemangement,
  // },
  
  // {
  //   icon: 'icon-line2-screen-desktop',
  //   key: 'qccontrol',
  //   name: 'qccontrol',
  //   path: '/qccontrol',
  //   isactive: MenuSettings.qccontrol,
  // },
  // {
  //   icon: 'icon-line2-screen-desktop',
  //   key: 'dynamicreporrt',
  //   name: 'dynamicreporrt',
  //   path: '/dynamicreporrt',
  //   isactive: MenuSettings.dynamicreporrt,
  // },

  {
    icon: 'icon-line2-screen-desktop',
    key: 'editbill',
    name: 'editbill',
    path: '/editbill',
    isactive: MenuSettings.editbill,
  },
  {
    icon: 'icon-chat-3',
    key: 'sms',
    name: 'sms',
    path: '/sms',
    isactive: MenuSettings.sms,
  },
  {
    icon: 'icon-line2-screen-desktop',
    key: 'datechange',
    name: 'datechange',
    path: '/datechange',
    isactive: MenuSettings.datechange,
  },
  // {
  //   icon: 'icon-line2-screen-desktop',
  //   key: 'bulknegative',
  //   name: 'bulknegative',
  //   path: '/bulknegative',
  //   isactive: MenuSettings.bulknegative,
  // },
  // {
  //   icon: 'icon-line2-screen-desktop',
  //   key: 'sms',
  //   name: 'sms',
  //   path: '/sms',
  //   isactive: MenuSettings.sms,
  // },
]