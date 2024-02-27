import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
  const title = 'Disney Princess Beauty GIF by Disney';
  const url =
    'https://media1.giphy.com/media/RLVHPJJv7jY1q/giphy.gif?cid=3651eed2e5iar3hh2engbqqg06v5obra3wi81u227k2oxbud&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
  test('debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
