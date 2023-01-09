import Red1 from "../../assets/images/red1.png";
import Peli1 from "../../assets/images/peli1.png";

interface IProjects {
  image: string;
  name: string;
  details: string;
  repository: string;
  link: string;
}

export const projects: IProjects[] = <IProjects[]>[
  {
    image: Red1,
    details:
      "Proyecto creado como una copia de instagram, nos sive para poder hacer publicaciones y poder seguir entre las personas",
    name: "Red",
    link: "/",
    repository: "https://github.com/nleea/Red-copia",
  },
  {
    image: Peli1,
    details:
      "Proyecto creado para poder ver la peliculas mejor valoradas y poder selecionar por categoria y por genero",
    name: "Peliculas",
    link: "/",
    repository: "https://github.com/nleea/movie",
  },
];
