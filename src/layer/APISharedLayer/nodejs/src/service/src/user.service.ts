import { UserForm, UserModel } from 'model';

export class UserService {
  public add(form: UserForm) {
    // DBにユーザ情報を挿入する
    console.log(JSON.stringify(form));
  }

  public delete(id: string) {
    // DBからユーザ情報を削除する
    console.log(`id: ${id}`);
  }

  public get(id: string): UserModel {
    // DBからユーザ情報を取得する
    console.log(`id: ${id}`);
    return {
      id: id,
      name: 'test',
      email: 'test@abc.com',
    };
  }

  public update(id: string, form: UserForm) {
    // ユーザ情報を更新する
    console.log(`id: ${id}`);
    console.log(JSON.stringify(form));
  }
}
