import style from './PhotoItem.module.css'

function PhotoItem({ title, thumbnailImg }) {
    return (
        <li className={style.photoItem}>
            <h3 className={style.title}>{title}</h3>
            <img className={style.image} src={thumbnailImg} alt={{title}} />
        </li>
    )
}

export default PhotoItem