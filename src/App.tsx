import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import styles from "./styles/App.module.css"
import CardMovie from "./components/CardMovie"
import { useMovie } from "./hooks/useMovie"

const App: React.FC = () => {

  let { input, getValue } = useMovie()

  return (
    <Box m={"auto"} mt={"8"} maxWidth={"800px"}>
      <Heading align={"center"} as="h1" size={"9"} weight={"bold"} mb={"7"}>TMDb</Heading>
      <Flex className={styles.search} m={"auto"} width={"500px"} maxWidth={"90%"} align={"center"} gap={"3"} p={"4"} px={"5"} mb={"6"}>
        <Text as="label" htmlFor="movie">
          <Flex align={"center"}>
            <MagnifyingGlassIcon />
          </Flex>
        </Text>
        <input value={input} onChange={(ev) => {
          getValue(ev.currentTarget.value)
        }} className={styles.input} name="movie" id="movie" placeholder="Digite o nome do filme" />
      </Flex>
      <CardMovie/>
    </Box>
  )
}

export default App