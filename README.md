# TypeScript Runtime Environment

TypeScript実行環境用のプロジェクトテンプレートです。

## 技術スタック

- **TypeScript**: ^5.0.0
- **Node.js**: ^20.0.0
- **pnpm**: >=8.0.0
- **ESLint**: ^8.56.0
- **Prettier**: 3.2.5
- **Jest**: ^29.7.0

## ディレクトリ構造

```
typescript-runtime/
├── src/           # TypeScriptソースコード
├── dist/          # コンパイル済みJavaScript（自動生成）
├── tests/         # テストファイル
├── scripts/       # ビルドスクリプト等
├── package.json   # パッケージ設定
├── tsconfig.json  # TypeScript設定
├── .eslintrc.js   # ESLint設定
├── .prettierrc    # Prettier設定
├── jest.config.js # Jest設定
├── .npmrc         # pnpm設定
└── README.md      # このファイル
```

## セットアップ

1. 依存関係のインストール:
```bash
pnpm install
```

2. TypeScriptのコンパイル:
```bash
pnpm run build
```

3. アプリケーションの実行:
```bash
pnpm start
```

## 開発用コマンド

- `pnpm run dev` - ts-nodeを使用した開発実行
- `pnpm run build` - TypeScriptのコンパイル
- `pnpm run watch` - ファイル変更の監視とコンパイル
- `pnpm run test` - テストの実行
- `pnpm run lint` - ESLintによるコード検査
- `pnpm run format` - Prettierによるコード整形
- `pnpm run clean` - distディレクトリのクリア

## 使用方法

`src/index.ts`がメインエントリーポイントです。ここからアプリケーションの開発を始めてください。

## pnpmの利点

- **高速**: 効率的なキャッシュシステムによる高速インストール
- **ディスク効率**: シンボリックリンクによるディスク使用量の削減
- **厳密性**: より厳密な依存関係管理 