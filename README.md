# Portfolio
[Here](https://yu-9824.github.io/portfolio/) is my portfolio.

## To do
- snsを開設?
- snsアイコンをgithub以外にも追加．
- ~~jQueryをvue.jsで書き換え．~~
- ~~階層を変化させたので，headerのリンクを変える必要がある．~~<br>
    ~~→ Vue Routerの導入により動的に変化させたい．~~<br>
    → 自分にはまだ早そう．できなかった．<br>
    - とりあえず，aタグで直接それぞれの要素に飛べるようにした．
- サイトマップの設置 → サーチコンソールへの登録

## Here is my tips below (Japanese)
### スマホ版のレイアウト確認方法 (safari)
パソコンだけで，
「開発」>「レスポンシブデザインモードにする」

### サイトマップの生成
やり方は[こちら](https://r17n.page/2019/10/25/github-pages-from-docs-generation-sitemap/)を参考にした．

ただ単に`_config.yml`を作成し，
```yaml
plugins:
  - jekyll-sitemap
```
として，pushしただけ．

公式サイト: [GitHub PagesとJekyllについて](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)

おそらくjekyllをうまく使えば，exclueできそうだが，github pagesの場合，上記公式サイトによると`_`から始まるファイルはサイトマップから除外される~~らしい~~．

であるため，テンプレートのhtmlファイルなど，サイトマップから簡単に除外できる．

pushしてみてわかったことだが，`memo.md`があったところ，これもサイトマップに登録されてしまった．(実際memo.htmlのリンクでREADMEでよく見る感じのレイアウトのページを見ることができた．)

`README.md`もあったはずだが，これはサイトマップには登録されていないので，そういう設定なのだと思う．(README.htmlも404になった．)

また，サイトマップが生成されたら何かが変化すると思ったが，何も変化せず，`github.io/portfolio/sitemap.xml`にアクセスしたら生成されていることがわかった．


### 運用上の注意点
~~`work.html`を作成する際，ディレクトリを作ってその中にまとめようとすると，head部分の共通としている部分がパスが通らなくなり，壊れてしまう．~~

~~そのため，`index.html`と同じ階層に足していく必要がある．~~

最初にcssが読み込まれていないサイトが出てきてしまうので，仕方なく，`head.html`のみ外部ファイルでの取り扱いをやめた．


### 開発上の注意点
~~ChromeではCORSに引っかかるので，Safariでしかローカル環境でのデバッグができない．~~
→ 文字列としてjavascript内に定義したものを利用しているので現在は問題ない．


### クロスオリジンの制限を無効
~~Javascript (jQuery) で他のhtmlを読み込んでしまうとローカル環境においてはエラーを吐いてしまう．(consoleを見ればわかる．)~~
→ 文字列としてjavascript内に定義したものを利用しているので現在は問題ない．

~~それを解決するためには「開発」>「クロスオリジンの制限を無効」をチェックする．(セキュリティ的にはあまりしたくない)~~