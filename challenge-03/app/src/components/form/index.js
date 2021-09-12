import React, { useState } from 'react';

import { URL } from '../../service'

import './styles.css';

export function Form({ updateTable }) { 
  const [data, setData] = useState({
    image: '',
    brandModel: '',
    plate: '',
    year: '',
    color: '#ffffff',
  })

  async function handleSubmit(e) { 
    e.preventDefault();

    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() =>{
        updateTable();
        setData({
          image: '',
          brandModel: '',
          plate: '',
          year: '',
          color: '#ffffff',
        })
      })
      .catch(e => ({ error: true, message: e.message }))


  }

  function handleInput(field, value) {
    setData((s) => ({ ...s, [field]: value }));
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">Imagem</label>
      <input 
        type="text"
        name="image"
        id="image"
        placeholder="URL da imagem"
        onChange={(e) =>handleInput('image', e.target.value)}
        value={data.image}
      />

      <label htmlFor="brandModel">Marca/Modelo</label>
      <input 
        type="text"
        name="brandModel"
        id="brandModel"
        placeholder="Marca e modelo do carro"
        required
        onChange={(e) =>handleInput('brandModel', e.target.value)}
        value={data.brandModel}
      />

      <label htmlFor="plate">Placa</label>
      <input 
        type="text"
        name="plate"
        id="plate"
        placeholder="ABC-1234"
        pattern="[A-Z]{3}-[0-9]{4}"
        required 
        onChange={(e) =>handleInput('plate', e.target.value)}
        value={data.plate}
      />

      <label htmlFor="year">Ano</label>
      <input 
        name="year"
        id="year"
        placeholder="Ano de fabricação do carro"
        required
        onChange={(e) =>handleInput('year', e.target.value)}  
        value={data.year}
      />

      <label htmlFor="color">Cor</label>
      <input
       type="color"
       id="color"
       name="color"
       required
       onChange={(e) =>handleInput('color', e.target.value)} 
       value={data.color}
      />

      <button type='submit'>
        Enviar
      </button>
    </form>
  )
}