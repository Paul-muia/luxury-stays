import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  className?: string;
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul"> & {
  className?: string;
}) => (
  <ul
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
);

const PaginationItem = ({
  className,
  ...props
}: React.ComponentProps<"li"> & {
  className?: string;
}) => (
  <li className={cn("", className)} {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      isActive && "bg-secondary text-white hover:bg-secondary-light",
      className
    )}
    {...props}
  />
);

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span"> & {
  className?: string;
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

// Extended Pagination component with practical functionality
interface PaginationProps {
  pageCount: number;
  page: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const PaginationComplete = ({
  pageCount,
  page,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) => {
  // Generate page numbers array with ellipsis
  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 3; // +3 for first, current, and last page
    
    // Case 1: If number of pages is less than the page numbers we want to show
    if (totalPageNumbers >= pageCount) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    
    // Calculate left and right sibling index
    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, pageCount);
    
    // Show ellipsis
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pageCount - 1;
    
    // Case 2: Show right dots only
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 1 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "ellipsis", pageCount];
    }
    
    // Case 3: Show left dots only
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 1 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => pageCount - rightItemCount + i + 1
      );
      return [1, "ellipsis", ...rightRange];
    }
    
    // Case 4: Show both left and right dots
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, "ellipsis", ...middleRange, "ellipsis", pageCount];
    }
    
    return [];
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => page > 1 && onPageChange(page - 1)}
            tabIndex={page === 1 ? -1 : 0}
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        
        {pageNumbers.map((pageNumber, i) => (
          <PaginationItem key={i}>
            {pageNumber === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                isActive={page === pageNumber}
                onClick={() => onPageChange(pageNumber as number)}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        
        <PaginationItem>
          <PaginationNext 
            onClick={() => page < pageCount && onPageChange(page + 1)}
            tabIndex={page === pageCount ? -1 : 0}
            aria-disabled={page === pageCount}
            className={page === pageCount ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationComplete
};
