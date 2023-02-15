import { useEffect, useState } from 'react';

function useDeBount(value, delay) {
    const [deBount, setDeBount] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDeBount(value), delay);

        return () => clearTimeout(handle);
    }, [delay, value]);
    return deBount;
}

export default useDeBount;
