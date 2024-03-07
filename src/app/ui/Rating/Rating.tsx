
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import RatingStar from './RatingStar/RatingStar';
import classNames from 'classnames';
import styles from './RatingStar/RatingStar.module.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number,
    disabled?: boolean,
    updateRating: (rating: number)=> void
}

export default function Rating({rating, disabled, updateRating}: Props) {

    const buildRating = Array(5).fill(<></>).map((_, i)=>{
        return (
            <RatingStar key={i} onClick={()=> updateRating(i+1)} className={
                classNames(styles['rating-star'], {
                    [styles.active]: i < rating
                })
            }/>
        )
    });

    
    return (
        <div className='rating'>
            {
                buildRating.map((el, i)=>{
                    return (<span key={i}> {el} </span>)
                })
            }
        </div>
    )
}