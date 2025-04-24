import { Feather } from '@expo/vector-icons';
import { Chip, Divider, Typography, useTheme } from '@materio/rn-materio-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Component to display examples of a specific variant across all colors
const VariantRow = ({
  variant,
}: {
  variant: 'solid' | 'soft' | 'outline' | 'ghost';
}) => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
  ] as const;

  return (
    <View style={styles.variantRow}>
      {colors.map((color) => (
        <Chip key={`${variant}-${color}`} variant={variant} color={color}>
          {color}
        </Chip>
      ))}
    </View>
  );
};

// Component to display examples of a specific size across primary color
const SizeRow = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  return (
    <View style={styles.sizeRow}>
      {sizes.map((size) => (
        <Chip key={`size-${size}`} size={size} color="primary">
          {size}
        </Chip>
      ))}
    </View>
  );
};

// Component to demonstrate interactive chips
const InteractiveChips = () => {
  return (
    <View style={styles.interactiveContainer}>
      <Chip
        variant="solid"
        color="primary"
        onPress={() => console.log('Chip pressed!')}
      >
        Pressable Chip
      </Chip>

      <Chip
        variant="outline"
        color="secondary"
        onPress={() => console.log('Secondary chip pressed!')}
      >
        Interactive
      </Chip>
    </View>
  );
};

// Component to showcase chips with icons
const IconChips = () => {
  return (
    <View style={styles.interactiveContainer}>
      <Chip color="primary" startIcon={<Feather name="check" />}>
        Selected
      </Chip>

      <Chip color="danger" startIcon={<Feather name="x" />}>
        Delete
      </Chip>

      <Chip color="info" endIcon={<Feather name="info" />}>
        Info
      </Chip>

      <Chip
        color="success"
        startIcon={<Feather name="user" />}
        endIcon={<Feather name="x" />}
      >
        User
      </Chip>
    </View>
  );
};

export default function ChipsScreen() {
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
        Chips
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Chip Variants
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          The Chip component supports solid, soft, outline, and ghost variants.
        </Typography>

        <Typography variant="label" size="small" gutterBottom>
          Solid
        </Typography>
        <VariantRow variant="solid" />

        <Typography variant="label" size="small" gutterBottom>
          Soft
        </Typography>
        <VariantRow variant="soft" />

        <Typography variant="label" size="small" gutterBottom>
          Outline
        </Typography>
        <VariantRow variant="outline" />

        <Typography variant="label" size="small" gutterBottom>
          Ghost
        </Typography>
        <VariantRow variant="ghost" />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Chip Sizes
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Chips are available in xs, sm, md, lg, and xl sizes.
        </Typography>

        <SizeRow />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Interactive Chips
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Chips can be interactive with onPress handlers.
        </Typography>

        <InteractiveChips />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Chips with Icons
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Chips can include start and end icons.
        </Typography>

        <IconChips />
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
    gap: 8,
  },
  variantRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  sizeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 8,
    gap: 8,
  },
  interactiveContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
    gap: 8,
  },
});
