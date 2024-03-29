import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

import "./contact.scss";

export const Contact = () => {

    const { theme } = useContext(ThemeContext);
    return (
        <Card sx={{
            maxWidth: "90%", height: "90%", margin: "auto",
            background: theme === "light-theme" ? "#fafafa" : "#222",
            color: theme === "light-theme" ? "#111" : "#fafafa",
        }} className="contact"  id="contacto" >

            <CardContent>
                <Typography variant="h3" component="div" className="contact-title" >
                    Contactame
                </Typography>
            </CardContent>
            <CardContent className="icon-container" >
                <div className="icon-container--data" >
                    <LocationOnIcon />
                    <Typography>
                        Colombia
                    </Typography>
                </div>
                <div className="icon-container--data" >
                    <LocalPhoneIcon />
                    <Typography>
                        +57 3014582878
                    </Typography>
                </div>
                <div className="icon-container--data" >
                    <MailIcon />
                    <Typography>
                        <a href="mailto:neldecas12@gmail.com" style={{ color: theme === "light-theme" ? "#111" : "#fafafa" }} >Neldecas12@gmail.com</a>
                    </Typography>
                </div>
            </CardContent>
            <CardContent className="redes-container" >
                <Typography variant="h4">
                    Mis Redes Sociales
                </Typography>
                <div className="redes-container--icons" >
                    <li>
                        <a href="https://www.linkedin.com/in/nelson-de-castro-599402196/" target="_blank" rel="noreferrer noopener external" className="social__content--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
                            <path fill={theme === "light-theme" ? "none" : "#fafafa"} d="M0 0h24v24H0z"></path>
                            <path className="social--svg" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/nleea" target="_blank" rel="noreferrer noopener external" className="social__content--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
                            <path fill={theme === "light-theme" ? "none" : "#fafafa"} d="M0 0h24v24H0z"></path>
                            <path className="social--svg" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                        </svg>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:neldecas12@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40"><path fill={theme === "light-theme" ? "black" : "#fafafa"} d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z" /></svg>
                        </a>
                    </li>
                </div>
            </CardContent>

        </Card>
    )
}



{/* <div className="contact" >
            <h1 style={{ color: theme === "light-theme" ? "#111" : "#fafafa" }} > Contactame: </h1>
            <li>
                <a href="https://www.linkedin.com/in/nelson-de-castro-599402196/" target="_blank" rel="noreferrer noopener external" className="social__content--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
                    <path fill={theme === "light-theme" ? "none" : "#fafafa"} d="M0 0h24v24H0z"></path>
                    <path className="social--svg" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                </svg>
                </a>
            </li>
            <li>
                <a href="https://github.com/nleea" target="_blank" rel="noreferrer noopener external" className="social__content--icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34">
                    <path fill={theme === "light-theme" ? "none" : "#fafafa"} d="M0 0h24v24H0z"></path>
                    <path className="social--svg" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
                </svg>
                </a>
            </li>
            <li>
                <a href="mailto:neldecas12@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40"><path fill={theme === "light-theme" ? "black" : "#fafafa"} d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z" /></svg>
                </a>
            </li>
        </div> */}