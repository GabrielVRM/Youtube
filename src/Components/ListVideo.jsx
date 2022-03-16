import React from "react";
import { makeStyles, Box, Typography, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyItems:"center"
  },
}));

const videos = [
  {
    id: 1,
    title:
      "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
    channel: "Lucas Nhimi",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb1.png",
  },
  {
    id: 2,
    title:
      "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
    channel: "Lucas Nhimi",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb2.png",
  },
  {
    id: 3,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb3.png",
  },
  {
    id: 4,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb4.png",
  },
  {
    id: 5,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Lucas Nhimi",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Lucas Nhimi",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/Components/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb6.png",
  },
  {
    id: 7,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Lucas Nhimi",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb7.png",
  },
  {
    id: 8,
    title:
      "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
    channel: "Lucas Nhimi",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb8.png",
  },
  {
    id: 9,
    title:
      "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
    channel: "Lucas Nhimi",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb4.png",
  },
  {
    id: 10,
    title:
      "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
    channel: "Lucas Nhimi",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb5.png",
  },
  {
    id: 11,
    title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
    channel: "Lucas Nhimi",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb6.png",
  },
  {
    id: 12,
    title:
      "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
    channel: "Lucas Nhimi",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/src/images/avatar.jpeg",
    thumb: "/src/Components/images/thumb7.png",
  },
];

export default function ListVideo() {
  const classes = useStyles();
  return (
    <Box p={1} mt={20} ml={65}>
      <Typography variant="h5" style={{ fontWeight: 100 , marginBottom:30 }}>
        Recomendados
      </Typography>
      <Grid container spacing={2} >
        {videos.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} sx={12} className={classes.root}>
            <Box>
              <img
                style={{ width: "100%" }}
                alt={item.title}
                src={item.thumb}
              />

              <Typography
                style={{ fontWeight: 600 }}
                gutterBottom
                variant="body1"
                color="primary light"
              >
                {item.title}
              </Typography>

              <Typography display="block" variant="body2" color="secondary">
                {item.channel}
              </Typography>
              <Typography 
              variant="body2" 
              color="secondary">
                
{`${item.views}  ${item.date}`}              
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
