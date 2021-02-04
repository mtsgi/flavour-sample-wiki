module.exports = {
  title: 'サンプルWiki',
  lang: 'ja',
  description: 'どなたでも自由に記事の作成、編集を行うことができます。',
  style: '/assets/app.css',
  dict: {
    newArticle: 'Page記事作成',
    newArticleLabel: '[作成]',
    defaultArticleTitle: '{{ 記事タイトル }}',
    defaultArticleBody: '{{ *ここに本文を記述してください* }}',
    editArticle: 'Page:記事編集',
    editArticleLabel: '[更新]',
    allArticles: 'すべての記事'
  },
  markdown: {
    breaks: true,
    gfm: true
  },
  links: [
    {
      href: "/",
      label: "[リンク] 🏠 トップページ"
    },
    {
      href: "/snapshot",
      label: "[コマンド] 📸 現在のスナップショットを取得"
    },
    {
      href: "https://github.com/mtsgi/flavour",
      label: "[外部] 🔗 Flavour GitHub repo"
    },
    {
      href: "https://www.npmjs.com/package/flavour-wiki",
      label: "[外部] 🔗 flavour-wiki npm package"
    }
  ]
};
