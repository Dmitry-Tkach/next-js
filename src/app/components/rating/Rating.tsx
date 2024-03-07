'use client';
import Rating from '@/app/ui/Rating/Rating';
import { useState } from 'react';

export default function RatingComponent() {

    const [rating, setRating] = useState(4);

    const updateRating = (val: number) => {
        setRating(val);
    }


    return (
       ( <Rating rating={rating} updateRating={updateRating}/>)
    )
}
