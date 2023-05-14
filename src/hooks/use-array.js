import { useState } from 'react'

const useArray = processor => {
  const [value, setValue] = useState('')
  const valid = /^[\d|\,]+$/.test(value)
  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    value: value,
    valid: valid,
    onChange: onChange,
    processedValue: valid ? processor(value) : 'invalid result'
  }
}

export default useArray