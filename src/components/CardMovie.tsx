import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import styles from "../styles/App.module.css"
import { type Movie } from "../contexts/MoviesContexts"
import { useRef } from "react"

interface propsMovie {
    movie: Movie
}

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

const CardMovie: React.FC<propsMovie> = ({ movie }) => {

    const container = useRef(null)

    useGSAP(() => {

        const split = SplitText.create(".title", {
            type: "lines words chars",
            mask: "lines"
        })

        gsap.from(".poster", {
            y: 80,
            filter: "blur(10px)",
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".poster",
            }
        })

        gsap.from(split.chars, {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".title"
            }
        })

    }, { scope: container })


    const date = new Date(movie.release_date).toLocaleString("pt-BR").split("").splice(0, 10, "")

    console.log(date)

    return (
        <Card className={styles.movie}>
            <Flex ref={container} direction={"column"} gap={"6"} p={"2"} className={styles.card}>
                <img className={`${styles.poster} ${"poster"}`} src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="Poster do filme" />
                <Box>
                    <Heading className={`${styles.title} ${"title"}`} as="h2" size={"7"} mb={"4"}>Título: {movie?.title}</Heading>
                    <Heading as="h4" size={"4"} mb={"7"}>Data de lançamento: {date}</Heading>
                    <Text className={styles.description} as="p" size={"3"}>{movie?.overview}</Text>
                </Box>
            </Flex>
        </Card>
    )
}

export default CardMovie