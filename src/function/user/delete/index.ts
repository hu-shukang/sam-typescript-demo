import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { userService } from 'service';
import { HttpError } from 'model';
import { lambdaHandler, Const } from 'utils';

const func = async (event: APIGatewayProxyEvent, _: Context): Promise<string> => {
  const id = event.pathParameters?.id;
  if (id == undefined) {
    throw new HttpError(Const.HTTP_STATUS_400, 'not found id');
  }
  await userService.delete(id);
  return 'Delete OK';
};

export const handler = lambdaHandler(func);
