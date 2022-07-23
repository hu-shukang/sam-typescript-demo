import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { userService } from 'service';
import { lambdaHandler, validatorUtil } from 'utils';
import { schema } from './schema';

const func = async (event: APIGatewayProxyEvent, _: Context): Promise<string> => {
  const form = validatorUtil.parse(schema, event.body);
  userService.add(form);
  return 'Add OK';
};

export const handler = lambdaHandler(func);
