import { EnterpriseUpdate } from './types';

export const ENTERPRISE_UPDATES: EnterpriseUpdate[] = [
  {
    id: '1',
    companyName: '杭州云海通达科技',
    level: 'red',
    category: '离园风险',
    content: '注册资本从3000万直接缩减到100万，减少96%，且已退规。',
    analysis: '这是最强的离园风险信号。资本大幅缩减通常意味着业务收缩或准备注销。',
    actionSuggestion: '今天就要打电话确认企业现状，了解是否有迁址或注销意向，评估对园区的影响。',
    tags: ['资本缩减', '退规', '高风险']
  },
  {
    id: '2',
    companyName: '杰华特微电子',
    level: 'red',
    category: '战略收缩',
    content: '主动降低对外投资持股比例，从50%降至39.67%，不再是大股东。',
    analysis: '这可能是在收缩战线、集中资源。',
    actionSuggestion: '需要了解背后原因，是否影响在园区的业务规模和用工。',
    tags: ['投资变动', '股权稀释']
  },
  {
    id: '3',
    companyName: '杭州美库生物医药',
    level: 'red',
    category: '股东变更',
    content: '大股东完全更换，从企业变成合伙企业，背后可能是PE/VC接手。',
    analysis: '股东变更意味着战略方向可能调整。',
    actionSuggestion: '需要尽快与新股东建立联系，了解新股东对园区的态度。',
    tags: ['大股东变更', '资本运作']
  },
  {
    id: '4',
    companyName: '西湖数智科技',
    level: 'yellow',
    category: '融资扩张',
    content: '刚完成天使轮融资。',
    analysis: '处于扩张期，是最好的拜访时机。',
    actionSuggestion: '可以谈空间扩租、人才政策、配套服务，对话质量最高。',
    tags: ['天使轮', '融资成功']
  },
  {
    id: '5',
    companyName: '西湖智能视觉科技',
    level: 'yellow',
    category: '国际化',
    content: '刚参加慕尼黑国际光博会，有国际化动作。',
    analysis: '积极参与国际展会，显示出强烈的市场拓展意愿。',
    actionSuggestion: '可以跟进展会收获，了解是否有新合作意向，顺带推介园区的国际化企业服务资源。',
    tags: ['国际展会', '技术出海']
  },
  {
    id: '6',
    companyName: '杭州云深处科技',
    level: 'yellow',
    category: '出海成功',
    content: '智慧巡检方案落地美国加州，是出海成功案例。',
    analysis: '这是一个绝佳的对外宣传素材。',
    actionSuggestion: '可以邀请企业参与园区品牌活动，同时了解出海过程中是否需要园区协助对接资源。',
    tags: ['海外落地', '品牌宣传']
  },
  {
    id: '7',
    companyName: '唯铂莱生物科技',
    level: 'yellow',
    category: '产学研合作',
    content: '与南昌大学签署战略合作，产学研动作活跃。',
    analysis: '通过校企合作提升研发能力。',
    actionSuggestion: '可以了解合作进展，园区是否能提供产学研对接或实验室资源支持。',
    tags: ['校企合作', '研发升级']
  },
  {
    id: '8',
    companyName: '阿里云',
    level: 'green',
    category: '业绩强劲',
    content: '季度收入432亿、同比增长36%，AI业务强劲。',
    analysis: '体量太大，园区能提供的直接服务有限。',
    actionSuggestion: '可以关注其本地生态合作机会，以及通义云启在园区内的AI应用落地可能性。',
    tags: ['AI业务', '生态合作']
  },
  {
    id: '9',
    companyName: '浙创邻科技',
    level: 'green',
    category: '向外扩张',
    content: '设立深圳子公司，有向外扩张动作。',
    analysis: '业务版图扩大。',
    actionSuggestion: '需要确认总部是否仍留在园区，了解深圳子公司的业务定位是否与本地业务产生冲突。',
    tags: ['子公司', '跨城扩张']
  },
  {
    id: '10',
    companyName: '华大序风科技',
    level: 'green',
    category: '技术突破',
    content: '产品进入非洲市场+国家科技重大专项启动，技术和市场双线推进。',
    analysis: '记录成长轨迹。',
    actionSuggestion: '适时推荐申报相关科技类园区政策。',
    tags: ['非洲市场', '国家专项']
  }
];
