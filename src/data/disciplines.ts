export type DisciplineSlug = 'shan' | 'yi' | 'ming' | 'xiang' | 'bu';

export interface Discipline {
  slug: DisciplineSlug;
  name: string;
  pinyin: string;
  tagline: string;
  summary: string;
  status: '首期建设' | '规划中';
  sections: string[];
  focus: string;
}

export const disciplines: Discipline[] = [
  {
    slug: 'shan',
    name: '山',
    pinyin: 'Shān',
    tagline: '养生 · 导引 · 内丹',
    summary:
      '从身体与心性的修炼传统切入，梳理养生、导引、吐纳、内丹、武术与符箓文化的源流和边界。',
    status: '规划中',
    sections: [
      '山术概览',
      '养生与食饵',
      '导引与吐纳',
      '内丹与武术',
      '符箓文化',
      '典籍与人物',
      '学习路径',
    ],
    focus: '首期不展开修炼操作，以文献、历史与安全边界为主。',
  },
  {
    slug: 'yi',
    name: '医',
    pinyin: 'Yī',
    tagline: '藏象 · 经络 · 诊法',
    summary:
      '以藏象、经络、气血为核心，搭起中医基础理论、诊法、本草方剂与经典阅读的学习框架。',
    status: '首期建设',
    sections: [
      '医的总览',
      '阴阳五行与藏象',
      '气血津液与经络',
      '诊法：望闻问切',
      '本草与方剂',
      '针灸与推拿',
      '经典选读',
      '学习路径',
    ],
    focus: '首期目标：完成一条从总览到经典选读的纵向切片，不提供诊疗建议。',
  },
  {
    slug: 'ming',
    name: '命',
    pinyin: 'Mìng',
    tagline: '干支 · 八字 · 紫微',
    summary:
      '从干支与历法出发，理解四柱八字、十神、大运流年、紫微斗数与七政四余的推演结构。',
    status: '规划中',
    sections: [
      '命理概览',
      '干支与历法',
      '四柱八字',
      '十神与格局',
      '大运流年',
      '紫微斗数',
      '七政四余',
      '学习路径',
    ],
    focus: '以文化史和推演规则为主，不做确定性预测。',
  },
  {
    slug: 'xiang',
    name: '相',
    pinyin: 'Xiàng',
    tagline: '面相 · 风水 · 罗盘',
    summary:
      '分为相人与相地：面相、手相骨相，以及形势、理气、罗盘与阳宅的基础语言。',
    status: '规划中',
    sections: [
      '相术概览',
      '面相',
      '手相与骨相',
      '风水形势',
      '风水理气',
      '罗盘与二十四山',
      '典籍与案例',
      '学习路径',
    ],
    focus: '面相不做外貌或人格评判；风水以文献和空间观念解读为主。',
  },
  {
    slug: 'bu',
    name: '卜',
    pinyin: 'Bǔ',
    tagline: '周易 · 六爻 · 奇门',
    summary:
      '以《周易》为根，梳理六十四卦、六爻、梅花易数、六壬、奇门遁甲与太乙的方法谱系。',
    status: '规划中',
    sections: [
      '易学概览',
      '六十四卦',
      '六爻',
      '梅花易数',
      '六壬',
      '奇门遁甲',
      '太乙',
      '学习路径',
    ],
    focus: '首期计划：六十四卦浏览器与卦爻结构入门。',
  },
];

export function getDiscipline(slug: string): Discipline | undefined {
  return disciplines.find((discipline) => discipline.slug === slug);
}
