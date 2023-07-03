import { createColumnHelper } from "@tanstack/react-table";
import DetailsButton from "./DetailsButton";

const columnHelper = createColumnHelper();

export const Columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("", {
    header: "Details",
    cell: (info) => {
      const ID = info.row.original.id;
      return <DetailsButton ID={ID} />;
    },
  }),
];
