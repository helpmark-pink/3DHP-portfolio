# 3D Portfolio Website

yukariの個人ポートフォリオサイトです。3DCG技術を活用したインタラクティブなWebサイトで、作品ギャラリーやプロフィール情報を公開しています。
リンクはこちら→https://helpmark.fun
## 概要

このポートフォリオサイトは、3Dデザイナー・クリエイター・プログラマーとしての作品とスキルを紹介するために制作されました。Three.jsを使用した3Dビジュアライゼーションと、モダンなWebデザインを組み合わせています。

## 主な機能

- **3Dビジュアライゼーション**: Three.jsを使用したインタラクティブな3D表現
- **レスポンシブデザイン**: デスクトップとモバイルの両方に対応
- **作品ギャラリー**: 複数カテゴリーの作品を展示
  - 3Dモデリング作品
  - Webアプリケーション
  - Unityゲーム
  - AIプロジェクト
  - ミニゲーム
  - Webデザイン
  - iOSアプリ
  - システム開発
- **プロフィールページ**: スキルセットと経歴の紹介
- **浮遊エフェクト**: CSS アニメーションによる視覚効果

## 技術スタック

### フロントエンド
- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなスタイリングとアニメーション
- **JavaScript (ES6+)**: インタラクティブ機能の実装
- **Three.js**: 3Dグラフィックスのレンダリング

### デザイン
- **Font Awesome**: アイコンライブラリ
- **Devicon**: 技術スタックアイコン
- **カスタムCSS**: ポップで可愛いデザイン

### 開発スキル
- 3Dモデリング (Blender)
- キャラクターデザイン
- アニメーション
- React / Next.js
- Unity (C#)
- Swift / SwiftUI
- WordPress
- Tailwind CSS

## ファイル構成

```
.
├── index.html          # ホームページ
├── pro.html            # プロフィールページ
├── gyara.html          # ギャラリーページ
├── otoi.html           # お問い合わせページ
├── 3d.html             # 3Dモデリング作品
├── web.html            # Webアプリケーション作品
├── unity.html          # Unityゲーム作品
├── ai.html             # AIプロジェクト作品
├── game.html           # ミニゲーム作品
├── hp.html             # Webデザイン作品
├── ios.html            # iOSアプリ作品
├── system.html         # システム開発作品
├── style.css           # メインスタイルシート
├── pro.css             # プロフィールページのスタイル
├── gyara.css           # ギャラリーページのスタイル
├── main.js             # Three.js メインスクリプト
├── build/              # Three.js ビルドファイル
├── jsm/                # Three.js モジュール
├── fonts/              # フォントファイル
├── images/             # 画像アセット
├── models/             # 3Dモデルファイル
└── textures/           # テクスチャファイル
```

## セットアップ

### 前提条件
- モダンなWebブラウザ (Chrome, Firefox, Safari, Edge)
- ローカルWebサーバー（開発時）

### ローカルでの実行

1. リポジトリをクローン
```bash
git clone git@github.com:helpmark-pink/3DHP-portfolio.git
cd 3DHP-portfolio
```

2. ローカルサーバーを起動
```bash
# Pythonを使用する場合
python -m http.server 8000

# Node.jsのhttp-serverを使用する場合
npx http-server
```

3. ブラウザで開く
```
http://localhost:8000
```

## ブラウザ対応

- Chrome (推奨)
- Firefox
- Safari
- Edge
- モバイルブラウザ (iOS Safari, Chrome Mobile)

## ライセンス

このプロジェクトは個人ポートフォリオ用です。

## 作者

**yukari**
- 3Dデザイナー & クリエイター & プログラマー
- 関西在住
- 誕生日: 8月17日

## 特記事項

このサイトは、ASD(自閉症スペクトラム)を持つ開発者によって制作されています。可愛くてポップなデザインと、楽しい作品をお届けすることを目指しています。
