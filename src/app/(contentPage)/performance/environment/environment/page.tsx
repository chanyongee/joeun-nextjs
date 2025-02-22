'use client'
import data from '@/app/assets/data/performance/environment/environment.js'
import { PerformanceCardList } from '@/app/ui/performance/PerformanceCardList'
import { PageTitle } from '@/app/ui/PageTitle'
import { readData } from '@/lib/db'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const fetchData = async () => {
      const logs = await readData()
      console.log(logs)
    }
    fetchData()
  }, [])
  const { title, body } = data
  return (
    <>
      <PageTitle title={title} />
      <PerformanceCardList data={body} />
    </>
  )
}
