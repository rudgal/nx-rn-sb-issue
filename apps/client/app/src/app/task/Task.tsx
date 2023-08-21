import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

/* eslint-disable-next-line */
export interface TaskProps {}

export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <View style={styles.listItem}>
      <TextInput value={title} editable={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {},
});
