import { UserForm } from 'model';
import { JSONSchemaType } from 'ajv';

export const schema: JSONSchemaType<UserForm> = {
  type: 'object',
  required: ['name', 'email'],
  properties: {
    name: {
      type: 'string',
      errorMessage: {
        type: 'ユーザ名は文字列です',
      },
    },
    email: {
      type: 'string',
      format: 'email',
      errorMessage: {
        type: 'メールは文字列です',
        format: 'メールの形式は正しくないです',
      },
    },
  },
  additionalProperties: false,
  errorMessage: {
    type: 'JSONフォーマットは正しくない',
    required: {
      name: 'ユーザ名は必須です',
      email: 'メールは必須です',
    },
    additionalProperties: '要求外のフィールドがありました',
  },
};
