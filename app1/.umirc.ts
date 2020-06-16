import { defineConfig } from 'umi';

export default defineConfig({
  base: `/app1`, // 子应用的 base，默认为 package.json 中的 name 字段
  qiankun: { slave: {} },
});
