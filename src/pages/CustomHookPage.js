import React from 'react'
import Card from '../components/Card'
import useArray from '../hooks/use-array'
import Form from 'react-bootstrap/Form'

const CustomHookPage = () => {
  const fn1 = value => {
    return value
      .split(',')
      .map(item => item.trim() * 2)
      .join(',')
  }

  const fn2 = value => {
    return value
      .split(',')
      .map(item => item.trim() * 1)
      .sort((a, b) => a - b)
      .join(',')
  }

  const fn3 = value => {
    return value
      .split(',')
      .map(item => item.trim() * 1)
      .sort((a, b) => b - a)
      .join(',')
  }

  const {
    value,
    processedValue: processedValueCase1,
    valid,
    onChange: onChange1
  } = useArray(fn1)

  const { processedValue: processedValueCase2, onChange: onChange2 } =
    useArray(fn2)

  const { processedValue: processedValueCase3, onChange: onChange3 } =
    useArray(fn3)

  const onInputChange = event => {
    onChange1(event)
    onChange2(event)
    onChange3(event)
  }

  return (
    <Card title={'Custom Hook - useArray'}>
      <Form.Label>Enter a valid array with comma separated numbers</Form.Label>
      <Form.Control
        placeholder='comma separated array numbers'
        name='name'
        value={value}
        onChange={onInputChange}
        isInvalid={!valid}
      />
      <p style={{ marginTop: 20 }} className='h4'>
        UseArray Results
      </p>
      <ul>
        <li>
          <ProcessedValueItem
            valid={valid}
            title={'Array items multiplied by 2'}
          >
            {processedValueCase1}
          </ProcessedValueItem>
        </li>
        <li>
          <ProcessedValueItem valid={valid} title={'Ordered array items, INC'}>
            {processedValueCase2}
          </ProcessedValueItem>
        </li>
        <li>
          <ProcessedValueItem valid={valid} title={'Ordered array items, DESC'}>
            {processedValueCase3}
          </ProcessedValueItem>
        </li>
      </ul>
    </Card>
  )
}

const ProcessedValueItem = props => {
  return (
    <>
      <p className='h5'>{props.title}</p>
      <p className='h6' style={styles(props).valueItem}>
        {props.children}
      </p>
    </>
  )
}

const styles = props => ({
  valueItem: {
    color: props.valid ? 'green' : 'red'
  }
})

export default CustomHookPage
