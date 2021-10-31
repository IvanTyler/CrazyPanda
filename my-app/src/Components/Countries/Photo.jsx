import style from './Photo.module.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountriesData } from '../../redux/actions/countriesAc'
import PhotoItem from '../CountriesItem/PhotoItem'
import Pagination from './Pagination'

function Countries() {
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPerPage] = useState(4)

    const dispatch = useDispatch()
    const countriesData = useSelector((state) => state.countriesData.countriesData)
    console.log('state >>>', countriesData);
    useEffect(() => {
        dispatch(getCountriesData())
    }, [])


    const lastCountriesIndex = currentPage * currentPerPage
    console.log('lastCountriesIndex', lastCountriesIndex);
    const firstCountriesIndex = lastCountriesIndex - currentPerPage
    console.log('firstCountriesIndex', firstCountriesIndex);

    const currentCountries = countriesData.slice(firstCountriesIndex, lastCountriesIndex)
    console.log('currentCountries>>', currentCountries)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const prevPage = () => setCurrentPage(prev => prev - 1)
    const nextPage = () => setCurrentPage(prev => prev + 1)

    return (
        <>
            <ul className={style.countriesList}>
                {
                    currentCountries.length ?
                        currentCountries.map(el =>
                            <PhotoItem
                                key={el.id}
                                title={el.title}
                                thumbnailImg={el.thumbnailUrl}
                            />
                        ) :
                        <p> Данных нет</p>
                }
            </ul>
            <Pagination
                currentPerPage={currentPerPage}
                totalCountries={countriesData.length}
                paginate={paginate}
            />
            <div className={style.wrapperButtonPage}>
                <button className={style.buttonPage} onClick={prevPage}>prev</button>
                <button className={style.buttonPage} onClick={nextPage}>next</button>
            </div>
        </>
    )
}

export default Countries