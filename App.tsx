import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

type Props = {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon,
}: Props) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[`variant_${variant}`],
        styles[`size_${size}`],
        isDisabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? '#007AFF' : '#fff'}
        />
      ) : (
        <>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text
            style={[
              styles.text,
              variant === 'outline' && styles.outlineText,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <Button
        title="Primary Button"
        variant="primary"
        size="small"
        onPress={handlePress}
      />

      <Button
        title="Secondary Button"
        variant="secondary"
        size="medium"
        onPress={handlePress}
      />

      <Button
        title="Outline Button"
        variant="outline"
        size="large"
        onPress={handlePress}
      />

      <Button
        title="Danger Button"
        variant="danger"
        size="medium"
        onPress={handlePress}
      />

      <Button
        title="Loading..."
        loading
        onPress={handlePress}
      />

      <Button
        title="Disabled"
        disabled
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    gap: 12,
  },

  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // Variants
  variant_primary: {
    backgroundColor: 'green',
  },

  variant_secondary: {
    backgroundColor: 'blue',
  },

  variant_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'lightblue',
  },

  variant_danger: {
    backgroundColor: 'orange',
  },

  // Sizes
  size_small: {
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  size_medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  size_large: {
    paddingVertical: 13,
    paddingHorizontal: 28,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  outlineText: {
    color: '#007AFF',
  },

  icon: {
    marginRight: 8,
  },

  disabled: {
    opacity: 0.5,
  },
});
