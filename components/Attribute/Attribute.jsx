import React from 'react'
import style from './Attribute.module.css';
const Attribute = () => {
  return (
    <div className={style.container}>
        <div>
        <input type="radio" name='attribute' className={style.attribute__input} id="one"/>
        <label htmlFor='one' className={style.attribute__label}>Attribute One</label>
        </div>
        <div>

        <input type="radio" name='attribute' className={style.attribute__input} id="two"/>
        <label htmlFor='two' className={style.attribute__label}>Attribute Two</label>
        </div>
    </div>
  )
}

export default Attribute