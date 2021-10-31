import style from './Photo.module.css'

function Pagination({ currentPerPage, totalCountries, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCountries / currentPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log('numberLink', pageNumbers)

    return (
        <div>
            <ul className={style.pagination}>
                {
                    pageNumbers.map(number => (
                        <li className={style.pageItem} key={number}>
                            <a href="#" className={style.pageLink} onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination