import { Character } from "../interfaces"


interface Props {
    character: Character
}
export const CharacterCard = ({ character }: Props) => {

    const { image, affiliation, name, ki, maxKi, race, gender, description, } = character
    return (
        <div className= "group [&:not(:hover)]:text-gray-600 flex flex-col items-center justify-center bg-black transition-all   h-[440px] w-[150px] border-2 hover:scale-110  rounded-xl hover:w-1/3 overflow-hidden  hover:cursor-pointer">
            <img className=" transition-all  object-cover  h-[300px] overflow-hidden" src={image} alt="" />
            <div className="text-center ">
                <p className="text-xl animate-pulse group-hover:animate-none">{name}</p>
                <div className=" hidden group-hover:block ">
                    <p>{race}</p>
                    <p>{gender}</p>
                    <p>{affiliation}</p>
                <p>  KI: {ki} points</p>
                </div>
            </div>

        </div>
    )
}
