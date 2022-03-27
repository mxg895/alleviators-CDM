import { Aspect, Goal, SubCategory } from "../../questionnaires/types";

interface ResourceDetail {
  // title: string,
  aspect: Aspect[],
  goal: Goal[],
  subcategory: SubCategory[],
  // imageName: string,
  content: string,
  description: string,
  externalLinks: string,
  created?: string,
  lastUpdate?: string
}

export interface ResourceDetailsMap {
  [id: string]: ResourceDetail
}

export interface ResourceSummary {
  title: string,
  imageName: string,
  type?: SubCategory
}

export default ResourceDetail;
