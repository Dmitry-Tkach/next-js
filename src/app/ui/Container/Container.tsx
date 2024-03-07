import styles from './Container.module.css';
type Props = {
    children: React.ReactNode;
    fluid?: boolean;
};

export default function Container({fluid, children}: Props) {
    const classes = fluid ? styles['container'] : styles['container-fluid'];

    return (
        <div className={classes}>
            {children}
        </div>

    )
}