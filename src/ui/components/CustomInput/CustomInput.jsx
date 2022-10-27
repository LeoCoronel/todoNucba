import React from 'react'

const CustomInput = () => {
  return (
    <form className='form'>
        <input type="text" name="todo" id="todo" className='form__input' />
        <button type="submit" className='form__btn'>Agregar</button>
    </form>
  )
}

export default CustomInput