"use client";
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import styles from './Button.module.css';
import { DetailedHTMLProps } from 'react';
import { useState } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    children: ReactNode,
    appearence?: 'primary'|'dark'|'light'
}

export default function Button({className, appearence, children, ...props}: Props) {
    const btnAppearence: string = styles['btn-'+appearence];
    const unitedStyle = [styles['btn']];
    if(btnAppearence?.length) unitedStyle.push(btnAppearence);

   
    return (
        <button className={unitedStyle.join(' ')} {...props}>{children}</button>
    )
}