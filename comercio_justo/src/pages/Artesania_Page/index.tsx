import React from 'react'

interface indexProps {
    data: {
        artisan: string,
        hover_image: string,
        id: number,
        image: string,
        name: string,
        price: number
    }
}

export const Artesania_Page: React.FC<indexProps> = ({data}) => {
        return (
            <p>{data.name}</p>
        );
}