'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState } from 'react'
import { GnbItem } from '@/app/ui/navigation/GnbItem'
import Image from 'next/image'
import LogoImage from '@/app/assets/images/joeun_logo.svg'
import { cn } from '@/lib/utils'
import { menuList } from '@/app/assets/data/menuList'
import { Lnb } from '@/app/ui/navigation/Lnb'

export default function Gnb() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState('')
  const lnbContent = menuList.find(menu => menu.title === hoveredMenu)

  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
    setHoveredMenu('')
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      const data = e.target.dataset.title
      if (data) {
        setHoveredMenu(data)
      }
    }
  }

  return (
    <Collapsible open={isOpen}>
      <CollapsibleTrigger
        className={cn(
          'flex-column relative z-10 flex h-[6.8rem] w-full',
          !!lnbContent && 'bg-whiteAlpha',
        )}
        onMouseEnter={open}
        onMouseMove={onMouseMove}
      >
        <GnbItem className="basis-1/7" to="/">
          <Image src={LogoImage} alt="company logo" className="flex" />
        </GnbItem>
        <GnbItem title="회사소개" to="/about" />
        <GnbItem title="사업영역" to="/story/environment" />
        <GnbItem title="사업실적" to="/performance/environment" />
      </CollapsibleTrigger>
      <CollapsibleContent onMouseLeave={close}>
        {!!isOpen && lnbContent && <Lnb content={lnbContent} />}
      </CollapsibleContent>
    </Collapsible>
  )
}
