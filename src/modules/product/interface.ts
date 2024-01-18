import { ISize } from "../size/interface";

export interface IProdcut {
  id: number;
  name: string;
  size: ISize[];
  price: number;
  descrip: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}
