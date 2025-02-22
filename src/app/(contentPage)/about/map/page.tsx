'use client'
import Image from 'next/image'
import { requestStaticMap } from '@/lib/map'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { PageTitle } from '@/app/ui/PageTitle'

export default function Page() {
  const WIDTH = typeof window === 'undefined' ? 0 : window.innerWidth
  const HEIGHT = 600

  const numbers = [
    {
      icon: new URL('@/app/assets/icons/phone.svg', import.meta.url).href,
      number: '043)845-9005',
    },
    {
      icon: new URL('@/app/assets/icons/fax.svg', import.meta.url).href,
      number: '043)845-9077',
    },
  ]
  return (
    <section className="flex w-full flex-col gap-8">
      <PageTitle title="오시는 길" />
      <div className="relative self-center">
        <Image
          src={requestStaticMap(WIDTH, HEIGHT)}
          alt="map"
          width={WIDTH}
          height={HEIGHT}
        />
        <Link
          href="https://map.naver.com/p/search/%EA%B8%88%EB%A6%89%EB%8F%99%20154-9/address/14240656.956581306,4438492.233388647,%EC%B6%A9%EC%B2%AD%EB%B6%81%EB%8F%84%20%EC%B6%A9%EC%A3%BC%EC%8B%9C%20%EA%B8%88%EB%A6%89%EB%8F%99%20154-9,jibun?c=19.00,0,0,0,dh&isCorrectAnswer=true"
          target="_blank"
        >
          <div className="absolute left-4 top-4 flex flex-col gap-1 rounded-xl border-[1px] border-gray-200 bg-white px-6 py-4">
            (주)좋은이엔지
            <div className="text-base font-light text-blue-400 underline">
              네이버지도로 보기
            </div>
          </div>
        </Link>
      </div>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-light">충주 본사</h2>
        <Separator />
        <section className="flex flex-col gap-4">
          <p>충청북도 충주시 응골1길 37-6</p>
          <section className="flex gap-8 text-2xl">
            {numbers.map((item, idx) => (
              <section key={idx} className="flex items-center gap-4">
                <Image src={item.icon} alt="icon" width={20} height={20} />
                <p>{item.number}</p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  )
}
