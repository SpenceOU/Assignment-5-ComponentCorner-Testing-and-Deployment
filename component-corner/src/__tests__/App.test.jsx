import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    // Start every test on the home page with an empty localStorage
    window.history.pushState({}, '', '/');
    localStorage.clear();
  });

  afterEach(() => {
    // Undo any localStorage mocks so tests don't affect each other
    vi.restoreAllMocks();
  });

  test('renders the header and home page', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Different Saints' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /why shop with us/i })).toBeInTheDocument();
  });

  test('starts with an empty cart when localStorage has nothing saved', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    const { container } = render(<App />);
    expect(container.querySelector('.cart-badge')).toHaveTextContent('0');
  });

  test('loads cart data from localStorage on startup', () => {
    const savedCart = [
      { id: 1, cartId: 111, name: 'Halo Zip Up - Black', price: 135, image: '' },
      { id: 6, cartId: 222, name: 'Saints Logo Tee', price: 45, image: '' }
    ];
    // Mock localStorage.getItem so it returns our fake saved cart
    const getItemSpy = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue(JSON.stringify(savedCart));

    const { container } = render(<App />);

    expect(getItemSpy).toHaveBeenCalledWith('cart');
    expect(container.querySelector('.cart-badge')).toHaveTextContent('2');
  });

  test('saves cart changes to localStorage when an item is added', async () => {
    // Mock localStorage.setItem so we can see what gets saved
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { container } = render(<App />);

    // useEffect saves the starting (empty) cart on the first render
    expect(setItemSpy).toHaveBeenCalledWith('cart', '[]');

    // Go to the Shop page and add the first product
    await userEvent.click(screen.getByRole('link', { name: 'Shop' }));
    const addButtons = screen.getAllByRole('button', { name: /add to cart/i });
    await userEvent.click(addButtons[0]);

    // The badge updates and useEffect saves the new cart
    expect(container.querySelector('.cart-badge')).toHaveTextContent('1');
    const lastSave = setItemSpy.mock.calls[setItemSpy.mock.calls.length - 1];
    expect(lastSave[0]).toBe('cart');
    expect(JSON.parse(lastSave[1])[0].name).toBe('Halo Zip Up - Black');
  });

  test('removing an item updates the cart and localStorage', async () => {
    const savedCart = [
      { id: 1, cartId: 111, name: 'Halo Zip Up - Black', price: 135, image: '' }
    ];
    localStorage.setItem('cart', JSON.stringify(savedCart));
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { container } = render(<App />);

    // Go to the Cart page and remove the item
    await userEvent.click(container.querySelector('.cart-container'));
    expect(screen.getByText('Halo Zip Up - Black')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /remove/i }));

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(container.querySelector('.cart-badge')).toHaveTextContent('0');
    expect(setItemSpy).toHaveBeenLastCalledWith('cart', '[]');
  });
});
