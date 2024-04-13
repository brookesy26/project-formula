import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from "@/app/standings/page"

describe('standings page', () => {

  it('main h1 heading is on page', () => {
    render(<Page />)
    // check to see if a h1 is on the page 
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  })

  it('driver button', () => {
    render(<Page />)
    const button = screen.getByRole('button', { name: 'driver' });
    expect(button).toBeInTheDocument();
  })

  it('team button', () => {
    render(<Page />)
    const button = screen.getByRole('button', { name: 'team' });
    expect(button).toBeInTheDocument();
  })

  it('table to be on page', () => {
    render(<Page />)
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  })

  it('team button', () => {
    render(<Page />)
    const button = screen.getByRole('button', { name: 'team' });
    expect(button).toBeInTheDocument();
  })


  it('table rows to be 21', () => {
    render(<Page />)
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(21);
  })

  it('On Team button click table rows to be 11', () => {
    render(<Page />);
    const button = screen.getByRole('button', { name: 'team' });
    fireEvent.click(button);
    const table = screen.getByRole('table');
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBe(11);
  });

  it('team standings heading in doc', () => {
    render(<Page />);
    const button = screen.getByRole('button', { name: 'team' });
    const h2Driver = screen.getByRole('heading', { level: 2, name: 'driver standings' })
    expect(h2Driver).toBeInTheDocument();
    fireEvent.click(button);
    const h2Team = screen.getByRole('heading', { level: 2, name: 'team standings' })
    expect(h2Team).toBeInTheDocument();
  });
});