import { Box, Heading, Text, Flex } from "@radix-ui/themes"
import { useEffect, useState } from "react"

const GetMovie = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/11")
    const data = await response.json()
    console.log(data)
    return data
}

const CardMovie: React.FC = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        GetMovie().then(data => setMovie(data))
    }, [])

    return (
        <Box width={"100%"} p={"8"}>
            <Flex gap={"7"}>
                <Box>
                    <Heading as="h2" mb={"4"}>Título do filme</Heading>
                    <Text as="p" mb={"6"}>Descrição do filme</Text>
                    <Flex direction={"column"} gap={"3"}>
                        <Text as="p">Diretor: </Text>
                        <Text as="p">Atores: </Text>
                        <Text as="p">Nota IMDb: </Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default CardMovie