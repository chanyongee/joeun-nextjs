export default function Layout({
  disaster,
  review,
  small,
}: {
  disaster: React.ReactNode
  review: React.ReactNode
  small: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-24">
      {disaster}
      {review}
      {small}
    </div>
  )
}
