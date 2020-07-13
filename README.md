# qiankun 微前端demo

- master 基于umijs的qiankun主应用
- qiankun-base 只有一个html的qiankun主应用
- app1 基于umijs的qiankun子应用
- app2-cra 基于create-react-app的qiankun子应用

## 启动

分别安装依赖

```sh
cd app1 && yarn
cd app2-cra && yarn
cd master && yarn
cd qiankun-base && yarn
```

分别启动项目

```sh
yarn run start      乘4
```

- master localhost:8000
- app1 localhost:8001
- app2-cra localhost:8002
- qiankun-base localhost:8080

主应用路由

- app1 localhost:8000/app1
  - /app1/page1
  - /app1/page2
- app2-cra localhost:8000/app2
  - /app2/page1
  - /app2/page2
  - /app2/page3/:id

