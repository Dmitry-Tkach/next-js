import { DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from './RatingStar.module.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   className: string
};

export default function RatingStar(props: Props) {
    return (
        <div {...props}>
            <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 53.867 53.867">
                <polygon fill="#ccc" points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
	                10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "/>
            </svg>
        </div>
    )
}