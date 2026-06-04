import { Box, ScrollArea, Grid, Heading, Badge, Flex } from "@radix-ui/themes"
import { useMovie } from "../hooks/useMovie"
import styles from "../styles/App.module.css"
import CardMovie from "./CardMovie"
import { useRef } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const CardMovies: React.FC = () => {

    const { input, movie, selectedMovie } = useMovie()

    const container = useRef(null)

    useGSAP(() => {

        gsap.from(".movies", {
            y: 80,
            opacity: 0,
            duration: 2,
        })

    }, { scope: container })

    return (
        <Box ref={container} width={"100%"}>
            <Flex justify={"center"}>
                <Badge className="card" color="grass" mb={"8"}>
                    {input === "" ? <Heading as="h2" className={`${styles.text}`}>Os melhores filmes</Heading> : <Heading as="h2" className={styles.text}>Pesquisando por: {input}</Heading>}
                </Badge>
            </Flex>
            <ScrollArea scrollbars="horizontal">
                <Grid className={`${styles.movies} ${"movies"}`} columns={"4"} gap={"9"}>
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
    )
}

export default CardMovies