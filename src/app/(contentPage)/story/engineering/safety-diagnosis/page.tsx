import { SimpleStoryUpper } from '@/app/ui/story/SimpleStoryUpper'
import { VerboseItemBisect } from '@/app/ui/story/VerboseItemBisect'
import DiagramImage from '@/app/assets/images/안전진단공정도.webp'

export default function Page() {
  const title = '안전진단'
  const desc = `시설물에 대한 물리적 기능적 결함을 조사하고 구조적 안전성 및 손상상태를 점검하여, 재해를 예방하고 시설물의 효용을 증진시켜 공공의 안전을 확보하는데 그 목적을 두고 다양한 안전점검·진단분야 업무를 수행하고 있습니다. 시설물에 내재되어 있는 위험요인이나 시설물 기능 및 성능저하 상태 등을 신속ㆍ정확하게 조사ㆍ평가하고, 그에 대한 적절한 안전조치를 취하여 재해 및 재난을 예방하며, 시설물의 안전성 및 기능성을 보완ㆍ보전케 함으로써 시설물의 효용성을 증진시키는데 힘쓰고 있습니다.`

  const items = [
    {
      title: '안전점검',
      desc: '경험과 기술을 갖춘 자가 육안이나 점검기구 등으로 검사하여 시설물에 내재되어 있는 위험요인을 조사하는 행위를 말하며, 점검목적 및 점검수준을 고려하여 국토교통부령으로 정하는 바에 따라 정기안전점검 및 정밀안전점검으로 구분',
    },
    {
      title: '정밀안전진단',
      desc: '시설물의 물리적ㆍ기능적 결함을 발견하고, 그에 대한 신속하고 적절한 조치를 하기 위하여 구조적 안전성과 결함의 원인 등을 조사ㆍ측정ㆍ평가하여 보수ㆍ보강 등의 방법을 제시하는 행위',
    },
    {
      title: '긴급안전점검',
      desc: '시설물의 붕괴·전도 등으로 인해 재난 또는 재해가 발생할 우려가 있는 경우에 시설물의 물리적·기능적 결함을 신속하게 발견하기 위하여 실시하는 점검',
    },
    {
      title: '내진성능평가',
      desc: '지진으로부터 시설물의 안전성을 확보하고 기능을 유지하기 위하여 「지진·화산재해대책법」제14조(내진설계기준의 설정)제1항에 따라 시설물별로 정하는 내진설계기준에 따라 시설물이 지진에 견딜 수 있는 능력을 평가하는 것',
    },
  ]

  const diagramTitle = '안전진단 공정도'

  return (
    <div className="flex w-full flex-col gap-12">
      <SimpleStoryUpper title={title} desc={desc} link={''} />
      {items.map(item => (
        <VerboseItemBisect
          title={item.title}
          desc={item.desc}
          key={item.title}
        />
      ))}
      <VerboseItemBisect title={diagramTitle} img={DiagramImage} />
    </div>
  )
}
