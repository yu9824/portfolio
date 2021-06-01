# [Portfolio](https://yu-9824.github.io/portfolio/)
[Here](https://yu-9824.github.io/portfolio/) is my portfolio.

## To do
- snsを開設?
- snsアイコンをgithub以外にも追加．
- ~~jQueryをvue.jsで書き換え．~~
- ~~階層を変化させたので，headerのリンクを変える必要がある．~~<br>
    ~~→ Vue Routerの導入により動的に変化させたい．~~<br>
    → 自分にはまだ早そう．できなかった．<br>
    - とりあえず，aタグで直接それぞれの要素に飛べるようにした．
- ~~サイトマップの設置 → サーチコンソールへの登録~~
- ~~スキルを円グラフ or 星で作成~~
  - 一応できたが，アニメーションでかっこいいやつもやってみたい．
- ~~aboutをgithub iconと自己紹介文章で作成~~
- workを記事一覧みたいな感じで作成したい．
  - htmlでthumnailを読み込む設定を行いたい．
    - og:imageの画像を読み込めないか？
      - もしくは今のままサムネイル生成を自動のままにするか．
    - og:titleを読めないか？
    - og:descriptionを読めないか？
    - 今は上記それぞれをjs/works.jsで個別指定してる．
  - タグによる検索を可能にしたい．(使用言語etc.)
  - もう少しレイアウト (3分割をそれぞれ真ん中に配置する，みたいな．) を調節したい．
  - metaデータなどをvueで管理することは可能？ページごとに毎度手打ちして変更するのは面倒．
  - めちゃくちゃ多くなったらもっと表示，等も必要になってきそう．
- background-imageのcentering?
- 英語，日本語切り替え

## Here is my tips below (Japanese)
### スマホ版のレイアウト確認方法 (safari)
パソコンだけで，スマホ版のレイアウトを確認することができる．

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

また，サイトマップが生成されたら何かが変化すると思ったが，何も変化せず，`yu-9824/github.io/portfolio/sitemap.xml`にアクセスしたら生成されていることがわかった．

サーチコンソールへの登録も行なったが，なぜか失敗している (2021年5月31日現在)


### 運用上の注意点
~~`work.html`を作成する際，ディレクトリを作ってその中にまとめようとすると，head部分の共通としている部分がパスが通らなくなり，壊れてしまう．~~

~~そのため，`index.html`と同じ階層に足していく必要がある．~~

~~最初にcssが読み込まれていないサイトが出てきてしまうので，仕方なく，`head.html`のみ外部ファイルでの取り扱いをやめた．~~

→ CORSの観点からも，Vue.jsを使いたいという観点からもやめた．


### 開発上の注意点
~~ChromeではCORSに引っかかるので，Safariでしかローカル環境でのデバッグができない．~~
→ 文字列としてjavascript内に定義したものを利用しているので現在は問題ない．


### クロスオリジンの制限を無効
~~Javascript (jQuery) で他のhtmlを読み込んでしまうとローカル環境においてはエラーを吐いてしまう．(consoleを見ればわかる．)~~

→ 文字列としてjavascript内に定義したものを利用しているので現在は問題ない．

~~それを解決するためには「開発」>「クロスオリジンの制限を無効」をチェックする．(セキュリティ的にはあまりしたくない)~~


### faviconの自作
faviconを落ちているもののままにするのもあまり良くないと思ったので，自作することにした．

1. 画像を用意 (自分はpngで用意した．)
2. プレビューで開く
3. 編集する
   - 円でくり抜くなど
4. 【重要】「フォーマット」をクリックするときに **"⌥ (option)"を押しておく**
5. 選択肢の中から「Microsoltアイコン」を選択する．
   - 本当は.icoじゃなくてもいいかもしれないけど，太古のブラウザを使っている場合などは表示できない可能性があるなら，これが都合が良いと考えた．

Macのプレビューだけで完結するとはおもわなんだ．

参考サイト: [こちら](https://www.msng.info/archives/2011/12/how-to-create-favicon-with-mac.php)


### コードブロック
  Google code-prettfyを使用した．<br>Githubは[こちら](https://github.com/googlearchive/code-prettify)．

  ```html
  <!-- google code-prettfy -->
  <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert"></script>
  ```
  をbodyの最後あたりに入れている．

  `?skin=xxxx`の部分はテーマを表しており，[こちら](https://rawgit.com/google/code-prettify/master/styles/index.html)よりどのようなテーマがあるか確認できる．(自分はdesert)

  あとは，コードブロックにしたいところで，
  ```html
  <pre class="prettyprint lang-python">
    <code>
      greet = 'Hello world!'
      print(greet)
    </code>
  </pre>
  ```
  とすれば，
  ```python
  greet = 'Hello world!'
  print(greet)
  ```
  となる．