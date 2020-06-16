import { render, cleanup } from '@testing-library/react'

// Need to import React, this is a dependency
import * as React from 'react'
import Form from '../Form'

afterEach(cleanup)

describe('<Form />', () => {
  test('Should return the right message if props is true', () => {
    const { getByTestId } = render(<Form flag={true} />)
    expect(getByTestId('message').textContent).toBe('Flag is true')
  })
})
