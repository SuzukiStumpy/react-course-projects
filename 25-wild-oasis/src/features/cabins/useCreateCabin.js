import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
    const queryClient = useQueryClient();
    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: addOrEditCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isCreating, createCabin };
}
