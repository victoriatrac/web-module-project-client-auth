import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setError, addFriend } from '../actions'

const initialForm = {
  id: Date.now(),
  name: '',
  age: '',
  email: ''
}

const AddForm = (props) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.name === '' || form.age === '' || form.email === '') {
      props.setError('Name, age, and email are required.')
    }
    props.addFriend(form)
  }

  return(
    <section>
      <h2>Add a new friend</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-section'>
          <label>Name:</label><br />
          <input
            onChange={handleChange}
            value={form.name}
            name='name'
            id='name'
          />
        </div>
        <div className='form-section'>
          <label>Age:</label><br />
          <input
            onChange={handleChange}
            value={form.age}
            name='age'
            id='age'
          />
        </div>
        <div className='form-section'>
          <label>Email:</label><br />
          <input
            onChange={handleChange}
            value={form.email}
            name='email'
            id='email'
          />
        </div>
        <button>Add New Friend</button>
        {
          form.errorMsg &&
          <div className='errorMsg' role='alert'>Error: {props.errorMessage}</div>
        }
      </form>
    </section>
  )
}

export default connect(null, { setError, addFriend })(AddForm)

// export default AddForm