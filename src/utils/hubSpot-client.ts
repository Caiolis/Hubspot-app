import axios from "axios";
import { PageType } from "@/protocols";

export async function postHubspotPage(pageData: PageType) {
  // TODO: Get access token

  const response = await axios.post('https://api.hubapi.com/cms/v3/pages', pageData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${}`,
    },
  });
  
  return response.data;
};