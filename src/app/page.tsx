import { Songcard } from "@/components/Songcard";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
      <div className="my-8">
        <Songcard/>
      </div>
    </div>
  )
}
