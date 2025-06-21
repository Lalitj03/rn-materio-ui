/// <reference types="jest" />
// components/thunderbolt/Button/index.test.tsx
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import Button from '../index';

// Mock the hooks directly in the component location
jest.mock('../../../hooks/useComponentStyle', () => ({
  useComponentDefaults: jest.fn(() => ({
    variant: 'solid',
    size: 'md',
    color: 'neutral',
  })),
  useComponentStyle: jest.fn(() => ({
    backgroundColor: '#666',
    color: '#fff',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  })),
}));

// Mock the theme provider to return spacing
jest.mock('../../../contexts/ThemeProvider', () => ({
  useTheme: jest.fn(() => ({
    spacing: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 24,
      xxl: 32,
    },
  })),
}));

describe('Button Component', () => {
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
