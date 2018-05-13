import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';
import { apiCustom, apiDataMonitor, apiCompany, typeNumber } from './mock/fields';

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
    <span style={styles.label}>isSuccessed</span>
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
    <span style={styles.label}>extData</span>
    <span style={styles.type}>[Array]</span>
    <span style={styles.desc} />
  </h3>,
];
// 获取接口描述的函数
const getDesc = (apiSort, apiDesc, apiFormat = getFormat) =>
  [<h2 key="h2-1">{`${apiSort} ${apiDesc}`}</h2>].concat(apiFormat);

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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'KXXX5678',
          company: '四川海力智能燃气示范公司',
          method: '自动',
          status: 1,
          uptime: '2018-04-27 15:51:25',
          duty: {
            department: '技术中心',
            name: '鱼子酱',
            phone: '028-12345678',
            tel: '13912345678',
            email: '12345678@qq.com',
          },
        },
      ],
    },
  },
  // 获取集中器列表
  'GET /api/fetchconcentrator': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'JXXX5678',
          company: '四川海力智能燃气示范公司',
          card: '正常',
          cardtime: '2018-04-27 15:51:25',
          online: '在线',
          fact: 41,
          plan: 50,
          address: '四川省成都市成华区崔家店路 附102号',
        },
      ],
    },
  },
  // 获取扩频表 > 发货记录列表
  'GET /api/fetchshipping': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'KXXX5678',
          company: '四川海力智能燃气示范公司',
          express: '顺丰快递',
          expressid: 'SF12345678',
          expresstime: '2018-04-27 15:51:25',
          status: '正常',
        },
      ],
    },
  },
  // 获取物联网表 > 物联网表列表
  'GET /api/fetchnblot': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'WXXX5678',
          company: '四川海力智能燃气示范公司',
          online: '在线',
          status: '成功',
          time: '2018-04-27 15:51:25',
          duty: {
            department: '技术中心',
            name: '鱼子酱',
            phone: '028-12345678',
            tel: '13912345678',
            email: '12345678@qq.com',
          },
        },
      ],
    },
  },
  // 获取物联网表 > 发货记录列表
  'GET /api/fetchnblotshipping': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'WXXX5678',
          company: '四川海力智能燃气示范公司',
          express: '顺丰快递',
          expressid: 'SF12345678',
          expresstime: '2018-04-27 15:51:25',
          status: '正常',
        },
      ],
    },
  },
  // 获取异常报警 > 扩频表列表
  'GET /api/fetchunusualspread': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'KXXX5678',
          company: '四川海力智能燃气示范公司',
          method: '异常关阀',
          num: 2,
          datetime: '2018-04-27 15:51:25',
          status: '正常',
        },
      ],
    },
  },
  // 获取异常报警 > 物联网表列表
  'GET /api/fetchunusualnblot': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'WXXX5678',
          company: '四川海力智能燃气示范公司',
          method: '充值失败',
          num: 1,
          datetime: '2018-04-27 15:51:25',
          status: '正常',
        },
      ],
    },
  },
  // [业务数据监控]
  // 获取扩频表 > 扩频表列表
  'GET /api/fetchdataspread': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'KXXX1234',
          company: '四川海力智能燃气示范公司',
          method: '自动',
          status: 1,
          uptime: '2018-04-27 15:51:25',
          duty: {
            department: '技术中心',
            name: '鱼子酱',
            phone: '028-12345678',
            tel: '13912345678',
            email: '12345678@qq.com',
          },
        },
      ],
    },
  },
  // 获取集中器列表
  'GET /api/fetchdataconcentrator': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'JXXX1234',
          company: '四川海力智能燃气示范公司',
          card: '正常',
          cardtime: '2018-04-27 15:51:25',
          online: '在线',
          fact: 41,
          plan: 50,
          address: '四川省成都市成华区崔家店路 附102号',
        },
      ],
    },
  },
  // 获取物联网表 > 物联网表列表
  'GET /api/fetchdatanblot': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          id: 'WXXX1234',
          company: '四川海力智能燃气示范公司',
          online: '在线',
          status: '成功',
          time: '2018-04-27 15:51:25',
          duty: {
            department: '技术中心',
            name: '鱼子酱',
            phone: '028-12345678',
            tel: '13912345678',
            email: '12345678@qq.com',
          },
        },
      ],
    },
  },
  // 更新配置
  'POST /api/spread/fetchconfig': {
    $desc: getDesc(apiDataMonitor, '更新配置'),
    $params: {},
    $body: {
      isSuccessed: true,
      message: '已保存配置',
      extData: [],
    },
  },
  // [燃气公司运营]
  // 获取公司列表
  'GET /api/fetchdatacompany': {
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
    $body: {
      isSuccessed: true,
      message: '获取数据成功',
      extData: [
        {
          companyCode: 'CXXX1234',
          company: '四川海力智能燃气示范公司',
          sysname: 'HL-6',
          version: '6.0',
          updatetime: '2018-04-27 15:51:25',
          status: '正常',
        },
      ],
    },
  },
};

export default (noProxy ? {} : delay(proxy, 1500));
