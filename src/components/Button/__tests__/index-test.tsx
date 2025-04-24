/// <reference types="jest" />
// components/thunderbolt/Button/index.test.tsx
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { useTheme } from 'rn-materio-ui';
import Button from '../index';

jest.mock('rn-materio-ui', () => ({
  // Mocking the useTheme hook
  __esModule: true,
  useTheme: jest.fn(),
}));

const mockTheme = {
  colorScheme: {
    palette: {
      neutral: {
        high: { main: '#000', contrast: '#fff' },
        low: { main: '#ccc', contrast: '#333' },
      },
    },
  },
};

describe('Button Component', () => {
  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(mockTheme);
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('renders correctly with variant "soft"', () => {
    const { getByText } = render(<Button variant="soft">Soft Button</Button>);
    expect(getByText('Soft Button')).toBeTruthy();
  });

  it('renders correctly with variant "outline"', () => {
    const { getByText } = render(
      <Button variant="outline">Outline Button</Button>
    );
    expect(getByText('Outline Button')).toBeTruthy();
  });

  it('renders correctly with variant "ghost"', () => {
    const { getByText } = render(<Button variant="ghost">Ghost Button</Button>);
    expect(getByText('Ghost Button')).toBeTruthy();
  });

  it('renders correctly with different sizes', () => {
    const { getByText, rerender } = render(
      <Button size="xs">XS Button</Button>
    );
    expect(getByText('XS Button')).toBeTruthy();

    rerender(<Button size="lg">LG Button</Button>);
    expect(getByText('LG Button')).toBeTruthy();
  });

  it('renders correctly with startIcon and endIcon', () => {
    const startIcon = <View testID="startIcon" />;
    const endIcon = <View testID="endIcon" />;
    const { getByTestId } = render(
      <Button startIcon={startIcon} endIcon={endIcon}>
        Icon Button
      </Button>
    );
    expect(getByTestId('startIcon')).toBeTruthy();
    expect(getByTestId('endIcon')).toBeTruthy();
  });
});
