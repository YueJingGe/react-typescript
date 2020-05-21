import * as React from 'react';

export interface HeaderProps {
    title: string
}

export default function Header(props: HeaderProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}