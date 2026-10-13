import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

// HomePage uses <Link>, so it has to be rendered inside a router
const renderHomePage = () =>
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

describe('HomePage', () => {
  test('renders without crashing', () => {
    renderHomePage();
  });

  test('displays the hero title and subtitle', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { name: /different saints/i })).toBeInTheDocument();
    expect(screen.getByText(/everyone carries something/i)).toBeInTheDocument();
  });

  test('displays the "Why Shop With Us?" section', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { name: /why shop with us/i })).toBeInTheDocument();
    expect(screen.getByText(/built with intention/i)).toBeInTheDocument();
    expect(screen.getByText(/heavyweight quality/i)).toBeInTheDocument();
    expect(screen.getByText(/limited drops/i)).toBeInTheDocument();
  });

  test('has a link to the products page', () => {
    renderHomePage();
    const shopLink = screen.getByRole('link', { name: /shop the collection/i });
    expect(shopLink).toHaveAttribute('href', '/products');
  });
});
