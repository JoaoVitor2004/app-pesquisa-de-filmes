import { Box, Heading, Text, Flex } from "@radix-ui/themes"
import { useMovie } from "../hooks/useMovie"
import styles from "../styles/App.module.css"

const CardMovie: React.FC = () => {

    const { input, movie } = useMovie()

    const movieSelected = movie.filter(item => item.title === input)

    return (
        <Box width={"100%"} p={"8"}>
            <Box>
                {
                    input !== "" && (
                        movieSelected.map(item => (
                            <Flex justify={"center"} gap={"7"} mb={"9"} key={item.title}>
                                <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Poster do filme" />
                                
                                <Box>
                                    <Heading as="h2" mb={"4"}>Título: {item.title}</Heading>
                                    <Text as="p" mb={"6"}>{item.overview}</Text>
                                    {/* <Flex direction={"column"} gap={"3"}>
                                        <Text as="p">Diretor: </Text>
                                        <Text as="p">Atores: </Text>
                                        <Text as="p">Nota IMDb: </Text>
                                    </Flex> */}
                                </Box>
                            </Flex>
                        ))
                    ) || (
                        <Heading align={"center"} as="h3">Nenhum filme selecionado</Heading>
                    )
                }
                
            </Box>
        </Box>
    )
}

export default CardMovie