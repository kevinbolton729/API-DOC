import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';
import {
  apiLogin,
  apiLoginOut,
  apiGetUser,
  apiUpdateUser,
  apiUpdatePwd,
  apiCustom,
  apiDataMonitor,
  apiCompany,
  typeNumber,
  typeString,
  messageSuccess,
  saveSuccess,
  loginSuccess,
  loginOutSuccess,
  updatePwdSuccess,
  updateSuccess,
} from './mock/fields';
// 数据
import {
  spreadData,
  nblotData,
  concentratorData,
  shippingData,
  businessCompanyData,
  unusualData,
  userData,
  dutyParams,
  businessParams,
} from './mock/datas';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 样式
const styles = {
  name: { fontSize: '14px', opacity: 0.7 },
  label: { fontWeight: 'bold', paddingLeft: '10px' },
  type: { color: '#E60', fontWeight: 'bold', paddingLeft: '10px' },
  desc: { paddingLeft: '10px' },
};
// 接口响应Format
const getFormat = [
  <h3 key="h3-1">
    <span style={styles.name}>返回状态:</span>
    <span style={styles.label}>code</span>
    <span style={styles.type}>[Boolean]</span>
    <span style={styles.desc} />
  </h3>,
  <h3 key="h3-2">
    <span style={styles.name}>返回描述:</span>
    <span style={styles.label}>message</span>
    <span style={styles.type}>[String]</span>
    <span style={styles.desc} />
  </h3>,
  <h3 key="h3-3">
    <span style={styles.name}>返回数据:</span>
    <span style={styles.label}>data</span>
    <span style={styles.type}>[Array]</span>
    <span style={styles.desc} />
  </h3>,
];
// 获取接口描述的函数
const getDesc = (apiSort, apiDesc, apiFormat = getFormat) =>
  [<h2 key="h2-1">{`${apiSort} ${apiDesc}`}</h2>].concat(apiFormat);

// 获取接口返回的函数
const getBody = (opts, code = true) => ({
  code,
  message: opts.message || messageSuccess,
  data: opts.data || [],
});

// 代码中会兼容本地 service mock 以及部署站点的静态数据
// "POST /api/forms": (req, res) => {
//   res.send({ message: "Ok" });
// },
// "GET /api/tags": mockjs.mock({
//   "list|100": [{ name: "@city", "value|1-100": 150, "type|0-2": 1 }]
// }),
const proxy = {
  // [客户服务监控]
  // 获取扩频表 > 扩频表列表
  'GET /api/custom/fetchspread': {
    $desc: getDesc(apiCustom, '获取扩频表的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: spreadData }),
  },
  // 获取集中器列表
  'GET /api/custom/fetchconcentrator': {
    $desc: getDesc(apiCustom, '获取集中器的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: concentratorData }),
  },
  // 获取扩频表 > 发货记录列表
  'GET /api/custom/fetchshipping': {
    $desc: getDesc(apiCustom, '获取扩频表:发货记录的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: shippingData }),
  },
  // 获取物联网表 > 物联网表列表
  'GET /api/custom/fetchnblot': {
    $desc: getDesc(apiCustom, '获取物联网表的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: nblotData }),
  },
  // 获取物联网表 > 发货记录列表
  'GET /api/custom/nblot/fetchshipping': {
    $desc: getDesc(apiCustom, '获取物联网表:发货记录的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: shippingData }),
  },
  // 获取异常报警 > 扩频表列表
  'GET /api/custom/unusual/fetchspread': {
    $desc: getDesc(apiCustom, '获取扩频表:异常报警的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: unusualData }),
  },
  // 获取异常报警 > 物联网表列表
  'GET /api/custom/unusual/fetchnblot': {
    $desc: getDesc(apiCustom, '获取物联网表:异常报警的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: unusualData }),
  },
  // [业务数据监控]
  // 获取扩频表 > 扩频表列表
  'GET /api/monitor/fetchspread': {
    $desc: getDesc(apiDataMonitor, '获取扩频表的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: spreadData }),
  },
  // 获取集中器列表
  'GET /api/monitor/fetchconcentrator': {
    $desc: getDesc(apiDataMonitor, '获取集中器的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: concentratorData }),
  },
  // 获取物联网表 > 物联网表列表
  'GET /api/monitor/fetchnblot': {
    $desc: getDesc(apiDataMonitor, '获取物联网的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: nblotData }),
  },
  // 扩频表 - 更新配置
  'POST /api/monitor/spread/fetchconfig': {
    $desc: getDesc(apiDataMonitor, '更新配置'),
    $params: dutyParams,
    $body: getBody({ message: saveSuccess }),
  },
  // 物联网表 - 更新配置
  'POST /api/monitor/nblot/fetchconfig': {
    $desc: getDesc(apiDataMonitor, '更新配置'),
    $params: dutyParams,
    $body: getBody({ message: saveSuccess }),
  },
  // [燃气公司运营]
  // 获取公司列表
  'GET /api/company/fetchcompany': {
    $desc: getDesc(apiCompany, '获取燃气公司的列表数据'),
    $params: {
      pageSize: {
        desc: `每页条数: ${typeNumber}`,
        exp: 20,
      },
      curPage: {
        desc: `当前页码: ${typeNumber}`,
        exp: 1,
      },
    },
    $body: getBody({ data: businessCompanyData }),
  },
  // 更新配置
  'POST /api/company/fetchconfig': {
    $desc: getDesc(apiCompany, '更新配置'),
    $params: businessParams,
    $body: getBody({ message: saveSuccess }),
  },
  // [登录/安全退出]
  // 登录
  'POST /api/admin/loginon': {
    $desc: getDesc(apiLogin, '实现用户登录'),
    $params: {
      userName: {
        desc: `登录用户名: ${typeString}`,
        exp: 'kevin',
      },
      passWord: {
        desc: `登录密码: ${typeString}`,
        exp: '●●●●●●',
      },
    },
    $body: getBody({ message: loginSuccess }),
  },
  // 安全退出
  'POST /api/admin/loginout': {
    $desc: getDesc(apiLoginOut, '实现用户安全退出'),
    $params: {},
    $body: getBody({ message: loginOutSuccess }),
  },
  // 获取登录用户信息（资料）
  'GET /api/admin/getuser': {
    $desc: getDesc(apiGetUser, '获取登录用户信息（资料）'),
    $params: {},
    $body: getBody({ data: userData }),
  },
  // 修改登录密码
  'POST /api/admin/updatepwd': {
    $desc: getDesc(apiUpdatePwd, '修改用户的登录密码'),
    $params: {
      oldpwd: {
        desc: `旧登录密码: ${typeString}`,
        exp: '●●●●●●',
      },
      newpwd: {
        desc: `新登录密码: ${typeString}`,
        exp: '●●●●●●',
      },
    },
    $body: getBody({ message: updatePwdSuccess }),
  },
  // 修改登录用户信息（资料）
  'POST /api/admin/updateuser': {
    $desc: getDesc(apiUpdateUser, '修改登录用户信息（资料）'),
    $params: {
      nickname: {
        desc: `昵称: ${typeString}`,
        exp: 'bolton',
      },
      role: {
        desc: `权限: ${typeNumber}`,
        exp: '1000',
      },
      sex: {
        desc: `性别: ${typeNumber}`,
        exp: '0',
      },
      tel: {
        desc: `手机号码: ${typeString}`,
        exp: '13912345678',
      },
      email: {
        desc: `电子邮箱: ${typeString}`,
        exp: 'example@example.com',
      },
    },
    $body: getBody({ message: updateSuccess }),
  },
};

export default (noProxy ? {} : delay(proxy, 1500));
