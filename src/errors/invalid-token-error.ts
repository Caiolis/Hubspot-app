import { ApplicationError } from '@/protocols';

export function invalidTokenError(): ApplicationError {
  return {
    name: 'invalidTokenError',
    message: 'Token is invalid, please try again later.',
  };
}