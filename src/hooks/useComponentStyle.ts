import { useMemo } from 'react';
import type { ThemeContextType } from '../contexts/ThemeProvider';
import { useTheme } from '../contexts/ThemeProvider';
import type {
  ComponentConfig,
  ComponentStyle,
  ThemeColors,
  VariantFunction,
} from '../utils/types/theme';

// Simple utility functions for resolving theme values
function resolveSpacing(theme: any, value: string | number): number {
  if (typeof value === 'number') return value;
  return theme.spacing[value] || 0;
}

function resolveBorderRadius(theme: any, value: string | number): number {
  if (typeof value === 'number') return value;
  return theme.borderRadius[value] || 0;
}

function resolveBorderWidth(theme: any, value: string | number): number {
  if (typeof value === 'number') return value;
  return theme.borderWidths[value] || 0;
}

function resolveFontFamily(theme: any, weight: string): string {
  const weightMap = theme.typography.weightMap[weight];
  return weightMap?.fontFamily || theme.typography.fontFamily;
}

/**
 * Resolves a component style object to actual values
 */
export function resolveComponentStyle(
  theme: ThemeContextType['theme'],
  style: ComponentStyle
): Record<string, any> {
  const resolved: Record<string, any> = {};

  // Resolve padding
  if (style.padding !== undefined) {
    if (typeof style.padding === 'string') {
      const paddingValue = resolveSpacing(theme, style.padding);
      resolved.padding = paddingValue;
    } else if (typeof style.padding === 'object') {
      if (style.padding.horizontal !== undefined) {
        resolved.paddingHorizontal = resolveSpacing(
          theme,
          style.padding.horizontal
        );
      }
      if (style.padding.vertical !== undefined) {
        resolved.paddingVertical = resolveSpacing(
          theme,
          style.padding.vertical
        );
      }
    }
  }

  // Resolve margin
  if (style.margin !== undefined) {
    resolved.margin = resolveSpacing(theme, style.margin);
  }

  // Resolve border radius
  if (style.borderRadius !== undefined) {
    resolved.borderRadius = resolveBorderRadius(theme, style.borderRadius);
  }

  // Resolve border width
  if (style.borderWidth !== undefined) {
    resolved.borderWidth = resolveBorderWidth(theme, style.borderWidth);
  }

  // Direct numeric/string values
  if (style.minHeight !== undefined) {
    resolved.minHeight = style.minHeight;
  }
  if (style.fontSize !== undefined) {
    resolved.fontSize = style.fontSize;
  }

  // Resolve font family from font weight
  if (style.fontWeight !== undefined) {
    resolved.fontFamily = resolveFontFamily(theme, style.fontWeight);
  }

  // Color resolvers
  if (style.backgroundColor !== undefined) {
    resolved.backgroundColor = resolveColor(
      theme,
      style.backgroundColor,
      'primary'
    );
  }
  if (style.borderColor !== undefined) {
    resolved.borderColor = resolveColor(theme, style.borderColor, 'primary');
  }
  if (style.textColor !== undefined) {
    resolved.color = resolveColor(theme, style.textColor, 'primary');
  }

  // Copy any other properties as-is
  Object.keys(style).forEach((key) => {
    if (
      ![
        'padding',
        'margin',
        'borderRadius',
        'borderWidth',
        'minHeight',
        'fontSize',
        'fontWeight',
        'backgroundColor',
        'borderColor',
        'textColor',
      ].includes(key)
    ) {
      resolved[key] = style[key];
    }
  });

  return resolved;
}

/**
 * Resolves a color value (string or function)
 */
function resolveColor(
  theme: ThemeContextType['theme'],
  colorResolver: string | ((theme: any, colorScheme: string) => string),
  defaultColorScheme: string
): string {
  if (typeof colorResolver === 'string') {
    // Handle theme color paths like "primary.high.main", "surface.divider", "typography.primary"
    if (colorResolver.includes('.')) {
      const parts = colorResolver.split('.');
      let value: any = theme.colorScheme;

      // First check if it's a palette color path
      if (
        parts[0] !== 'surface' &&
        parts[0] !== 'typography' &&
        parts[0] !== 'paper'
      ) {
        value = theme.colorScheme.palette;
      }

      for (const part of parts) {
        value = value?.[part];
      }
      return value || colorResolver;
    }
    return colorResolver;
  }

  if (typeof colorResolver === 'function') {
    return colorResolver(theme, defaultColorScheme);
  }

  return colorResolver;
}

/**
 * Hook for resolving component styles from theme configuration
 */
export function useComponentStyle<
  TVariants extends string,
  TSizes extends string,
>(
  componentName: keyof ThemeContextType['theme']['components'],
  variant: TVariants,
  size: TSizes,
  colorScheme: ThemeColors = 'primary'
) {
  const theme = useTheme();

  return useMemo(() => {
    const config = theme.components[componentName] as ComponentConfig<
      TVariants,
      TSizes
    >;

    if (!config) {
      return {};
    }

    // Start with base style
    let resolvedStyle: Record<string, any> = {};

    if (config.baseStyle) {
      resolvedStyle = {
        ...resolvedStyle,
        ...resolveComponentStyle(theme, config.baseStyle),
      };
    }

    // Apply size-specific styles
    if (config.sizes && config.sizes[size]) {
      resolvedStyle = {
        ...resolvedStyle,
        ...resolveComponentStyle(theme, config.sizes[size]),
      };
    }

    // Apply variant-specific styles
    if (config.variants && config.variants[variant]) {
      const variantStyle = config.variants[variant];
      if (typeof variantStyle === 'function') {
        const computedStyle = (variantStyle as VariantFunction)(
          theme,
          colorScheme
        );

        resolvedStyle = {
          ...resolvedStyle,
          ...resolveComponentStyle(theme, computedStyle),
        };
      } else {
        resolvedStyle = {
          ...resolvedStyle,
          ...resolveComponentStyle(theme, variantStyle),
        };
      }
    }

    return resolvedStyle;
  }, [theme, componentName, variant, size, colorScheme]);
}

/**
 * Hook for getting component default props
 */
export function useComponentDefaults<
  TVariants extends string,
  TSizes extends string,
>(componentName: keyof ThemeContextType['theme']['components']) {
  const theme = useTheme();

  return useMemo(() => {
    const config = theme.components[componentName] as ComponentConfig<
      TVariants,
      TSizes
    >;

    return config?.defaultProps || {};
  }, [theme, componentName]);
}
