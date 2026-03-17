import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import styles from "./styles/App.module.css"
import CardMovie from "./components/CardMovie"

const App: React.FC = () => {
  return (
    <Box m={"auto"} mt={"8"} maxWidth={"600px"}>
      <Heading align={"center"} as="h1" size={"9"} weight={"bold"} mb={"7"}>OMDb</Heading>
      <Flex className={styles.search} m={"auto"} width={"70%"} maxWidth={"100%"} align={"center"} gap={"3"} p={"4"} px={"5"} mb={"6"}>
        <Text as="label" htmlFor="movie">
          <Flex align={"center"}>
            <MagnifyingGlassIcon />
          </Flex>
        </Text>
        <input className={styles.input} name="movie" id="movie" placeholder="Digite o nome do filme" />
      </Flex>
      <CardMovie/>
    </Box>
  )
}

export default App