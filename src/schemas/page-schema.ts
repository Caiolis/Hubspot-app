import Joi from "joi";
import { PageType } from "@/protocols";

export const PageSchema = Joi.object<PageType>({
  name: Joi.string().required(),
  slug: Joi.string().required(),
  content_group_id: Joi.number().required(),
  html_title: Joi.string().required(),
  publish_date: Joi.date().required(),
  template_path: Joi.string().required(),
});