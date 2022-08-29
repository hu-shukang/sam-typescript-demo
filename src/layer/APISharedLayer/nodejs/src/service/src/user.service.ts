import { HttpError, UserForm, UserModel } from 'model';
import { DynamoDB } from 'aws-sdk';
import { Const } from 'utils';
import { v4 } from 'uuid';

export class UserService {
  private docClient: DynamoDB.DocumentClient;
  private tableName = 'SAM-Typescript-Demo-UserTable';

  constructor() {
    this.docClient = new DynamoDB.DocumentClient({
      region: Const.REGION,
    });
  }

  /**
   * DBにユーザ情報を挿入する
   *
   * @param form ユーザ情報Form
   * @returns ユーザID
   */
  public async add(form: UserForm): Promise<string> {
    const id = v4();
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: this.tableName,
      Item: {
        ...form,
        id: id,
      },
    };
    await this.docClient.put(params).promise();
    return id;
  }

  /**
   * DBからユーザ情報を削除する
   *
   * @param id ユーザID
   */
  public async delete(id: string) {
    const params: DynamoDB.DocumentClient.DeleteItemInput = {
      TableName: this.tableName,
      Key: {
        id: id,
      },
    };
    await this.docClient.delete(params).promise();
  }

  /**
   * DBからユーザ情報を取得する
   *
   * @param id ユーザID
   * @returns ユーザ情報
   */
  public async get(id: string): Promise<UserModel> {
    const params: DynamoDB.DocumentClient.GetItemInput = {
      TableName: this.tableName,
      Key: {
        id: id,
      },
    };
    const result = await this.docClient.get(params).promise();
    if (result.Item) {
      return result.Item as UserModel;
    }
    throw new HttpError(Const.HTTP_STATUS_400, '該当ユーザは存在しません');
  }

  /**
   * ユーザ情報を更新する
   *
   * @param id ユーザID
   * @param form ユーザ情報
   */
  public async update(id: string, form: UserForm) {
    const params: DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: this.tableName,
      Key: {
        id: id,
      },
      UpdateExpression: 'set #email = :email, #name = :name',
      ConditionExpression: 'attribute_exists(#id)',
      ExpressionAttributeNames: {
        '#id': 'id',
        '#email': 'email',
        '#name': 'name',
      },
      ExpressionAttributeValues: {
        ':email': form.email,
        ':name': form.name,
      },
    };
    await this.docClient.update(params).promise();
  }
}
