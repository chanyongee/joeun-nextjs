export default function Layout({
  environment,
  strategy,
  small,
  post,
}: {
  environment: React.ReactNode
  strategy: React.ReactNode
  small: React.ReactNode
  post: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-24">
      {environment}
      {strategy}
      {small}
      {post}
    </div>
  )
}
