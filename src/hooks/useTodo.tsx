import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useTodo() {
  const getTodo = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axiosInstance.get("/todos?_limit=10");

      return response?.data;
    },
  });

  return {
    getTodo,
  };
}
