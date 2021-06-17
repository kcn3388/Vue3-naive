# naive

## Introduce

This is a personal customized error page for htm err codes. Using [naive-ui](https://github.com/TuSimple/naive-ui), powered by[Vue3](https://github.com/vuejs/vue-next).

[Vue3 Docs](https://v3.vuejs.org/)

[naive-ui Docs](https://www.naiveui.com/en-US/dark)

Examples: [404](https://res.kcn3388.club/?404) [403](https://res.kcn3388.club/?403) [500](https://res.kcn3388.club/?500) [503](https://res.kcn3388.club/?503)

<details>
<summary>Examples</summary>

![](./img/404.png)

![](./img/403.png)

![](./img/500.png)

![](./img/503.png)


</details>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration

#### Homepage

Personaly using Timeline and my favorite img for home page, you can modify ``App.vue`` to have your on personal favorite. Here I recommend [naive-ui](https://www.naiveui.com/zh-CN/dark/components/button) for your components.

<details>
<summary>Example</summary>

![](./img/homepage.png)

</details>

#### Error page

The button under message can be modified to adapt different functions.

### 如何使用？

Using Apache as an example, find the followings in the config file, then uncomment necessary codes and add links for them.

```xml
# Some examples:
ErrorDocument 500 https://res.kcn3388.club/?500
ErrorDocument 404 https://res.kcn3388.club/?404
#ErrorDocument 404 "/cgi-bin/missing_handler.pl"
#ErrorDocument 402 http://www.example.com/subscription_info.html
ErrorDocument 503 https://res.kcn3388.club/?503
ErrorDocument 403 https://res.kcn3388.club/?403
```
