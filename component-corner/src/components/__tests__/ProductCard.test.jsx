import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

const mockProduct = {
  id: 1,
  name: 'Halo Zip Up - Black',
  price: 135,
  image: 'https://placehold.co/600x600',
  description: 'Oversized heavyweight French terry.'
};

// ProductCard uses <Link>, so it has to be rendered inside a router
const renderCard = (onAddToCart = vi.fn()) =>
  render(
    <MemoryRouter>
      <ProductCard product={mockProduct} onAddToCart={onAddToCart} />
    </MemoryRouter>
  );

describe('ProductCard', () => {
  // Step 3: rendering tests
  test('renders without crashing', () => {
    renderCard();
  });

  test('displays the product name and price from props', () => {
    renderCard();
    expect(screen.getByText('Halo Zip Up - Black')).toBeInTheDocument();
    expect(screen.getByText('$135.00 USD')).toBeInTheDocument();
  });

  test('displays the product description and image', () => {
    renderCard();
    expect(screen.getByText('Oversized heavyweight French terry.')).toBeInTheDocument();
    expect(screen.getByAltText('Halo Zip Up - Black')).toBeInTheDocument();
  });

  test('contains an "Add to Cart" button', () => {
    renderCard();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  // Step 5: interaction tests
  test('calls onAddToCart with the product when "Add to Cart" is clicked', async () => {
    const mockAddToCart = vi.fn();
    renderCard(mockAddToCart);

    await userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

  test('links to the product details page', () => {
    renderCard();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/products/1');
  });
});
