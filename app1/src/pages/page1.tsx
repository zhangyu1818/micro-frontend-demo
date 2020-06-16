import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>app1 umi page1</h1>
      <Link to="/">back</Link>
    </div>
  );
};
