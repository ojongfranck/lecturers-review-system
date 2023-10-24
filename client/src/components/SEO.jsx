import React from 'react';
import { Helmet } from 'react-helmet-async';
import { logo } from '../constants/images';
export default function SEO({ title, description, name, type, url, image = logo }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}