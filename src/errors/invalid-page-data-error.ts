import { ApplicationError } from '@/protocols';

export function invalidPageData(): ApplicationError {
  return {
    name: 'invalidPageData',
    message: 'Page data is invalid, please try again later.',
  };
}