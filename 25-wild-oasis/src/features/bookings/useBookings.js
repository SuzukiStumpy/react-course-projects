import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    const currentPage = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    // Filter
    const filterValue = searchParams.get("status");
    const filter =
        !filterValue || filterValue === "all"
            ? null
            : { field: "status", value: filterValue };

    // Sort
    const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
    const [field, direction] = sortByRaw.split("-");
    const sortBy = { field, direction };

    const {
        isLoading,
        data: { data: bookings, count } = {},
        error,
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, currentPage],
        queryFn: () => getBookings({ filter, sortBy, currentPage }),
    });

    // Do prefetch
    const pageCount = Math.ceil(count / PAGE_SIZE);

    if (currentPage < pageCount) {
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, currentPage + 1],
            queryFn: () =>
                getBookings({ filter, sortBy, currentPage: currentPage + 1 }),
        });
    }

    if (currentPage > 1) {
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, currentPage - 1],
            queryFn: () =>
                getBookings({ filter, sortBy, currentPage: currentPage - 1 }),
        });
    }

    return { isLoading, error, bookings, count };
}
