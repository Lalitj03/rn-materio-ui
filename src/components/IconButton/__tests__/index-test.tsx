/// <reference types="jest" />
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import IconButton from '../index';

// Mock the ThemeProvider from contexts/ThemeProvider since that's where useTheme is exported from
jest.mock('@materio/rn-materio-ui', () => ({
  __esModule: true,
  useTheme: jest.fn(() => mockTheme),
}));

const mockTheme = {
  colorScheme: {
    palette: {
      neutral: {
        high: { main: '#000', contrast: '#fff' },
        low: { main: '#ccc', contrast: '#333' },
      },
      primary: {
        high: { main: '#007bff', contrast: '#fff' },
        low: { main: '#cce5ff', contrast: '#004085' },
      },
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  borderWidths: {
    thin: 1,
    thick: 2,
  },
};

describe('IconButton', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <IconButton onPress={() => {}} testID="icon-button">
        {/* Provide a valid icon element for children */}
        <FakeIcon />
      </IconButton>
    );
    const button = getByTestId('icon-button');
    expect(button).toBeTruthy();
  });

  it('renders correctly with different variants', () => {
    const { getByTestId, rerender } = render(
      <IconButton variant="solid" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    let button = getByTestId('icon-button');
    expect(button.props.style.backgroundColor).toBe('#000');
    rerender(
      <IconButton variant="soft" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    button = getByTestId('icon-button');
    expect(button.props.style.backgroundColor).toBe('#ccc');
    rerender(
      <IconButton variant="outline" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    button = getByTestId('icon-button');
    expect(button.props.style.backgroundColor).toBe('transparent');
    rerender(
      <IconButton variant="ghost" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    button = getByTestId('icon-button');
    expect(button.props.style.backgroundColor).toBe('transparent');
  });

  it('renders correctly with different sizes', () => {
    const { getByTestId, rerender } = render(
      <IconButton size="xs" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    let button = getByTestId('icon-button');
    expect(button.props.style.padding).toBe(4);
    rerender(
      <IconButton size="lg" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    button = getByTestId('icon-button');
    expect(button.props.style.padding).toBe(16);
  });

  it('renders correctly with different colors', () => {
    const { getByTestId } = render(
      <IconButton color="primary" onPress={() => {}} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    let button = getByTestId('icon-button');
    expect(button.props.style.backgroundColor).toBe('#007bff');
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <IconButton onPress={onPressMock} testID="icon-button">
        <FakeIcon />
      </IconButton>
    );
    const button = getByTestId('icon-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});

// Add a simple fake icon component for testing
const FakeIcon = (props: any) => <React.Fragment {...props} />;
