import { Box, Heading, Text } from "@radix-ui/themes"
import styles from "../styles/App.module.css"
import { type Movie } from "../contexts/MoviesContexts"

interface propsMovie {
    movie: Movie
}

const CardMovie: React.FC<propsMovie> = ({ movie }) => {
    return (
        <Box style={{ position: "relative" }} width={"100%"} height={"400px"} p={"2"} className={styles.card}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="Poster do filme" />
            <Box>
                <Heading as="h2" mb={"4"}>Título: {movie?.title}</Heading>
                <Text as="p" size={"3"}>{movie?.overview}</Text>
            </Box>
        </Box>
    )
}

export default CardMovie