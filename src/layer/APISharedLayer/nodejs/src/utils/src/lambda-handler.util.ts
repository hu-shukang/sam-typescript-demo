import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult, Context } from 'aws-lambda';

export type Func<T> = (event: APIGatewayProxyEvent, context: Context) => Promise<T>;

export const lambdaHandler = <T>(func: Func<T>): APIGatewayProxyHandler => {
  return async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log('=======start======');
    console.log(JSON.stringify(context));
    console.log(JSON.stringify(event));
    try {
      const result = await func(event, context);
      console.log('=======end======');
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (e: any) {
      console.log('=======error======');
      console.log(e.message);
      if (e.constructor.name == 'HttpError') {
        return {
          statusCode: e.getStatusCode(),
          body: JSON.stringify({
            error: e.message,
          }),
        };
      } else if (e.constructor.name == 'ValidateError') {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: e.getInfoList(),
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: 'Interal Server Error',
            detail: e.message,
          }),
        };
      }
    } finally {
      console.log('=======finally======');
    }
  };
};
