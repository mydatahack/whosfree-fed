# React Setup



### Escaping test files from build

To escape test files from build, update the exclude path in tsconfig.json

### Configuring Jest and React Testing Library for Typescript

1. Install dependencies

```bash
npm install @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest --save-dev
```

2. Add jest.config.js

3. add esModuleInterop flag to tsconfig.json

```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

4. To ensure the additional Jest matchers are available for all test files, create src/globals.d.ts

```ts
import "@testing-library/jest-dom/extend-expect";
```

5. Test Example

'''Target File'''

```ts
import * as React from 'react'

interface IFormProps {
  flag: boolean
}
const Form = ({flag}: IFormProps) => {

    const message = flag ? 'Flag is true': 'Flag is false'

    return (
      <h2 data-testid="message">{message}</h2>
    )
}

export default Form
```

'''Test File'''

```ts
import { render, cleanup } from "@testing-library/react"
// Need to import React, this is a dependency
import React from 'react'
import Form from '../Form'

afterEach(cleanup)

describe("<Form />", () => {
  test('Should return the right message if props is true', () => {
    const { getByTestId } = render(<Form flag={true} />)
    expect(getByTestId('message').textContent).toBe('Flag is true')
  })
})
```