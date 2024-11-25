import { cn } from '@/lib/utils'
import { type HistoryItemType } from '@/app/assets/data/history'
import { useEffect, useRef, useState } from 'react'

export const HistoryItem = ({
  item,
  isOdd,
}: {
  item: HistoryItemType
  isOdd: boolean
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.7) {
            setVisible(true)
          } else if (entry.intersectionRatio === 0) {
            setVisible(false)
          }
        })
      },
      {
        threshold: [0, 0.7],
      },
    )

    io.observe(itemRef.current as Element)

    return () => {
      io.disconnect()
    }
  }, [])

  return (
    <div
      className={cn(
        'relative flex flex-col justify-start gap-8',
        isOdd && 'items-end',
      )}
      ref={itemRef}
    >
      <svg
        width="12"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        className="z-1 absolute left-1/2 top-8 -translate-x-1/2"
      >
        <circle cx="6" cy="6" r="5" fill="#6e6b70" />
      </svg>
      <div className="flex w-1/2 flex-col p-6">
        <div
          style={{
            transform: visible
              ? 'translate3d(0, 0, 0)'
              : 'translate3d(0, 4.125rem, 0)',
            transition:
              'border 0.3s ease, opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          className={cn(
            'flex flex-col',
            visible ? 'opacity-1' : 'opacity-0',
            !isOdd && 'items-end',
          )}
        >
          <div
            className={cn(
              'mb-4 w-max text-3xl font-bold text-[#8e8c84]',
              !isOdd && 'text-right',
            )}
          >
            {item.year}
          </div>
          <ul className={cn('flex flex-col gap-2')}>
            {item.months.map(child => (
              <li className="flex gap-2 text-xl" key={child.month}>
                <div className="font-bold text-[#848c8c]">{child.month}</div>
                <div className="flex flex-col gap-2">
                  {child.desc.map(d => (
                    <div className="desc-item" key={d}>
                      {d}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
