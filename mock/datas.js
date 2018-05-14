import fields, { typeNumber, typeString, wordLimit } from './fields';

// 责任部门（或责任人）
const dutyCollection = {
  department: fields.department,
  name: fields.name,
  phone: fields.phone,
  tel: fields.tel,
  email: fields.email,
};
// 配置 传递的参数
// duty
export const dutyParams = {
  department: {
    desc: `部门 ${typeString}`,
    exp: '技术中心(办公室)',
  },
  name: {
    desc: `姓名 ${typeString}`,
    exp: '鱼子酱',
  },
  phone: {
    desc: `办公电话 ${typeString}`,
    exp: '028-12345678',
  },
  tel: {
    desc: `手机号码 ${typeString}`,
    exp: '13912345678',
  },
  email: {
    desc: `电子邮箱 ${typeString}`,
    exp: 'example123@qq.com',
  },
};
// business
export const businessParams = {
  // 燃气公司
  description: {
    desc: `备注说明 ${typeString}`,
    exp: `(${wordLimit})`,
  },
  // 系统详细
  sysName: {
    desc: `系统名称 ${typeString}`,
    exp: 'HL-6',
  },
  sysVersion: {
    desc: `系统版本 ${typeString}`,
    exp: '6.5',
  },
  getMethod: {
    desc: `采集方式 ${typeNumber}`,
    exp: '0:静默定时 1:静默实时',
  },
  ip: {
    desc: `IP地址 ${typeString}`,
    exp: '192.168.5.100',
  },
  port: {
    desc: `端口号 ${typeString}`,
    exp: '8080',
  },
  mac: {
    desc: `MAC地址 ${typeString}`,
    exp: '00-00-00-00-00-00-00-E0',
  },
  sqlVersion: {
    desc: `数据库版本 ${typeString}`,
    exp: 'MySQL 7.0',
  },
  readWrither: {
    desc: `读写器型号 ${typeString}`,
    exp: 'RW-1.0',
  },
  otherDevices: {
    desc: `其他设备型号 ${typeString}`,
    exp: '',
  },
  dllVersion: {
    desc: `DLL文件版本 ${typeString}`,
    exp: 'DLL-1.1.0',
  },
};
// 指令集
const directiveCollection = [
  {
    directiveCode: fields.directiveCode,
    directiveType: fields.directiveType,
    directiveStatus: fields.directiveStatus,
    directiveDes: fields.directiveDes,
    directiveStep: fields.directiveStep,
    createAt: `指令生成时间 ${fields.createAt}`,
    updateAt: `指令到达时间 ${fields.updateAt}`,
  },
];

// 扩频表
export const spreadData = [
  {
    spreadCode: fields.spreadCode,
    companyCode: fields.companyCode,
    concentratorCode: fields.concentratorCode,
    company: fields.company,
    scanMethod: fields.scanMethod,
    extractStatus: fields.extractStatus,
    price: fields.price,
    priceType: fields.priceType,
    priceVersion: fields.priceVersion,
    priceStatus: fields.priceStatus,
    priceUpdateAt: `调价时间 ${fields.updateAt}`,
    priceEndAt: fields.priceEndAt,
    batteryStatus: fields.batteryStatus,
    remainVoltage: fields.remainVoltage,
    totalVoltage: fields.totalVoltage,
    useDuration: fields.useDuration,
    desigDuration: fields.desigDuration,
    tapStatus: fields.tapStatus,
    tapControl: fields.tapControl,
    sendStatus: fields.sendStatus,
    noSend: fields.noSend,
    finishedSend: fields.finishedSend,
    sendUpdateAt: fields.sendUpdateAt,
    [`priceHistory: ${fields.priceHistory}`]: [
      {
        priceValue: fields.priceValue,
        updateAt: `调价时间 ${fields.updateAt}`,
      },
    ],
    [`duty: '${fields.duty}'`]: dutyCollection,
    [`directive: '${fields.directive}'`]: directiveCollection,
    [`user: ${fields.user}`]: {
      userName: fields.userName,
      cardId: fields.cardId,
      address: fields.address,
    },
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];

// 集中器
export const concentratorData = [
  {
    concentratorCode: fields.concentratorCode,
    companyCode: fields.companyCode,
    company: fields.company,
    factNum: fields.factNum,
    totalNum: fields.totalNum,
    cardStatus: fields.cardStatus,
    onLineStatus: fields.onLineStatus,
    setupAddress: fields.setupAddress,
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];

// 物联网表
export const nblotData = [
  {
    nblotCode: fields.nblotCode,
    companyCode: fields.companyCode,
    company: fields.company,
    onLineStatus: fields.onLineStatus,
    extractStatus: fields.extractStatus,
    price: fields.price,
    priceType: fields.priceType,
    priceVersion: fields.priceVersion,
    priceStatus: fields.priceStatus,
    priceUpdateAt: `调价时间 ${fields.updateAt}`,
    priceEndAt: fields.priceEndAt,
    batteryStatus: fields.batteryStatus,
    remainVoltage: fields.remainVoltage,
    totalVoltage: fields.totalVoltage,
    useDuration: fields.useDuration,
    desigDuration: fields.desigDuration,
    tapStatus: fields.tapStatus,
    tapControl: fields.tapControl,
    sendStatus: fields.sendStatus,
    noSend: fields.noSend,
    finishedSend: fields.finishedSend,
    sendUpdateAt: fields.sendUpdateAt,
    [`priceHistory: ${fields.priceHistory}`]: [
      {
        priceValue: fields.priceValue,
        updateAt: `调价时间 ${fields.updateAt}`,
      },
    ],
    [`duty: '${fields.duty}'`]: dutyCollection,
    [`directive: '${fields.directive}'`]: directiveCollection,
    [`user: ${fields.user}`]: {
      userName: fields.userName,
      cardId: fields.cardId,
      address: fields.address,
    },
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];

// 发货记录
export const shippingData = [
  {
    meterCode: fields.meterCode,
    companyCode: fields.companyCode,
    expressCode: fields.expressCode,
    company: fields.company,
    express: fields.express,
    orderId: fields.orderId,
    deliveryAt: `创建时间 ${fields.deliveryAt}`,
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];

// 异常报警
export const unusualData = [
  {
    meterCode: fields.meterCode,
    companyCode: fields.companyCode,
    company: fields.company,
    alarmNum: fields.alarmNum,
    alarmStatus: fields.alarmStatus,
    alarmAt: fields.alarmAt,
    [`duty: '${fields.duty}'`]: dutyCollection,
    [`directive: '${fields.directive}'`]: directiveCollection,
  },
];

// 燃气公司运营
export const businessCompanyData = [
  {
    companyCode: fields.companyCode,
    company: fields.company,
    city: fields.city,
    description: fields.description,
    [`detail ${fields.detail}`]: {
      sysName: fields.sysname,
      sysVersion: fields.sysversion,
      getMethod: fields.getMethod,
      runStatus: fields.runStatus,
      ip: fields.ip,
      port: fields.port,
      mac: fields.mac,
      sqlVersion: fields.sqlVersion,
      sync: fields.sync,
      readWrither: fields.readWrither,
      otherDevices: fields.otherDevices,
      dllVersion: fields.dllVersion,
      getDataAt: fields.getDataAt,
    },
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];
