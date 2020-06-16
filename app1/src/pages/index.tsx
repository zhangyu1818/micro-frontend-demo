import React, { useEffect } from 'react';
import { Link, useRootExports } from 'umi';
import styles from './index.less';

export default () => {
  const { bindOnChange, setData } = useRootExports();
  useEffect(() => {
    const unBind = bindOnChange((data: any) => {
      console.log('root exports data change:', data);
    });
    return () => unBind();
  }, []);
  return (
    <div>
      <h1 className={styles.title}>app1 umi home</h1>
      <Link to="/page1">page1</Link>
      <br />
      <Link to="/page2">page2</Link>
      <br />
      <label>
        set root exports data
        <input
          type="text"
          onChange={({ currentTarget }) => {
            setData(currentTarget.value);
          }}
        />
      </label>
      {/*<Link to="/">go back</Link>*/}
    </div>
  );
};
