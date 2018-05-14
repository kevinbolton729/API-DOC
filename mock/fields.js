const group = {
  dataMonitor: '业务数据监控',
  custom: '客户服务监控',
  company: '燃气公司运营',
};

const api = '接口';
const field = '字段';
const type = '类型';
const number = 'Number';
const string = 'String';
const array = 'Array';
const object = 'Object';
const unix13 = 'Unix 时间戳(13位)';

const fieldType = `${field}${type}`;

// 接口
export const apiCustom = `[${group.custom}] ${api}:`; // eg.[客户服务监控] 接口:
export const apiDataMonitor = `[${group.dataMonitor}] ${api}:`; // eg.[业务数据监控] 接口:
export const apiCompany = `[${group.company}] ${api}:`; // eg.[燃气公司运营] 接口:

// 字段类型
export const typeNumber = `[${fieldType}: ${number}]`; // eg.[字段类型: Number]
export const typeString = `[${fieldType}: ${string}]`; // eg.[字段类型: String]
export const typeArray = `[${fieldType}: ${array}]`; // eg.[字段类型: Array]
export const typeObject = `[${fieldType}: ${object}]`; // eg.[字段类型: Object]
export const typeUnix13 = `[${fieldType}: ${unix13}]`; // eg.[字段类型: Unix(13位)]

// 字段定义
const fields = {
  createAt: typeUnix13,
  updateAt: typeUnix13,
  // 燃气用户
  user: '燃气用户',
  userName: `用户姓名 ${typeString}`,
  cardId: `卡号 ${typeString}`,
  address: `详细地址 ${typeString}`,
  // 价格
  price: `价格(元) ${typeString}`,
  priceType: `价格类型 ${typeNumber} 0:后付费 1:预付费`,
  priceHistory: '历史价格记录',
  priceValue: `历史价格金额(元) ${typeNumber} eg. 2.84`,
  priceVersion: `价格版本 ${typeString}`,
  priceStatus: `价格状态 ${typeNumber} 0:异常 1:正常`,
  priceEndAt: `有效期至 ${typeUnix13}`,
  // 扩频表
  spread: '扩频表',
  spreadCode: `表编号 ${typeString}`,
  companyCode: `公司编码 ${typeString}`,
  company: `公司名称 ${typeString}`,
  scanMethod: `扫频方式 ${typeNumber} 0:手动 1:自动`,
  extractStatus: `数据提取状态 ${typeNumber} 0:失败 1:成功`,
  batteryStatus: `电池状态 ${typeNumber} 0:消耗过大 1:正常 2:消耗过快`,
  remainVoltage: `剩余电压 ${typeNumber}`,
  totalVoltage: `满电电压 ${typeNumber}`,
  useDuration: `已使用时长(小时) ${typeNumber} eg. 50`,
  desigDuration: `理想使用时长(小时) ${typeNumber} eg. 3000`,
  tapStatus: `阀门状态 ${typeNumber} 0:异常 1:开启 2:关闭`,
  tapControl: `阀门控制(指令执行后) ${typeNumber} 0:异常 1:开启 2:关闭`,
  sendStatus: `上报状态 ${typeNumber} 0:未上报 1:正常`,
  noSend: `未上报(次数) ${typeNumber}`,
  finishedSend: `已上报(次数) ${typeNumber}`,
  sendUpdateAt: `上报时间 ${typeUnix13}`,
  // 集中器
  concentrator: '集中器',
  concentratorCode: `集中器编号 ${typeString}`,
  // 物联网表
  nblot: '物联网表',
  nblotCode: `表编号 ${typeString}`,
  onLineStatus: `在线状态 ${typeNumber} 0:已离线 1:在线`,
  uploadStatus: `数据上传状态 ${typeNumber} 0:失败 1:成功`,
  // 责任部门（或责任人）
  duty: '责任部门（或责任人）',
  department: `部门 ${typeString}`,
  name: `姓名 ${typeString}`,
  phone: `办公电话 ${typeString}`,
  tel: `手机号码 ${typeString}`,
  email: `电子邮箱 ${typeString}`,
  // 指令
  directive: '指令',
  directiveCode: `指令编号 ${typeString}`,
  directiveType: `指令类型 ${typeString}`,
  directiveStatus: `指令状态 ${typeString} eg.用户已支付 / 费用已上表 等`,
  directiveStep: `指令阶段 从小标0开始 ${typeNumber}`,
};
export default fields;
