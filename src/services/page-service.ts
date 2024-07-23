import { invalidPageData } from '@/errors/invalid-page-data-error';
import axios from 'axios';
import { tokens } from '@/app';
import { invalidTokenError } from '@/errors';

export async function createPage(pageData) {
  if (!pageData) throw invalidPageData();
  if (tokens.accessToken == null) throw invalidTokenError();

  try {
    const response = await axios.post('https://api.hubapi.com/cms/v3/pages/landing-pages', pageData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    return {
      message: 'Welcome page created successfully',
      data: response.data,
    };
  } catch (error) {
    console.error('Error creating welcome page:', error.response ? error.response.data : error.message);
    throw invalidPageData();
  }
}
