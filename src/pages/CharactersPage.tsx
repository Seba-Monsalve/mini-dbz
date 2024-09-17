import { useEffect } from 'react';
import { SearchBar } from '../components/SearchBar';
import { getData } from '../plugins/ApiRequest';
import { useStore } from '../store/store';
import { CharacterList } from '../components/CharacterList';

export const CharactersPage = () => {

    
  const {asc,filters,characters,orderBy,setCharacters} = useStore();

  useEffect(() => {
    getData('characters',10).then(a => setCharacters(a.items))
  }, []
  )

  return (
    <>
    <SearchBar />
    
    <CharacterList characters={characters} filters={filters} order={orderBy} asc={asc} />


    </>
  )
}
