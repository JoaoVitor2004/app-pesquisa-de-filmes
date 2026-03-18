import { createContext, useState, useEffect, type ReactNode } from "react";

interface Movie {
    title: string,
    overview: string,
    poster_path: string
}

interface movieContextProps {
    movie: Movie[],
    input: string,
    getValue: (value: string) => void,
}

interface propsMovieProvider {
    children: ReactNode
}

const GetMovie = async (title: string) => {
    const apiKey = "b5d8bec6fc9a8e6de4741fa161aa3c84"
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${apiKey}&language=pt-BR`)
    const data = await response.json()
    return data.results
}

export const moviesContexts = createContext({} as movieContextProps)

export const MovieProvider: React.FC<propsMovieProvider> = ({ children }) => {

    const [movie, setMovie] = useState<Movie[]>([])
    const [input, setInput] = useState<string>("")

    useEffect(() => {
        GetMovie(input).then(data => setMovie(data))
    }, [input])

    const getValue = (value: string) => {
        return setInput(value)
    }

    return (
        <moviesContexts.Provider value={{ movie, input, getValue }}>
            {children}
        </moviesContexts.Provider>
    )
}