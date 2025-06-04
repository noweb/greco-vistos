import { HTMLAttributes } from 'react';

export default function AppLogoIcon(props: HTMLAttributes<HTMLImageElement>) {
    return (
       <img src="/logo-2.svg" alt="App Logo" {...props} className="w-full h-full" />
    );
}
