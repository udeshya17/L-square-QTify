import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';

export default function CustomCard() {
    return (
        <Tooltip title="I'm So Lonesome I Could Cry" placement="top" arrow>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src="https://images.pexels.com/photos/2739074/pexels-photo-2739074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt="album" />
                    <div className={styles.banner}>
                        <Chip
                            label="100 Follows"
                            className={styles.chip}
                            size="small"
                        />
                    </div>
                </div>
                <div className={styles.titleWrapper}>
                    <p>New Songs</p>
                </div>
            </div>
        </Tooltip>
    );
}



// const CardDetails = {
//     id: "bd09f304-8d62-4e72-8063-31eed6d5ddfc",
//     title: "I'm So Lonesome I Could Cry",
//     artists: [
//     "Shelley O'Kon",
//     "Jan Streich",
//     "Joey Steuber"
//     ],
//     genre: {
//     key: "rock",
//     label: "Rock"
//     },
//     likes: 33286,
//     image: "https://images.pexels.com/photos/2739074/pexels-photo-2739074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//     durationInMs: 47064
// }