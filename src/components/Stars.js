import React from 'react'

export const Star = ({form, reviews, setForm, setReviews}) => {
    console.log(form)

    const handleChange = (e) => {
        const {name, value} =e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setReviews([...reviews, form])
        setForm({movie: "", review: "", id: null})
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>How many stars would you give it?</h2>
            <button type='button' onClick={handleSubmit}>⭐</button>
            <button type='button' onClick={handleSubmit}>⭐⭐ </button>
            <button type='button' onClick={handleSubmit}> ⭐⭐⭐</button>
            <button type='button' onClick={handleSubmit}> ⭐⭐⭐⭐ </button>
            <button type='button' onClick={handleSubmit}> ⭐⭐⭐⭐⭐ </button>

        </form>
    )
  }

  export default Star
