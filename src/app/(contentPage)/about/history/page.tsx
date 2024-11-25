'use client'
import { history } from '@/app/assets/data/history'
import { HistoryItem } from '@/app/(contentPage)/about/history/HistoryItem'
import { useLayoutEffect, useState } from 'react'

export default function AboutHistoryPage() {
  const [lastKnownScrollPosition, setLastKnownScrollPosition] = useState(0)
  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    setLastKnownScrollPosition(window.scrollY)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = () => setLastKnownScrollPosition(window.scrollY)

  return (
    <div className="w-full pb-[20rem]">
      <h1 className="mb-8 whitespace-pre-line text-center text-4xl font-semibold leading-[1.3]">
        {`㈜좋은이엔지가
        걸어온 발자취입니다.`}
      </h1>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#d8d8d5]"></div>
        <div
          className="absolute left-1/2 top-0 w-[2px] bg-[#6e6b70]"
          style={{ height: `${lastKnownScrollPosition}px` }}
        ></div>
        {history.map((item, idx) => (
          <HistoryItem isOdd={idx % 2 === 0} key={idx} item={item} />
        ))}
      </div>
    </div>
  )
}
