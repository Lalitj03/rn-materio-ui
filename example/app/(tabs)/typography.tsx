import { Divider, Paper, Typography, useTheme } from '@materio/rn-materio-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Typography Variants Showcase
const VariantsShowcase = () => {
  const variants = [
    'display',
    'headline',
    'title',
    'body',
    'label',
    'caption',
  ] as const;
  const sizes = ['large', 'medium', 'small'] as const;

  return (
    <View style={styles.variantsContainer}>
      {variants.map((variant) => (
        <View key={variant} style={styles.variantGroup}>
          <Typography variant="label" size="small" gutterBottom>
            {variant}
          </Typography>

          {sizes.map((size) => (
            <Typography
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              gutterBottom
            >
              {variant} - {size}
            </Typography>
          ))}
        </View>
      ))}
    </View>
  );
};

// Typography Weights Showcase
const WeightsShowcase = () => {
  const weights = ['light', 'regular', 'medium', 'semibold', 'bold'] as const;

  return (
    <View style={styles.weightsContainer}>
      {weights.map((weight) => (
        <Typography
          key={weight}
          variant="body"
          size="medium"
          weight={weight}
          gutterBottom
        >
          {weight} - The quick brown fox jumps over the lazy dog
        </Typography>
      ))}
    </View>
  );
};

// Typography Colors Showcase
const ColorsShowcase = () => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const;
  const tones = ['high', 'base', 'low'] as const;

  return (
    <Paper style={styles.colorPaper}>
      {colors.map((color) => (
        <View key={color} style={styles.colorGroup}>
          <Typography variant="label" size="small" gutterBottom>
            {color}
          </Typography>

          {tones.map((tone) => (
            <Typography
              key={`${color}-${tone}`}
              variant="body"
              size="medium"
              color={color}
              colorTone={tone}
              gutterBottom
            >
              {color} - {tone}
            </Typography>
          ))}
        </View>
      ))}
    </Paper>
  );
};

// Typography Usage Types Showcase
const UsageTypesShowcase = () => {
  const usageTypes = [
    'primary',
    'secondary',
    'disabled',
    'hint',
    'link',
    'error',
  ] as const;

  return (
    <View style={styles.usageTypeContainer}>
      {usageTypes.map((usageType) => (
        <Typography
          key={usageType}
          variant="body"
          size="medium"
          usageType={usageType}
          gutterBottom
        >
          {usageType} - The quick brown fox jumps over the lazy dog
        </Typography>
      ))}
    </View>
  );
};

// Typography Alignment Showcase
const AlignmentShowcase = () => {
  const alignments = ['left', 'center', 'right', 'justify'] as const;

  return (
    <View style={styles.alignmentContainer}>
      {alignments.map((align) => (
        <Paper key={align} style={styles.alignmentPaper}>
          <Typography variant="label" size="small" gutterBottom>
            align="{align}"
          </Typography>
          <Typography variant="body" size="medium" align={align}>
            This text demonstrates the {align} alignment. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </Typography>
        </Paper>
      ))}
    </View>
  );
};

export default function TypographyScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colorScheme.surface.background },
      ]}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: insets.bottom + 20 },
      ]}
    >
      <Typography variant="headline" size="small" color="primary" gutterBottom>
        Typography
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Variants & Sizes
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          The Typography component supports various variants and sizes
        </Typography>

        <VariantsShowcase />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Font Weights
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Typography supports different font weights
        </Typography>

        <WeightsShowcase />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Colors & Tones
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Typography can be rendered in different colors and tones
        </Typography>

        <ColorsShowcase />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Usage Types
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Usage types for specific contexts
        </Typography>

        <UsageTypesShowcase />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Text Alignment
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Typography supports different text alignments
        </Typography>

        <AlignmentShowcase />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginVertical: 8,
  },
  variantsContainer: {
    marginVertical: 8,
  },
  variantGroup: {
    marginBottom: 16,
  },
  weightsContainer: {
    marginVertical: 8,
  },
  colorPaper: {
    padding: 16,
    marginVertical: 8,
  },
  colorGroup: {
    marginBottom: 16,
  },
  usageTypeContainer: {
    marginVertical: 8,
  },
  alignmentContainer: {
    marginVertical: 8,
  },
  alignmentPaper: {
    padding: 16,
    marginBottom: 16,
  },
});
