import React, { useState } from 'react'
import { useGetCatsQuery } from '../../store/api/apiNews/apiCats'
import CatBreedItem from '../CatBreedItem/CatBreedItem'
import styles from './CatsList.module.css'

const CatsList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    let { data, isLoading } = useGetCatsQuery('')

    const filteredCats = data?.filter((cat: any) =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <section className={styles.cats}>
            {!isLoading && (
                <>
                    <h2 className={styles.cats__title}>cat breeds</h2>
                    <input
                        type="text"
                        placeholder="Search for a cat breed..."
                        className={styles.cats__input}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <ul className={styles.cats__list}>
                        {filteredCats.map((cat: any) => (
                            <li key={cat.id} className={styles.list__item}>
                                <CatBreedItem
                                    newData={data}
                                    breedId={cat.id}
                                    name={cat.name}
                                    button={true}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}

export default CatsList
