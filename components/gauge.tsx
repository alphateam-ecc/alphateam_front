import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Gauge = ({ value = 25, unit = '°C', label = '温度', max = 40 }) => {
  const size = 160; // 円のサイズ
  const strokeWidth = 15;
  const radius = (size - strokeWidth) / 2;
  const angle = 270;
  const circumference = 2*  radius * Math.PI * (angle /360); // 半円
  const progress = (value / max) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* 背景半円 */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ABCABA"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={0}
          rotation={135}
          origin={`${size / 2}, ${size / 2}`}
        />

        {/* 進捗半円 */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fff"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={circumference * (1 -value /max)}
          rotation={135}
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* テキスト部分 */}
      <View style={styles.textWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>
          {value}
          <Text style={styles.unit}>{unit}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  textWrapper: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',

  },
  label: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
  },
  value: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '600',
  },
  unit: {
    fontSize: 18,
  },
  subLabel: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
  },
});

export default Gauge;
