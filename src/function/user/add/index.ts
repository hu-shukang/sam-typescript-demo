import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { userService } from 'service';
import { lambdaHandler, validatorUtil } from 'utils';
import { schema } from './schema';

const func = async (event: APIGatewayProxyEvent, _: Context): Promise<any> => {
  const form = validatorUtil.parse(schema, event.body);
  const id = await userService.add(form);
  return {
    id: id,
  };
};

export const handler = lambdaHandler(func);
