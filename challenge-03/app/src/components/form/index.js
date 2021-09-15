import React, { useState } from 'react';

import { URL } from '../../service'

import * as S from './styles'

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
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="image">Imagem</S.Label>
      <input 
        type="text"
        name="image"
        id="image"
        placeholder="URL da imagem"
        onChange={(e) =>handleInput('image', e.target.value)}
        value={data.image}
      />

      <S.Label htmlFor="brandModel">Marca/Modelo</S.Label>
      <input 
        type="text"
        name="brandModel"
        id="brandModel"
        placeholder="Marca e modelo do carro"
        required
        onChange={(e) =>handleInput('brandModel', e.target.value)}
        value={data.brandModel}
      />

      <S.Label htmlFor="plate">Placa</S.Label>
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

      <S.Label htmlFor="year">Ano</S.Label>
      <input 
        name="year"
        id="year"
        placeholder="Ano de fabricação do carro"
        required
        onChange={(e) =>handleInput('year', e.target.value)}  
        value={data.year}
      />

      <S.Label htmlFor="color">Cor</S.Label>
      <input
       type="color"
       id="color"
       name="color"
       required
       onChange={(e) =>handleInput('color', e.target.value)} 
       value={data.color}
      />

      <S.Button type='submit'>
        Enviar
      </S.Button>
    </S.Form>
  )
}