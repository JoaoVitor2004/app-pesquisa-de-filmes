import { moviesContexts } from "../contexts/MoviesContexts";
import { useContext } from "react";

export const useMovie = () => {
    return useContext(moviesContexts)
}