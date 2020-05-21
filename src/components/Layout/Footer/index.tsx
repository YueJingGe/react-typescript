import * as React from 'react';

export interface FooterProps {
    title: string
}

export default function Footer(props: FooterProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}