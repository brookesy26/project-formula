import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from "@/app/teams/page"

describe('schedule page', () => {

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

  it('amount of cards to be 20', () => {
    render(<Page />)
    const container = screen.getByTestId('cardsContainer');
    const sections = container.querySelectorAll('p');
    expect(sections.length).toBe(20);
  })

  it('1 * h2 inside card', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const headings = card0.querySelectorAll('h2');
    expect(headings.length).toBe(1);
  })

  it('two paragraph tags inside card 0 heading', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const paras = card0.querySelectorAll('p');
    expect(paras.length).toBe(2);
  })

  it('two images background and flag', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const imgs = card0.querySelectorAll('img');
    expect(imgs.length).toBe(2);
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

  it('two paragraph tags inside card 1 heading', () => {
    render(<Page />)
    const card0 = screen.getByTestId('card0');
    const paras = card0.querySelectorAll('p');
    expect(paras.length).toBe(2);
  })
})
