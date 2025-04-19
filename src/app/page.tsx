export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 min-w-0 break-words">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex flex-col gap-4 w-full h-full bg-neutral-100 rounded-xl p-4 min-w-0 break-words">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p>Dashboard content goes here</p>
      </div>
    </div>
  );
}
