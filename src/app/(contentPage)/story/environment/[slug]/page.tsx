export default async function Page() {
  return <div></div>
}

export async function generateStaticParams() {
  return [
    { slug: 'environment' },
    { slug: 'post' },
    { slug: 'strategy' },
    { slug: 'small' },
  ]
}
