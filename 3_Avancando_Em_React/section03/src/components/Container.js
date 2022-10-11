const Container = ({children}) => {
  return (
    <div>
        <h2>Este é o título do Container</h2>
        {/* essa é a forma que temos de abraçar um conteúdo com o componente 
        A peculiaridade se da pelo fato da gente ter que sempre passar as props de forma fragmentada*/}
        {children}
    </div>
  )
}

export default Container