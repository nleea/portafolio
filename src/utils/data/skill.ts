import Js from "../../assets/images/descarga.png";
import Boostrap from "../../assets/images/Boostrap.png";
import Css from "../../assets/images/Css.png";
import Express from "../../assets/images/Express.png";
import Git from "../../assets/images/Git.png";
import Html from "../../assets/images/HTML.png";
import Jest from "../../assets/images/jest.png";
import Jquery from "../../assets/images/Jquery.png";
import Less from "../../assets/images/less.png";
import MaterialUi from "../../assets/images/MaterialUI.png";
import NodeJs from "../../assets/images/Nodejs.png";
import Npm from "../../assets/images/Npm.png";
import Postgrest from "../../assets/images/postgresql.png";
import React from "../../assets/images/React.png";
import Redux from "../../assets/images/Redux.png";
import Sass from "../../assets/images/Sass.png";
import Sequalize from "../../assets/images/Sequalize.png";
import Sql from "../../assets/images/sql.png";
import Py from "../../assets/images/python.webp";
import Dj from "../../assets/images/django.webp";

interface Iskill {
  href: string;
  name: string;
  icon: string;
}

export const skill: Iskill[] = <Iskill[]>[
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    name: "JavaScript",
    icon: Js,
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    name: "Html",
    icon: Html,
  },
  ,
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    name: "Css",
    icon: Css,
  },
  {
    href: "https://www.w3schools.com/sql/sql_intro.asp",
    name: "Sql",
    icon: Sql,
  },
  {
    href: "https://reactjs.org/",
    name: "React",
    icon: React,
  },
  {
    href: "https://redux.js.org/",
    name: "Redux",
    icon: Redux,
  },
  {
    href: "https://nodejs.org/en/",
    name: "Nodejs",
    icon: NodeJs,
  },
  {
    href: "https://expressjs.com",
    name: "Express",
    icon: Express,
  },
  {
    href: "https://jquery.com/",
    name: "Jquey",
    icon: Jquery,
  },
  {
    href: "https://sass-lang.com/",
    name: "Sass",
    icon: Sass,
  },
  {
    href: "https://lesscss.org/",
    name: "Less",
    icon: Less,
  },
  {
    href: "https://www.postgresql.org/",
    name: "Postgresql",
    icon: Postgrest,
  },
  {
    href: "https://sequelize.org/",
    name: "Sequelize",
    icon: Sequalize,
  },
  {
    href: "https://jestjs.io/",
    name: "Jest",
    icon: Jest,
  },
  {
    href: "https://mui.com/",
    name: "Mui",
    icon: MaterialUi,
  },
  {
    href: "https://getbootstrap.com/",
    name: "Bootstrap",
    icon: Boostrap,
  },
  {
    href: "https://www.npmjs.com/",
    name: "Npm",
    icon: Npm,
  },
  {
    href: "https://git-scm.com/",
    name: "Git",
    icon: Git,
  },
  {
    href: "https://www.python.org/",
    name: "Pytohn",
    icon: Py,
  },
  {
    href: "https://www.djangoproject.com/",
    name: "Django",
    icon: Dj,
  },
];
