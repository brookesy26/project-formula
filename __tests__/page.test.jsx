import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'

describe('Page', () => {

  it('main h1 heading is on page', () => {
    render(<Page />)
    // check to see if a h1 is on the page 
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  })

  it('card container is within the page', () => {
    render(<Page />)
    const section = screen.getByTestId('cardsContainer');
    expect(section).toBeInTheDocument();
  })

  it('card zero is within the page', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    expect(card0).toBeInTheDocument();
  })

  it('1 * h2 inside card', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const headings = card0.querySelectorAll('h2');
    expect(headings.length).toBe(1);
  })


  it('2 * h3 inside card', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const headings = card0.querySelectorAll('h3');
    expect(headings.length).toBe(2);
  })

  it('12 * p tags inside card', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const text = card0.querySelectorAll('p');
    expect(text.length).toBe(12);
  })


  it('card 1 is within the page', () => {
    render(<Page />)
    const card1 = screen.getByTestId('card1');
    expect(card1).toBeInTheDocument();
  })

  it('1 * h2 inside card', () => {
    render(<Page />)
    const card1 = screen.getByTestId('card1');
    const headings = card1.querySelectorAll('h2');
    expect(headings.length).toBe(1);
  })


  it('2 * h3 inside card', () => {
    render(<Page />)
    const card1 = screen.getByTestId('card1');
    const headings = card1.querySelectorAll('h3');
    expect(headings.length).toBe(2);
  })

  it('12 * p tags inside card', () => {
    render(<Page />)
    const card1 = screen.getByTestId('card1');
    const text = card1.querySelectorAll('p');
    expect(text.length).toBe(12);
  })
})
