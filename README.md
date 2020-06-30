# 這是用 gatsby.js 製作的 blog

https://www.gatsbyjs.org/

使用 tailwind css

# 選用以下的 Plugin

## Gatsby Tailwind Theme
https://www.gatsbyjs.org/packages/gatsby-theme-tailwindcss

## gatsby-source-filesystem 讀檔
https://www.gatsbyjs.org/packages/gatsby-source-filesystem

```
yarn add gatsby-source-filesystem
```

## gatsby-transformer-remark Markdown

```
yarn add gatsby-transformer-remark
```

## gatsby-remark-slug
https://www.gatsbyjs.org/packages/gatsby-remark-heading-slug

## gatsby-remark-katex 數學式
https://www.gatsbyjs.org/packages/gatsby-remark-katex

## gatsby-remark-embed-video 影片
https://www.gatsbyjs.org/packages/gatsby-remark-embed-video

## gatsby-remark-mermaid 圖表生成
https://www.gatsbyjs.org/packages/gatsby-remark-mermaid

## gatsby-remark-vscode 程式碼
https://www.gatsbyjs.org/packages/gatsby-remark-vscode

windows 裝不起來 !?

## gatsby-plugin-google-analytics GA
https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics


# 不使用以下的 Plugin
## gatsby-theme-blog-core
他會依賴 gatsby-plugin-mdx\loaders\mdx-scopes
但是我們用的是 remark

## gatsby-theme-blog-tags
https://www.gatsbyjs.org/packages/gatsby-theme-blog-tags
他會依賴 gatsby-theme-blog-core

## gatsby-plugin-google-gtag
https://www.gatsbyjs.org/packages/gatsby-plugin-google-gtag
在 windows 上不能安裝

## gatsby-remark-external-links 外部連結安全性
https://www.gatsbyjs.org/packages/gatsby-remark-external-links

幫外部連結加上 target 和 rel。
target 使用 _blank 讓跳出率下降。
rel 使用 noopener 確保外部網站不能用 js 控制我們的網站。

## gatsby-plugin-feed RSS
https://www.gatsbyjs.org/packages/gatsby-plugin-feed

## gatsby-plugin-catch-links SPA
https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links

幫 markdown 裡的內部超連結加上 SPA 效果，不會重新載入頁面

## gatsby-plugin-sitemap sitemap
https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap

幫網站加上 sitemap.xml

## gatsby-plugin-robots-txt
https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt

幫網站加上 robots.txt

# 給觀眾用的
## gatsby-plugin-sharp & gatsby-transformer-sharp 圖檔最佳化
https://www.gatsbyjs.org/packages/gatsby-plugin-sharp
https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/?=

## gatsby-awesome-pagination 分頁
https://www.gatsbyjs.org/packages/gatsby-awesome-pagination

# 給 Google 用的

## gatsby-plugin-manifest PWA
https://www.gatsbyjs.org/packages/gatsby-plugin-manifest

## gatsby-plugin-offline 離線支援
https://www.gatsbyjs.org/packages/gatsby-plugin-offline

## gatsby-plugin-react-helmet 頁面 header
https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/