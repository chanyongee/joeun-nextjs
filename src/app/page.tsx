export default function Home() {
  return (
    <main>
      <video
        className="absolute top-0 h-full w-full object-cover"
        src="/landing.mp4"
        autoPlay
        muted
        playsInline
      ></video>
      <div className="absolute top-[calc(50%+1rem)] text-white">
        <h1 className="flex flex-col text-5xl">
          <div>BUILD VALUE</div>
          <div>TOGETHER</div>
        </h1>
        <h2>
          Sustainable Business & Unlimited Innovation With Joeun Engineering
        </h2>
      </div>
    </main>
  )
}
