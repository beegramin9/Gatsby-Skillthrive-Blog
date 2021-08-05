import React from 'react';
import { CardWrapper, 
        P, H2} from '../styles';
import { Button } from './Button';

export const Card = ({date, title, excerpt, slug}) => {
    console.log(slug);
    return (
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 0 .5rem" color="dark2">
                {date}
            </P>
            <H2 textAlign="center" margin="0 0 .5rem">
                {title}
            </H2>
            <P size="small" textAlign="center" margin="0 0 1.5rem" color="dark2">
                {excerpt}
            </P>
            <Button href={slug}>
                Read More
            </Button>
        </CardWrapper>
    )
}

