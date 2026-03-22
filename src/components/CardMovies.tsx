import { Box, ScrollArea, Grid, Heading, Badge, Flex } from "@radix-ui/themes"
import { useMovie } from "../hooks/useMovie"
import styles from "../styles/App.module.css"
import CardMovie from "./CardMovie"

const CardMovies: React.FC = () => {

    const { input, movie, selectedMovie } = useMovie()

    return (
        <Box width={"100%"} p={"8"}>
            <Box>
                <Flex justify={"center"}>
                    <Badge color="grass" mb={"8"}>
                        { input === "" ? <Heading size={"8"} as="h2">Os melhores filmes</Heading> : <Heading size={"8"} as="h2">Pesquisando por: {input}</Heading> }
                    </Badge>
                </Flex>
                <ScrollArea scrollbars="horizontal">
                    <Grid className={styles.movies} gap={"9"}>
                        {
                            input === "" && (
                                movie.map(movie => <CardMovie key={movie.id} movie={movie} />)
                            ) || (
                                selectedMovie.map(movie => <CardMovie key={movie.id} movie={movie} />)
                            )
                        }
                    </Grid>
                </ScrollArea>
            </Box>
        </Box>
    )
}

export default CardMovies