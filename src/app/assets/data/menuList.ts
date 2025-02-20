export type MenuItem = {
  title: string
  to?: string
  children?: MenuItem[]
}

export const menuList: MenuItem[] = [
  {
    title: '회사소개',
    to: '/about',
    children: [
      {
        title: '회사소개',
        to: '/about',
      },
      {
        title: '주요연혁',
        to: '/about/history',
      },
      {
        title: '면허현황',
        to: '/about/licenses',
      },
      {
        title: '조직도',
        to: '/about/hierarchy',
      },
      {
        title: '오시는길',
        to: '/about/map',
      },
    ],
  },
  {
    title: '사업영역',
    to: '/story/environment',
    children: [
      {
        title: '환경영향평가',
        to: '/story/environment',
        children: [
          {
            title: '소개',
            to: '/story/environment',
          },
          {
            title: '환경영향평가',
            to: '/story/environment/environment',
          },
          {
            title: '전략환경영향평가',
            to: '/story/environment/strategy',
          },
          {
            title: '소규모환경영향평가',
            to: '/story/environment/small',
          },
          {
            title: '사후환경영향조사',
            to: '/story/environment/post',
          },
        ],
      },
      {
        title: '재해영향평가',
        to: '/story/disaster',
        children: [
          {
            title: '소개',
            to: '/story/disaster',
          },
          {
            title: '재해영향평가',
            to: '/story/disaster/disaster',
          },
          {
            title: '소규모재해영향평가',
            to: '/story/disaster/small',
          },
          {
            title: '재해영향성검토',
            to: '/story/disaster/review',
          },
        ],
      },
      {
        title: '엔지니어링 (도시설계진단)',
        to: '/story/engineering/urban-planning',
        children: [
          {
            title: '도시계획',
            to: '/story/engineering/urban-planning',
          },
          {
            title: '조경설계',
            to: '/story/engineering/landscape',
          },
          {
            title: '토목설계 및 감리',
            to: '/story/engineering/civil',
          },
          {
            title: '안전진단',
            to: '/story/engineering/safety-diagnosis',
          },
        ],
      },
      {
        title: '종합건설',
        to: '',
        children: [
          {
            title: '토목공사',
            to: '',
          },
          {
            title: '건축공사',
            to: '',
          },
          {
            title: '조경',
            to: '',
          },
          {
            title: '전기',
            to: '',
          },
        ],
      },
      {
        title: '환경공사관리(인허가)',
        to: '/story/permission/environment',
        children: [
          {
            title: '환경인허가',
            to: '/story/permission/environment',
          },
          {
            title: '환경전문공사(수질대기) 및 수질환경관리',
            to: '/story/permission/water',
          },
          {
            title: '수질측정기기관리',
            to: '/story/permission/water-measurement',
          },
        ],
      },
    ],
  },
  {
    title: '사업실적',
    to: '/performance/environment/environment',
    children: [
      {
        title: '환경영향평가',
        to: '/performance/environment/environment',
        children: [
          {
            title: '환경영향평가',
            to: '/performance/environment/environment',
          },
          {
            title: '전략환경영향평가',
            to: '/performance/environment/strategy',
          },
          {
            title: '소규모환경영향평가',
            to: '/performance/environment/small',
          },
          {
            title: '사후환경영향조사',
            to: '/performance/environment/post',
          },
        ],
      },
      {
        title: '재해영향평가',
        to: '/performance/disaster/disaster',
        children: [
          {
            title: '재해영향평가',
            to: '/performance/disaster/disaster',
          },
          {
            title: '소규모재해영향평가',
            to: '/performance/disaster/small',
          },
          {
            title: '재해영향성검토',
            to: '/performance/disaster/review',
          },
        ],
      },
      {
        title: '엔지니어링 (도시설계진단)',
        to: '/performance/engineering/urban-planning',
        children: [
          {
            title: '도시계획',
            to: '/performance/engineering/urban-planning',
          },
          {
            title: '조경설계',
            to: '/performance/engineering/landscape',
          },
          {
            title: '전기설계 및 감리',
          },
          {
            title: '토목설계 및 감리',
            to: '/performance/engineering/civil',
          },
          {
            title: '안전진단',
            to: '/performance/engineering/safety-diagnosis',
          },
        ],
      },
      {
        title: '환경공사관리(인허가)',
        to: '/performance/permission/environment',
        children: [
          {
            title: '환경인허가',
            to: '/performance/permission/environment',
          },
          {
            title: '환경전문공사(수질대기) 및 수질환경관리',
            to: '/performance/permission/water',
          },
          {
            title: '수질측정기기관리',
            to: '/performance/permission/water-measurement',
          },
        ],
      },
    ],
  },
]
