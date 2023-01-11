export type FetchData = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};
export type UseFetchType = {
  data: any;
  loading: boolean;
  error: string;
  makeApiCall: () => void;
};
export type UseStateContextType = {
  openModal?: boolean;
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow?: FetchData | null;
  setSelectedRow?: React.Dispatch<React.SetStateAction<FetchData | null>>;
};
export type ContextState = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRow: FetchData | null;
  setSelectedRow: React.Dispatch<React.SetStateAction<FetchData | null>>;
};
export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
