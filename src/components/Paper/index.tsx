import { useTheme, type PaperVariants } from '@materio/rn-materio-ui';
import { View, type ViewProps } from 'react-native';

export interface PaperProps extends ViewProps {
  variant?: PaperVariants;
  /** The border radius of the Paper. Can be a number or a theme key. */
  rounded?: number | 'sm' | 'md' | 'lg' | 'xl';
}

export default function Paper({
  children,
  variant = 'solid',
  rounded = 'md',
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

  // Use theme.borderRadius if rounded is a string, else use the number
  const borderRadius =
    typeof rounded === 'string' ? theme.borderRadius[rounded] : rounded;
  // Use theme.borderWidths.thin for outline
  const borderWidth = variant === 'outline' ? theme.borderWidths.thin : 0;

  return (
    <View
      style={[
        {
          borderWidth: borderWidth,
          backgroundColor: background,
          borderColor: borderColor,
          borderRadius: borderRadius,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
