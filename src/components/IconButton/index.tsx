import React, { forwardRef } from 'react';
import { RectButton, type RectButtonProps } from 'react-native-gesture-handler';
import {
  useComponentDefaults,
  useComponentStyle,
} from '../../hooks/useComponentStyle';
import {
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants,
} from '../../utils/types/theme';
import { type ButtonRounded } from '../Button';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export interface IconButtonProps extends RectButtonProps {
  children: React.ReactElement<IconProps>;
  color?: ButtonColors;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  rounded?: ButtonRounded;
}

export default forwardRef<typeof RectButton, IconButtonProps>(
  function IconButton(
    {
      onPress,
      children,
      variant,
      color,
      size,
      rounded,
      ...props
    }: IconButtonProps,
    ref
  ) {
    // Get default props from theme
    const defaultProps = useComponentDefaults<ButtonVariants, ButtonSizes>(
      'IconButton'
    );

    // Apply defaults with prop overrides
    const finalVariant = variant ?? defaultProps.variant ?? 'ghost';
    const finalColor = color ?? defaultProps.color ?? 'neutral';
    const finalSize = size ?? defaultProps.size ?? 'md';

    // Use the new component style system
    const componentStyle = useComponentStyle(
      'IconButton',
      finalVariant,
      finalSize,
      finalColor
    );

    // Handle rounded prop override
    const finalBorderRadius =
      rounded === 'none'
        ? 0
        : rounded === 'full'
          ? 9999
          : componentStyle.borderRadius;

    // Calculate icon size - use a size map based on component size
    const iconSizeMap = {
      xs: 16,
      sm: 20,
      md: 24,
      lg: 28,
      xl: 32,
    };
    const iconSize = iconSizeMap[finalSize];

    return (
      <RectButton
        ref={ref}
        testID="icon-button"
        onPress={onPress}
        style={{
          ...componentStyle,
          borderRadius: finalBorderRadius,
        }}
        {...props}
      >
        {React.cloneElement(children, {
          color: componentStyle.color,
          size: iconSize,
        })}
      </RectButton>
    );
  }
);
