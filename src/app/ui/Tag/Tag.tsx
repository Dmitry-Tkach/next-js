import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Tag.module.css';


interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
    className?: string,
    children: ReactNode,
    size?: 'sm'|'md'|'lg'
}

export default function Tag({className, size, children}: Props) {
    return (
        <div className={classNames(className, styles.tag, {
            [styles.sm]: size === 'sm',
            [styles.md]: size === 'md',
            [styles.lg]: size === 'lg',
        })}>
            {children}
        </div>
    );
}