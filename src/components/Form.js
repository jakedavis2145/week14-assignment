import React from 'react'

export const Form = ({form, reviews, setForm, setReviews}) => {
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
            <h2>Leave a Review</h2>
            <label htmlFor='movie'>Movie</label>
            <input 
            type='text'
             placeholder='Movie name'
             id='movie'
             name='movie'
             autoComplete='off'
             value={form.movie}
             onChange={handleChange}
             />
            <label htmlFor='review'>Review</label>
              <textarea 
              value={form.review}
              placeholder='How did you like it?'
              id='review'
              name='review'
              autoComplete='off'
              onChange={handleChange}
              />
              <button id='submit' type='submit'>Submit</button>
        </form>
    )
  }

  export default Form
