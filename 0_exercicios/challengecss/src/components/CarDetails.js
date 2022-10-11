import styles from './CarDetails.module.css';

const CarDetails = ({name, brand, year, km, color}) => {
  return (
    <div className={styles['component_main_div']}>
        <h1 className={styles['component_title']}>{name}</h1>
        <ul className={styles['list_cars']}>
            <li>Marca: {brand}</li>
            <li>Ano: {year}</li>
            <li>Km rodados: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails