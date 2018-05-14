import fields from './fields';

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
    [`duty: '${fields.duty}'`]: {
      department: fields.department,
      name: fields.name,
      phone: fields.phone,
      tel: fields.tel,
      email: fields.email,
    },
    [`directive: '${fields.directive}'`]: [
      {
        directiveCode: fields.directiveCode,
        directiveType: fields.directiveType,
        directiveStatus: fields.directiveStatus,
        directiveStep: fields.directiveStep,
        createAt: `指令生成时间 ${fields.createAt}`,
        updateAt: `指令到达时间 ${fields.updateAt}`,
      },
    ],
    [`user: ${fields.user}`]: {
      userName: fields.userName,
      cardId: fields.cardId,
      address: fields.address,
    },
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
    [`duty: '${fields.duty}'`]: {
      department: fields.department,
      name: fields.name,
      phone: fields.phone,
      tel: fields.tel,
      email: fields.email,
    },
    [`directive: '${fields.directive}'`]: [
      {
        directiveCode: fields.directiveCode,
        directiveType: fields.directiveType,
        directiveStatus: fields.directiveStatus,
        directiveStep: fields.directiveStep,
        createAt: `指令生成时间 ${fields.createAt}`,
        updateAt: `指令到达时间 ${fields.updateAt}`,
      },
    ],
    [`user: ${fields.user}`]: {
      userName: fields.userName,
      cardId: fields.cardId,
      address: fields.address,
    },
    createAt: `创建时间 ${fields.createAt}`,
    updateAt: `更新时间 ${fields.updateAt}`,
  },
];
