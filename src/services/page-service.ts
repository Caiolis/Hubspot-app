import { PageType } from "@/protocols";
import { postHubspotPage } from "@/utils";

export async function createPage(pageData: PageType) {
  return await postHubspotPage(pageData);
};