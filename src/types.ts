export interface Location {
  lng: number;
  lat: number;
}

export interface Job {
  _id: string;
  address: string;
  benefits: string[];
  createdAt: any;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
  location: Location;
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
}

export interface UsePagination {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export type Pagination = UsePagination & {
  onPageChange: (page: number) => void;
};
