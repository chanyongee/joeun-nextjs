import AboutUsImage from '@/app/assets/images/about_us.webp'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-row gap-4">
      <section className="flex flex-grow basis-0 flex-col gap-8 whitespace-pre-line">
        <h1 className="mb-8 text-[2rem] font-bold leading-[1.3] tracking-[-1px]">{`동반자적 파트너십을 지향하는
  기술력 중심의 엔지니어링 컨설팅`}</h1>
        <p className="leading-[1.7]">
          {`㈜좋은이엔지는 최고 수준의 종합 엔지니어링 컨설팅 기업입니다. 2000년부터 환경 분야를 시작으로 토목감리/종합설계, 공공측량, 재해/방재, 개발 컨설팅 분야까지 다양한 분야에서 경험과 기술력을 축적해 왔습니다.

  20년 이상의 다양한 경험과 기술력으로 체육시설, 석산, 산업단지, 군부대 시설 등을 대상으로 환경영향평가법/자연재해대책법에 따른 평가서 작성 및 협의를 통해 사업자가 원활한 사업을 진행할 수 있도록 지원하고 있습니다.

  또한, 공공측량부터 도시계획 및 단지설계, 토목감리와 수질·대기오염 방지 시설 설계/시공 등의 원스톱 업무처리를 통해 지출을 줄이고 관리의 효율성을 높이며 신속한 과업의 진행이 가능할 수 있도록 도와드리는 것을 사념으로 조직을 운영하고 있습니다.

  저희는 환경이 보전되면서도 경제적이며 풍요로운 삶을 후손들에게 전달하기 위해 항상 최선을 다하고 있습니다. 앞으로도 신지식의 습득과 새로운 평가기법의 개발을 통해 더욱 발전하고, 고객의 만족을 위해 최선을 다할 것을 약속드립니다.`}
        </p>
        <div className="text-base">대표이사 김 주 식</div>
      </section>
      <section className="flex-grow basis-0">
        <Image src={AboutUsImage} alt="about us" />
      </section>
    </div>
  )
}
