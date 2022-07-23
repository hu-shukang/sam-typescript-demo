import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { userService } from 'service';
import { HttpError, UserModel } from 'model';
import { lambdaHandler, Const } from 'utils';

const func = async (event: APIGatewayProxyEvent, _: Context): Promise<UserModel> => {
  const id = event.pathParameters?.id;
  if (id == undefined) {
    throw new HttpError(Const.HTTP_STATUS_400, 'not found id');
  }
  const user = userService.get(id);
  return user;
};

export const handler = lambdaHandler(func);
