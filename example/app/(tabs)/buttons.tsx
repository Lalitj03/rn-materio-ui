import { Feather } from '@expo/vector-icons';
import {
    Button,
    Divider,
    IconButton,
    Typography,
    useTheme,
} from '@materio/rn-materio-ui';
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
        <Button key={`${variant}-${color}`} variant={variant} color={color}>
          {color}
        </Button>
      ))}
    </View>
  );
};

// Component to display examples of a specific size across primary color
const SizeRow = ({ size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }) => {
  return (
    <Button key={`size-${size}`} size={size} color="primary">
      {size}
    </Button>
  );
};

// Component to display examples of IconButton
const IconButtonRow = ({
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
        <IconButton
          key={`icon-${variant}-${color}`}
          variant={variant}
          color={color}
        >
          <Feather name="star" />
        </IconButton>
      ))}
    </View>
  );
};

// Component to showcase buttons with icons
const IconExamples = () => {
  return (
    <View style={styles.section}>
      <Button color="primary" startIcon={<Feather name="arrow-left" />}>
        Back
      </Button>
      <Button color="secondary" endIcon={<Feather name="arrow-right" />}>
        Next
      </Button>
      <Button
        color="success"
        startIcon={<Feather name="check" />}
        endIcon={<Feather name="chevron-down" />}
      >
        Complete
      </Button>
    </View>
  );
};

// Component to showcase disabled and loading states
const StateExamples = () => {
  return (
    <View style={styles.section}>
      <Button color="primary" disabled>
        Disabled
      </Button>
      <Button color="secondary" loading>
        Loading
      </Button>
    </View>
  );
};

export default function ButtonsScreen() {
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
        Buttons
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Button Variants
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          The Button component supports solid, soft, outline, and ghost
          variants.
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
          Button Sizes
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Buttons are available in xs, sm, md, lg, and xl sizes.
        </Typography>

        <View style={styles.sizesContainer}>
          <SizeRow size="xs" />
          <SizeRow size="sm" />
          <SizeRow size="md" />
          <SizeRow size="lg" />
          <SizeRow size="xl" />
        </View>
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Buttons with Icons
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Buttons can include start and end icons.
        </Typography>

        <IconExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Button States
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Buttons support disabled and loading states.
        </Typography>

        <StateExamples />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Icon Buttons
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          IconButton component for icon-only buttons.
        </Typography>

        <Typography variant="label" size="small" gutterBottom>
          Solid
        </Typography>
        <IconButtonRow variant="solid" />

        <Typography variant="label" size="small" gutterBottom>
          Soft
        </Typography>
        <IconButtonRow variant="soft" />

        <Typography variant="label" size="small" gutterBottom>
          Outline
        </Typography>
        <IconButtonRow variant="outline" />

        <Typography variant="label" size="small" gutterBottom>
          Ghost
        </Typography>
        <IconButtonRow variant="ghost" />
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
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 8,
    gap: 8,
  },
});
