# 1. プロジェクト概要

ユーザの CRUD（追加、検索、更新、削除）機能を提供している。

■ 使用する技術：

- 言語：Node.js(TypeScript)
- フレームワーク：AWS SAM
- ライブラリ：AJV(バリデーションチェック)
- DB: DynamoDB

■ フォルダー構成

- function: Lambda ソースコード
- layer: 共通ソースコード

■ API

| URL        | Http Method | Comment    |
| ---------- | ----------- | ---------- |
| /user      | POST        | ユーザ追加 |
| /user/{id} | GET         | ユーザ取得 |
| /user/{id} | PUT         | ユーザ変更 |
| /user/{id} | DELETE      | ユーザ削除 |

============================================

1. ユーザ追加
