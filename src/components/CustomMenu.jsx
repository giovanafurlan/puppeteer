import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Image
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollButton from './ScrollButon';
import { useEffect, useState } from 'react';

const Links = [
  {
    titulo: "Home",
    link: "home"
  },
  {
    titulo: "Certificados",
    link: "certificados"
  },
  {
    titulo: "A Golden",
    link: "aGolden"
  },
  {
    titulo: "FAQ",
    link: "faq"
  }
]

const NavLink = ({ link, children, mb, bg }) => {
  return (
    <Box
      py={{
        lg: 6,
        md: 2,
        sm: 2
      }}
      px={{
        "2xl": 8,
        lg: 6,
        md: 4,
        sm: 2
      }}
      mx="0!important"
      mb={{
        lg: mb
      }}
      bg={{
        lg: bg,
        sm: "#2C2C2D"
      }}
      color="white"
      _hover={{
        color: "#DABB47"
      }}
      fontSize={"sm"}>
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{
          cursor: "pointer"
        }}>
        {children}
      </Link>
    </Box>
  )
}

export default function CustomMenu({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <>
      <Box display={visible ? 'none' : 'flex'}
        overflowY="scroll"
        bg="#2C2C2D"
        mt="-10px">
        <Box
          zIndex="1"
          borderBottom={"2px"}
          borderColor={"white"}
          maxW={{
            "2xl": "auto",
            lg: "auto",
            sm: "100vw"
          }}
          pos={{
            lg: "absolute"
          }}
          m={{
            lg: 6,
            sm: 0
          }}
          right={{
            "2xl": 72,
            lg: 28
          }}>
          <Flex
            h={24}
            align={'center'}
            justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              mx="2"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen} />
            <Flex
              pos={"relative"}
              gap={{
                "2xl": 12,
                lg: 8
              }}
              alignItems={'center'}>
              <Image
                src="/images/Logo-Branco.png"
                alt='Golden - logo'
                w={"0 auto"}
                h={16}
                p={{
                  lg: 0,
                  sm: 2
                }} />
              <Flex display={{ lg: "none", sm: "flex" }} ml="25vh">
                <a
                  href=" https://api.whatsapp.com/send/?phone=5511997661000&text&type=phone_number&app_absent=0"
                  target='_blank'>
                  <Image src='/images/Wpp.svg' alt='Whatsapp'/>
                </a>
              </Flex>
              <HStack
                as={'nav'}
                display={{
                  lg: 'flex',
                  sm: 'none'
                }}>
                {Links.map((link) => (
                  <NavLink
                    key={link}
                    link={link.link}
                    mb={"-27px!important"}
                    bg="rgba(108,108,108, .3)">
                    {link.titulo}
                  </NavLink>
                ))}
              </HStack>
              <a
                href="https://wa.me/11997661000"
                target='_blank'>
                <HStack
                  mt="15px!important"
                  spacing={4}
                  display={{
                    lg: 'flex',
                    sm: 'none'
                  }}>
                  <Text
                    color="white"
                    fontSize={"sm"}>
                    Falar agora!
                  </Text>
                  <Image src='/images/Wpp.svg' />
                </HStack>
              </a>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box
              display={{ lg: 'none' }}>
              <Stack
                as={'nav'}
                spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link} link={link.link}>{link.titulo}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
      <Flex
        display={visible ? 'flex' : 'none'}
        align={"start"}
        gap="16px"
        position="fixed"
        right="4"
        top="4"
        zIndex={1}>
        {isOpen ? (
          <Flex
            as={'nav'}
            flexDir={"column"}
            gap={4}>
            {Links.map((link) => (
              <NavLink
                key={link}
                link={link.link}
                mb={"-16px!important"}>
                {link.titulo}
              </NavLink>
            ))}
          </Flex>
        ) : null}
        <IconButton
          mt={"3px"}
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          colorScheme={"yellow"}
          aria-label={'Open Menu'}
          // display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen} />
        <a
          href="https://wa.me/11997661000"
          target='_blank'>
            <Image src='/images/Wpp.svg' />
        </a>
      </Flex>
      <ScrollButton />
      <Box
        bg="white"
        color="black"
        pt={{
          lg: 0,
          sm: 12
        }}
        px={{
          lg: 0,
          sm: 2
        }}>
        {children}
      </Box>
    </>
  )
}
