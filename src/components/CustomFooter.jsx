import {
    Divider,
    Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    Link,
    Text
} from '@chakra-ui/react'

export default function CustomFooter() {
    return (
        <HStack
            m="0 auto"
            py={12}
            px={{
                lg: 0,
                sm: 4
            }}
            bg="#2C2C2D"
            flexDir={"column"}
            textAlign={"center"}
            w="full">
            <Flex
                gap="16px"
                flexDir={"column"}
                maxW={{ lg: "5xl", sm: "auto" }}
                minW={{ lg: "5xl", sm: "auto" }}
                align={"center"}>
                <Divider />
                <Grid
                    templateColumns={{
                        lg: "repeat(6,1fr)",
                        sm: "repeat(1,1fr)"
                    }}
                    w="100%"
                    pt={8}
                    pb={12}
                    gap={{
                        lg: 0,
                        sm: 10
                    }}
                    color="#f1f1f1"
                    textAlign={"start"}>
                    <GridItem fontSize={"xs"} colSpan={{ lg: 3, sm: 0 }}>
                        <Flex flexDir={"column"} textAlign={"left"} gap={4}>
                            <Text>
                                Golden | Certificado Digital 2023. Todos os direitos reservados
                            </Text>
                            <Text mt="-8px">
                                CNPJ - 14151445/0001-87
                            </Text>
                            <Flex flexDir={{ lg: "row", sm: "column" }} align={"baseline"} gap={4}>
                                <Link href='/politicas' target='_blank' _hover={{
                                    border: "none"
                                }}>
                                    <Text borderBottom={"1px"}>
                                        Política de Privacidade
                                    </Text>
                                </Link>
                                <Flex flexDir={"column"} gap={{ lg: 2, sm: 4 }}>
                                    <Text color="#DABB47" borderBottom={"1px"} w="fit-content">
                                        <a href="mailto:mailtvendas@goldencertificacao.com.br ">
                                            vendas@goldencertificacao.com.br
                                        </a>
                                    </Text>
                                    <Text>
                                        Horário de atendimento: 2º a 6º das 9 às 18hrs
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem colStart={{ lg: 4, sm: 0 }} colSpan={{ lg: 2, sm: 0 }}>
                        <HStack>
                            <Link href={"https://drive.google.com/file/d/1EW0_9QftmgZg7NUIoTHdlRpxSMwm6cCD/view"}
                            target='_blank'>
                                <Image
                                    src="/images/icp.png"
                                    alt="Golden - Logo ICP"
                                    w={32}
                                    h={24} />
                            </Link>
                            <Link href="https://www.gov.br/iti/pt-br"
                            target='_blank'>
                                <Image
                                    src="/images/Logo-ITI-1.png"
                                    alt="Golden - Logo ITI"
                                    w={48}
                                    h={24} />
                            </Link>
                        </HStack>
                    </GridItem>
                    <GridItem pos={"relative"}>
                        <Image
                            src="/images/Logo-Branco.png"
                            alt="Golden - Logo"
                            pos={{
                                lg: "absolute",
                                sm: "relative"
                            }}
                            right={0}
                            w={"auto"}
                            h={24} />
                    </GridItem>
                </Grid>
            </Flex>
        </HStack>
    )
}
