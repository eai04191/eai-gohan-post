# eai-gohan-post

![](https://i.imgur.com/HxjaLKB.jpg)

## これはなに

[#えあいさんちの今日のごはん](https://stellaria.network/tags/%E3%81%88%E3%81%82%E3%81%84%E3%81%95%E3%82%93%E3%81%A1%E3%81%AE%E4%BB%8A%E6%97%A5%E3%81%AE%E3%81%94%E3%81%AF%E3%82%93) を自動で投稿するためのスクリプトです。

## しくみ

1. Google Home に「いただきます」と発声する
2. IFTTT のフックでPushbulletで「いただきます」という文字を送信する  
    ![IFTTT のフック](https://i.imgur.com/0MsxrEq.png)
3. EventGhost のフックでウェブカメラで机の上を撮影し、このリポジトリの `main.js` を実行する
    ```
    cd /d C:\Users\Eai\Documents\git\eai-gohan-post && node --require dotenv/config main.js
    ```
    ![EventGhost のフック](https://i.imgur.com/0Pj9fla.png)
4. 保存先から最も新しい写真を180度回転してからアップロードし、ハッシュタグをつけて投稿する

## つかったもの

- [Webcam Image Capture Plugin - EventGhost](http://www.eventghost.net/forum/viewtopic.php?t=5576)
- [vanita5/mastodon-api: Mastodon API Client Library](https://github.com/vanita5/mastodon-api)

## ライセンス

MIT
