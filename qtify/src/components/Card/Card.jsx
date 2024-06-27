import React from "react";
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
    return (
        <Tooltip title={type === "album" ? `${data.songs.length} songs` : `${data.likes} Likes`} placement="top" arrow>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={data.image} alt={type === "album" ? "album" : "song"} />
                    <div className={styles.banner}>
                        <Chip
                            label={type === "album" ? `${data.follows} Follows` : "New Songs"}
                            className={styles.chip}
                            size="small"
                        />
                    </div>
                </div>
                <div className={styles.titleWrapper}>
                    <p>{data.title}</p>
                    {/* {type === "album" && (
                        <p>{data.artists.join(', ')}</p>
                    )} */}
                </div>
            </div>
        </Tooltip>
    );
};

export default Card;
