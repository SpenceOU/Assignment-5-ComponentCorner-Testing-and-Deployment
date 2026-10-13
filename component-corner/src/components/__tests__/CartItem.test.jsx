import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../CartItem';

const mockItem = {
  id: 2,
  cartId: 12345,
  name: 'Halo Zip Up - Brown',
  price: 135,
  image: 'https://placehold.co/600x600'
};

describe('CartItem', () => {
  test('renders without crashing', () => {
    render(<CartItem item={mockItem} onRemove={vi.fn()} />);
  });

  test('displays the item name and price', () => {
    render(<CartItem item={mockItem} onRemove={vi.fn()} />);
    expect(screen.getByText('Halo Zip Up - Brown')).toBeInTheDocument();
    expect(screen.getByText('$135.00 USD')).toBeInTheDocument();
  });

  test('displays the item image', () => {
    render(<CartItem item={mockItem} onRemove={vi.fn()} />);
    expect(screen.getByAltText('Halo Zip Up - Brown')).toBeInTheDocument();
  });

  test('calls onRemove with the cartId when "Remove" is clicked', async () => {
    const mockRemove = vi.fn();
    render(<CartItem item={mockItem} onRemove={mockRemove} />);

    await userEvent.click(screen.getByRole('button', { name: /remove/i }));

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(12345);
  });
});
