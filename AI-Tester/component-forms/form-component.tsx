import { FaAlignLeft } from 'react-icons/fa';
import { useForm } from '../hooks/useForm'
import Form from './form'
import React, { useState, ChangeEvent } from 'react';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default function FormComponent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setSelectedFile(file);
      }
    };

    const handleUpload = () => {
      // You can perform upload logic here, using the selectedFile state.
      if (selectedFile) {
        // Example: Upload file using fetch API or another method
        alert(`Uploading file: ${selectedFile.name}`);
      } else {
        alert('No file selected');
      }
    };

  const { formData, updateForm, isLoading, errors, ...form } = useForm({
    data: {
      name: ''
    },
    validations: {
    }
  })

  const onSubmit = async () => {
    await sleep(1000)
    if (selectedFile) {
      alert(`Uploading file: ${selectedFile.name}`);
    } else {
      alert('No file selected');
    }
   }

  
  return (
    <Form onSubmit={onSubmit} form={form} resetAfterSubmit>
      <div className='mb-4'>
        <label htmlFor='exampleInputEmail4' className='form-label'>
          File:
        </label><br></br>
        <input type='file' className='form-control' onChange={handleFileChange} />
        
        {/* <input
          type='text'
          className='form-control'
          id='exampleInputEmail4'
          value={formData.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        /> */}
        {errors?.name && <p className='invalid-feedback d-block'>{errors.name}</p>}
      </div>
      <center><button onChange={handleUpload}>Upload</button></center>
      {/* <button type='submit' className='btn btn-primary' disabled={isLoading}>
        Submit
      </button> */}
    </Form>
  )
}
