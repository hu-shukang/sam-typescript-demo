# 1. プロジェクト概要

ユーザの CRUD（追加、検索、更新、削除）機能を提供している。

■ 使用する技術：

- 言語：Node.js(TypeScript)
- フレームワーク：AWS SAM
- ライブラリ：AJV(バリデーションチェック)
- AWSサービス: APIGateway、Lambda、DynamoDB



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

# 2. ユーザ追加

Postman からユーザを登録して、ユーザ ID を取得します。

![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/01.png?raw=true)

DynamoDB 確認：
![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/02.png?raw=true)

# 3. ユーザ取得

Postman からユーザ ID を指定して、ユーザ情報を取得します。

![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/03.png?raw=true)

# 4. ユーザ変更

Postman からユーザ ID と変更後のユーザ情報を指定して、ユーザ情報を変更します。

![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/04.png?raw=true)

DynamoDB 確認：
![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/05.png?raw=true)

# 5. ユーザ削除

Postman からユーザ ID を指定して、ユーザ情報を削除します。

![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/06.png?raw=true)

DynamoDB 確認：
![image](https://github.com/hu-shukang/sam-typescript-demo/blob/main/doc/07.png?raw=true)
