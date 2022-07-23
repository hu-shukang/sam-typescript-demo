import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { userService } from 'service';
import { HttpError } from 'model';
import { Const, lambdaHandler, validatorUtil } from 'utils';
import { schema } from './schema';

const func = async (event: APIGatewayProxyEvent, _: Context): Promise<string> => {
  const id = event.pathParameters?.id;
  if (id == undefined) {
    throw new HttpError(Const.HTTP_STATUS_400, 'not found id');
  }
  const form = validatorUtil.parse(schema, event.body);
  userService.update(id, form);
  return 'Update OK';
};

export const handler = lambdaHandler(func);
