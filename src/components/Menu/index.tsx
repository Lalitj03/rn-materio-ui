import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  useTheme,
  type ButtonColors,
  type ColorTone,
  type ColorValues,
} from '../../index';
import Divider from '../Divider';
import Popover, { type PopoverProps } from '../Popover';
import Typography, { type TypographyProps } from '../Typography';

// Define the icon props interface
interface IconProps {
  color?: string;
  size?: number;
  [key: string]: any; // Allow other props that might be needed by various icon components
}

export type MenuVariants = 'solid';
export type MenuSizes = 'xs' | 'sm' | 'md' | 'lg';

interface MenuProps extends PopoverProps {
  size?: MenuSizes;
  targetRef: React.RefObject<any>;
  separator?: boolean;
  variant?: MenuVariants;
}

export default function Menu({
  open,
  onClose,
  separator,
  targetRef,
  children,
  size,
  color,
  colorTone = 'low',
  ...props
}: MenuProps) {
  if (!open) return null;

  const itemColor = {
    color: color,
    colorTone,
  };

  return (
    <Popover
      open={open}
      onClose={onClose}
      targetRef={targetRef}
      color={color}
      colorTone={colorTone}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <React.Fragment key={index}>
              {React.cloneElement(child as React.ReactElement<any>, {
                size,
                first: index === 0,
                last: index === React.Children.count(children) - 1,
                onClose: onClose,
                ...itemColor,
              })}
              {separator && index < React.Children.count(children) - 1 && (
                <Divider marginH={4} color={color} />
              )}
            </React.Fragment>
          );
        }

        return child;
      })}
    </Popover>
  );
}

interface MenuItemProps {
  startIcon?: React.ReactElement<IconProps>;
  endIcon?: React.ReactElement<IconProps>;
  children?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: ButtonColors;
  colorTone?: ColorTone;
  onSelected?: () => void;
  onClose?: () => void;
  typographyProps?: TypographyProps;
  iconProps?: { size?: number; color?: string };
  itemProps?: {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: ButtonColors;
    colorTone?: ColorTone;
    colorValue?: ColorValues;
  };
}

export function MenuItem({
  size = 'xs',
  color,
  colorTone = 'low',
  startIcon,
  endIcon,
  children,
  onSelected,
  onClose,
  typographyProps,
  iconProps,
  itemProps,
}: MenuItemProps) {
  const theme = useTheme();
  const tSize = itemProps?.size || size;
  const tColor = itemProps?.color || color;
  const tColorTone = itemProps?.colorTone || colorTone;
  const tColorValue = itemProps?.colorValue || 'contrast';

  const typographySizeMap = {
    xs: { variant: 'caption', size: 'small' },
    sm: { variant: 'label', size: 'small' },
    md: { variant: 'label', size: 'medium' },
    lg: { variant: 'body', size: 'medium' },
  } as Record<string, TypographyProps>;
  const iconSizeMap = {
    xs: 14,
    sm: 16,
    md: 24,
    lg: 32,
  } as Record<string, number>;
  const spacing = theme.spacing;
  const paddingMap = {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
  } as Record<string, number>;
  const gapMap = {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.md,
  } as Record<string, number>;

  const handlePress = () => {
    onClose?.();
    onSelected?.();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ width: '100%' }}>
      <Animated.View
        style={[
          styles.menuItem,
          {
            paddingHorizontal: (paddingMap[tSize] || 0) + spacing.xs,
            paddingVertical: paddingMap[tSize],
            gap: gapMap[tSize],
          },
        ]}
      >
        {startIcon &&
          React.cloneElement(startIcon as React.ReactElement<any>, {
            size: iconSizeMap[tSize],
            color: tColor
              ? theme.colorScheme.palette[tColor][tColorTone][tColorValue]
              : theme.colorScheme.typography.primary,
            ...iconProps,
          })}
        <Typography
          {...typographySizeMap[tSize]}
          color={tColor}
          colorTone={tColorTone}
          colorValue={tColorValue}
          weight="regular"
          numberOfLines={1}
          {...typographyProps}
        >
          {children}
        </Typography>
        {endIcon &&
          React.cloneElement(endIcon as React.ReactElement<any>, {
            size: iconSizeMap[tSize],
            color: tColor
              ? theme.colorScheme.palette[tColor][tColorTone][tColorValue]
              : theme.colorScheme.typography.primary,
            ...iconProps,
          })}
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
