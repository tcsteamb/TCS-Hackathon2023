import { useForm } from '../hooks/useForm'
import Form from './form'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default function FormComponent() {
  const { formData, updateForm, isLoading, errors, ...form } = useForm({
    data: {
      name: ''
    },
    validations: {
      name: (value) => {
        if (!value) return 'Please select Excel File'
      }
    }
  })

  const onSubmit = async () => {
    await sleep(1000)
    alert(JSON.stringify(formData))
  }

  return (
    <Form onSubmit={onSubmit} form={form} resetAfterSubmit>
      <div className='mb-4'>
        <label htmlFor='exampleInputEmail4' className='form-label'>
          File
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail4'
          value={formData.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        {errors?.name && <p className='invalid-feedback d-block'>{errors.name}</p>}
      </div>
      <button type='submit' className='btn btn-primary' disabled={isLoading}>
        Submit
      </button>
    </Form>
  )
}