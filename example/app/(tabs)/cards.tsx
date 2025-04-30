import { Feather } from '@expo/vector-icons';
import {
  Card,
  ColoredCard,
  Divider,
  Typography,
  useTheme,
} from '@materio/rn-materio-ui';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Basic Card Example
const BasicCardExample = () => {
  return (
    <View style={styles.exampleContainer}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Typography variant="title" size="medium" gutterBottom>
            Basic Card
          </Typography>
          <Typography variant="body" size="small" usageType="secondary">
            This is a simple card example with default styling
          </Typography>
        </View>
      </Card>

      <Card style={styles.card} variant="outline">
        <View style={styles.cardContent}>
          <Typography variant="title" size="medium" gutterBottom>
            Outline Card
          </Typography>
          <Typography variant="body" size="small" usageType="secondary">
            This card uses the outline variant
          </Typography>
        </View>
      </Card>
    </View>
  );
};

// Pressable Card Example
const PressableCardExample = () => {
  const theme = useTheme();

  return (
    <View style={styles.exampleContainer}>
      <Card style={styles.card} onPress={() => console.log('Card pressed!')}>
        <View style={styles.cardContent}>
          <Typography variant="title" size="medium" gutterBottom>
            Pressable Card
          </Typography>
          <Typography variant="body" size="small" usageType="secondary">
            This card can be pressed to trigger an action
          </Typography>
          <View style={styles.cardIconContainer}>
            <Feather
              name="arrow-right"
              size={20}
              color={theme.colorScheme.typography.primary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

// Colored Card Examples
const ColoredCardExamples = () => {
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
    <View style={styles.coloredCardsGrid}>
      {colors.map((color) => (
        <View key={color} style={styles.colorRowContainer}>
          <Typography variant="label" size="small" gutterBottom>
            {color}
          </Typography>
          <View style={styles.colorRow}>
            {tones.map((tone) => (
              <ColoredCard
                key={`${color}-${tone}`}
                color={color}
                colorTone={tone}
                style={styles.coloredCard}
              >
                <Typography
                  variant="caption"
                  size="small"
                  color={color}
                  colorTone={tone}
                >
                  {tone}
                </Typography>
              </ColoredCard>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

// Card With Content Example
const ContentCardExample = () => {
  const theme = useTheme();

  return (
    <Card style={styles.mediaCard}>
      <View
        style={[
          styles.cardMedia,
          { backgroundColor: theme.colorScheme.palette.primary.low.main },
        ]}
      >
        <Feather
          name="image"
          size={48}
          color={theme.colorScheme.palette.primary.low.contrast}
        />
      </View>
      <View style={styles.cardContent}>
        <Typography variant="title" size="medium" gutterBottom>
          Card with Media
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          This card includes a media area at the top and content below
        </Typography>
        <View style={styles.cardActions}>
          <Typography variant="label" size="small" color="primary">
            SHARE
          </Typography>
          <Typography
            variant="label"
            size="small"
            color="primary"
            style={{ marginLeft: 16 }}
          >
            LEARN MORE
          </Typography>
        </View>
      </View>
    </Card>
  );
};

export default function CardsScreen() {
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
        Cards
      </Typography>

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Basic Cards
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Simple card components with different variants
        </Typography>

        <BasicCardExample />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Pressable Cards
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Cards can be pressable to trigger actions
        </Typography>

        <PressableCardExample />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          Card with Media
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          Cards can include media and action areas
        </Typography>

        <ContentCardExample />
      </View>

      <Divider marginV={16} />

      <View style={styles.section}>
        <Typography variant="title" size="medium" gutterBottom>
          ColoredCard Component
        </Typography>
        <Typography
          variant="body"
          size="small"
          usageType="secondary"
          gutterBottom
        >
          ColoredCard supports different colors and color tones
        </Typography>

        <ColoredCardExamples />
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
  exampleContainer: {
    marginVertical: 8,
  },
  card: {
    marginBottom: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardIconContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  mediaCard: {
    marginVertical: 8,
  },
  cardMedia: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  coloredCardsGrid: {
    marginVertical: 8,
  },
  colorRowContainer: {
    marginBottom: 16,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  coloredCard: {
    padding: 16,
    margin: 4,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
