export function Table({ cars, handleDeleteCar }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca/Model</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
          <th>Ação</th>
        </tr>
      </thead>

      <tbody>
        {cars.length > 0 ? 
          cars.map(car => (
            <tr>
              <td>{car.image}</td>
              <td>{car.brandModel}</td>
              <td>{car.year}</td>
              <td>{car.plate}</td>
              <td>{car.color}</td>
              <td>
                <button onClick={() => handleDeleteCar(car.plate)}>Excluir</button>
              </td>
            </tr>
        )) : (
          <tr>
            <td>Nenhum carro cadastrado</td>
          </tr>
        )}
      </tbody>
  </table>
  )
}