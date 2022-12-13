
export interface categories {
    categories: Category[];
}
  export interface Category {
    nameCategory: string;
    idCategory: string;
    statusCategory: number;
    linesCategory: string[];
    descriptionCategory: string;
    is_closed_by_scheduleCategory: boolean;
  }
