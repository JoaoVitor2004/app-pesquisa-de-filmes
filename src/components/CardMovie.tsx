import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import styles from "../styles/App.module.css"
import { type Movie } from "../contexts/MoviesContexts"

interface propsMovie {
    movie: Movie
}

const CardMovie: React.FC<propsMovie> = ({ movie }) => {
    return (
        <Flex direction={"column"} gap={"6"} p={"2"} className={styles.card}>
            <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="Poster do filme" />
            <Box>
                <Heading className={styles.title} as="h2" mb={"6"}>Título: {movie?.title}</Heading>
                <Text className={styles.description} as="p" size={"3"}>{movie?.overview}</Text>
            </Box>
        </Flex>
    )
}

export default CardMovie