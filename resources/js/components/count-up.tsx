import { animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CountUp({ to = 100, duration = 2 }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const [value, setValue] = useState(0);

    useEffect(() => {
        const controls = animate(count, to, { duration });
        const unsubscribe = rounded.on('change', (v) => setValue(v));

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, [to, duration]);

    return <span>{value}</span>;
}
