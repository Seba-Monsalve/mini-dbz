import { useEffect } from "react"
import { getData } from "../plugins/ApiRequest"
import { useStore } from "../store/store"
import { WorldCard } from "../components"

export const WorldPage = () => {

  const { worlds, setWorlds } = useStore()

  useEffect(() => {
    const data = getData('planets').then(res => setWorlds(res.items))
    console.log(data);
  }, [])

  return (
    <div className="flex p-3 gap-2 bg-gray-600">
      {worlds.map((world) => <WorldCard world={world} />
      )}
    </div>

  )


}
