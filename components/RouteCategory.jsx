import React from 'react';
import { StyleSheet, css } from '@/v2/aphrodite';
import { routeCategoryToString } from '@/lib/routeHelpers';


const RouteCategory = ({ route }) => (
  <div className={css(styles.routeDataTableCategoryTrack)}>
    {routeCategoryToString(route)}
  </div>
);

const styles = StyleSheet.create({
  routeDataTableCategoryTrack: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '60px',
  },
});

export default RouteCategory;

