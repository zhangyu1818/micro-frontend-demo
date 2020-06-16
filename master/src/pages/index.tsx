import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Master umi app</h1>
      <Link to="/app1">app1</Link>
      <br />
      <Link to="/app2">app2</Link>
    </div>
  );
};
