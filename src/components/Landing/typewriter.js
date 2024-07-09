import { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
    const [slogan, setSlogan] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setSlogan(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [index, delay, text]);

    return <span>{slogan}</span>
};

export default Typewriter;