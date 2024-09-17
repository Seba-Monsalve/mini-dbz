import { Character } from '../interfaces';
import { CharacterCard } from './CharacterCard';

interface Props {
    filters: { [key: string]: string |undefined},
    characters: Character[],
    order: string,
    asc: number


}

export const CharacterList = ({ filters, characters, order, asc }:Props) => {
    return (

        <div className="flex justify-center items-center gap-2">
            {
                characters.filter(c => {
                    for (let key in filters) {
                        if ((c[key] === undefined || c[key] !== filters[key])) {
                            return false
                        }
                    }
                    return true
                }
                ).sort((a, b) => {
                    if (a[order] < b[order]) return -1 * asc
                    if (a[order] > b[order]) return 1 * asc
                    return 0
                }
                ).map(character =>
                    <CharacterCard key={character.id} character={character} />
                )
            }
            {
                characters.filter(c => {
                    for (let key in filters) {
                        if ((c[key] === undefined || c[key] !== filters[key])) {
                            return false
                        }
                    }
                    return true
                }
                ).length === 0 && 'No hay resultados'
            }
        </div>
    )
}
