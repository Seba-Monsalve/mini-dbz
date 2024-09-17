import { orderItems, raceFilter, teamFilter } from "../data/filter-data";
import { useStore } from "../store/store";

export const CharacterFilters = () => {

    const {setFilters,filters,setOrderBy,setAsc,asc} = useStore()

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        const newFilters = { ...filters }
        if (value == "todos") {
            delete newFilters[name]
        }
        else
            newFilters[name] = value;
        setFilters(newFilters)
    }

    const onChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrderBy(event.target.value)
    }
    return (

        <div className="flex flex-row p-2 items-center gap-10 justify-center   w-full ">
            <label htmlFor="race" className=""> Raza
                <br />
                <select name="race" id="race"
                    onChange={(e) => onSelect(e)} >
                    <option value="todos" selected>Todos</option>
                    {raceFilter.map(a =>
                        <option key={a}
                            value={a}>
                            {a}
                        </option>)}
                </select>
            </label>

            <label htmlFor="affiliation"> Equipo
                <br />
                <select name="affiliation" id="affiliation"
                    onChange={(e) => onSelect(e)} >
                    <option value="todos" selected>Todos</option>
                    {teamFilter.map(a =>
                        <option key={a}
                            value={a}>
                            {a}
                        </option>)}
                </select>
            </label>

            <label htmlFor="order"> Ordenar
                <br />
                <select name="order" id="order"
                    onChange={(e) => onChangeSort(e)} >
                    {orderItems.map(a =>
                        <option key={a}
                            value={a}>
                            {a}
                        </option>)}
                </select>
            </label>
            <label htmlFor="asc"> Ascendente <br />
                <input type="checkbox" name="asc" id="asc" onChange={() => {
                    setAsc(asc)
                }} />
            </label>
        </div>
    )
}
