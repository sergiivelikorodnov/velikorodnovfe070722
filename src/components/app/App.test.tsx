import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('Render App', () => {
  it('should render Title', () => {
    render(<App />)

    expect(screen.getByText(/SPENT TIME/i)).toBeInTheDocument()
  })

  it('should render 4 charts', () => {
    render(<App />)

    expect(screen.getAllByTestId('chartTest')).toHaveLength(4)
  })
})
