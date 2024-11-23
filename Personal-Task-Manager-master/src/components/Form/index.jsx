import React from 'react'
import { useState } from 'react';
import { FormCardPage, FormContainer, InputContainer } from './styledComponent'

const Form = ({onAdd}) => {
  const [formData, setformData] = useState({
    title: '',
    category: 'WORK',
    description: '',
  });

  const handleChanges = (e) => {
    setformData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onAdd(data)
      console.log(response);
      setformData({title: '', category: 'WORK', description: ''});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormCardPage>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Add Transaction</h2>
        <InputContainer>
          <label htmlFor="title">TITLE</label>
          <input className='input-field' type="texxt" id="title" name="title" onChange={handleChanges} value={formData.title} placeholder='ENTER THE TITLE' />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">DESCRIPTION</label>
          <input className='input-field' type="text" id="description" name="description" value={formData.description} onChange={handleChanges} placeholder='ENTER THE DESCRIPTION' />
        </InputContainer>
        <InputContainer>
          <label htmlFor="category">CATEGORY</label>
          <select className='input-field' name="category" value={formData.category} onChange={handleChanges} id="category">
            <option value="WORK">WORK</option>
            <option value="PERSONAL">PERSONAL</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        </InputContainer>
        <button className='add-btn' type='submit'>ADD</button>
      </FormContainer>
    </FormCardPage>
  )
}

export default Form