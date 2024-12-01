import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';

export default function Chart({ blueValue, redValue }) {
  const widthAndHeight = 150; // Size of the pie chart
  const series = [blueValue, redValue];
  const sliceColor = ['#0000FF', '#FF0000']; // Colors for blue and red slices

  return (
    <View style={styles.container}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.45}
        // coverFill={'#FFF'}
      />
      <View style={styles.labelsContainer}>
        <Text style={[styles.label, { color: '#0000FF' }]}>Blue: {blueValue}</Text>
        <Text style={[styles.label, { color: '#FF0000' }]}>Red: {redValue}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
    width: '60%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
