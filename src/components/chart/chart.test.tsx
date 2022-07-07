import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Chart from './chart'
import { defaultGraphValue } from '../../mock/graph'

describe('Render Chart', () => {
  const totalValue = 100
  const position = 0

  it('should render chart', () => {
    render(
      <Chart
        width={(defaultGraphValue[0].time * 100) / totalValue}
        position={position}
        name={defaultGraphValue[0].name}
        time={defaultGraphValue[0].time}
        total={totalValue}
      />
    )

    expect(screen.getByText(/Landing Page/i)).toBeInTheDocument()
    expect(screen.getByText(/7.4/i)).toBeInTheDocument()
  })
})
