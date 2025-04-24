import { useTheme } from 'rn-materio-ui';
import { type PaperVariants } from 'rn-materio-ui';
import { View, type ViewProps } from 'react-native';

export interface PaperProps extends ViewProps {
  variant?: PaperVariants;
  /** The border radius of the Paper */
  rounded?: number;
}

export default function Paper({
  children,
  variant = 'solid',
  rounded = 8,
  style,
  ...props
}: PaperProps) {
  const theme = useTheme();
  let background = theme.colorScheme.surface.paper;
  let borderColor = theme.colorScheme.surface.divider;

  if (variant === 'outline') {
    background = 'transparent';
  }

  if (variant === 'solid') {
    borderColor = 'transparent';
  }

  return (
    <View
      style={[
        {
          borderWidth: variant === 'outline' ? 1 : 0,
          backgroundColor: background,
          borderColor: borderColor,
          borderRadius: rounded,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
