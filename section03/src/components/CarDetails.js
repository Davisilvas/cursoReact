const CarDetails = ({name, brand, year, maxSpeed}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca:{brand}</li>
            <li>Nome:{name}</li>
            <li>Ano:{year}</li>
            <li>Velocidade Máxima:{maxSpeed} Km/h</li>
        </ul>
    </div>
  )
}

export default CarDetails