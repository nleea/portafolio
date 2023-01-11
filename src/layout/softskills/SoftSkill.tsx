import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

import { soft } from "../../utils/data/softSkills";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import "./soft.scss";

export const SoftSkills = () => {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className="soft-skill">
            <h1 className="skill-title" >Soft Skills</h1>
            <div className="card-soft" >
                {soft.map((s,index) =>
                    <Tilt key={index}
                        tiltEnable={width > 768 ? true : false}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        tiltReverse={false}
                        glareEnable={true}
                        glareMaxOpacity={1}
                    >
                        <Card sx={{ maxWidth: 345, height: "auto", margin: 1 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={s.image}
                                    alt="Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {s.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {s.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Tilt>

                )}

            </div>
        </div>
    )

}