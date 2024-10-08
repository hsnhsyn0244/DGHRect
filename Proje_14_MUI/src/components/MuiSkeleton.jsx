import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import MT25 from '../Images/MT25.jpeg'


function MuiSkeleton() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <div>
            {
                loading ? <Skeleton variant='rounded' width={200} height={150} animation={'wave'} /> :
                    <img src={MT25} width={200} height={150} />
            }
        </div>
    )
}

export default MuiSkeleton