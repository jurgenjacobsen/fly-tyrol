import { render, screen } from '@testing-library/react'
import App from './App.tsx'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /fly tyrol/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText(/Fly Tyrol. All rights reserved./i)).toBeInTheDocument()
  })
})
