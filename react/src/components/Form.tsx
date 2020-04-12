import * as React from 'react'

interface IFormProps {
  flag: boolean
}
const Form = ({flag}: IFormProps) => {

    const message = flag ? 'Flag is true' : 'Flag is false'

    return (
      <h2 data-testid='message'>{message}</h2>
    )
}

export default Form
