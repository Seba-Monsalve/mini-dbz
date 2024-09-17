import { World } from "../interfaces"


interface Props {
    world: World
}
export const WorldCard = ({ world }: Props) => {

    const {  image, name, isDestroyed } = world
    return (
        <div className="flex flex-col flex-wrap items-center justify-center rounded-xl bg-black px-1 py-2  border-2 transition-all 
        hover:scale-x-125 hover:scale-y-110 hover:cursor-pointer">
            <img className="  h-[300px] w-[200px] object-cover" src={image} alt="" />
            <p>{name}</p>
            <p className={`${isDestroyed ? 'bg-red-600' : 'bg-green-400'} px-2 py-1`}>{isDestroyed ? 'Destruido' : 'Vigente'}</p>
        </div>
    )
}
