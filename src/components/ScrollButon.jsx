import React, { useEffect, useState } from 'react';
import {
    Button
} from '@chakra-ui/react';

const ScrollButton = () => {

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, []);

    return (
        <Button
            zIndex={1}
            onClick={scrollToTop}
            display={visible ? 'inline' : 'none'}
            bg="none"
            _hover={{
                bg: "none",
                color: "#806B1D"
            }}
            position="fixed"
            right="4"
            bottom="40px"
            z-index="1"
            cursor="pointer"
            color="#DABB47">
            Voltar ao topo
        </Button>
    );
}

export default ScrollButton;
