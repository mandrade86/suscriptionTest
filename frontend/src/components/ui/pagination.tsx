
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPages = () => {
    const pages = [];
    const maxDisplayed = 5;

    if (totalPages <= maxDisplayed) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-1 mt-8">
      <Button
        className="p-2 disabled:text-gray-300"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {getPages().map((page, idx) =>
        typeof page === "number" ? (
          <Button
            key={idx}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md text-sm font-medium ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "text-blue-500 hover:bg-blue-100"
            }`}
          >
            {page}
          </Button>
        ) : (
          <span key={idx} className="w-8 h-8 flex items-center justify-center text-gray-500">
            ...
          </span>
        )
      )}

      <Button
        className="p-2 disabled:text-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
