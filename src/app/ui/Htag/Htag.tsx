import { ReactNode } from 'react';

type Props = {
    tag: 'h1'|'h2'|'h3'|'h4'|'h5',
    className: string,
    children: ReactNode
}

export default function Htag({tag, className, children}: Props) {
    switch (tag) {
        case 'h1':
            return (<h1 className={className}>{children}</h1>);
        case 'h2':
            return (<h2 className={className}>{children}</h2>);
        case 'h3':
            return (<h3 className={className}>{children}</h3>);
        case 'h4':
            return (<h4 className={className}>{children}</h4>);
        case 'h5':
            return (<h5 className={className}>{children}</h5>);
        default:
            return <></>
    }
}