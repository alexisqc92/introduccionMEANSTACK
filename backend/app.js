const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//   console.log('Primer middleware');
//   next()
// })

// app.use((req,res,next)=>{
//   res.send('Hola mundo');
// })

app.use('/api/getPosts',(req,res,next)=>{
  const post = [
    {titulo: "Titulo desde el api 1", contenido: "In scelerisque leo laoreet elit ultricies ornare. Proin mattis ligula vel nulla imperdiet, in scelerisque lectus maximus. Pellentesque habitant morbi."},
    {titulo: "Titulo desde el api 2", contenido: "In scelerisque leo laoreet elit ultricies ornare. Proin mattis ligula vel nulla imperdiet, in scelerisque lectus maximus. Pellentesque habitant morbi."},
    {titulo: "Titulo desde el api 3", contenido: "In scelerisque leo laoreet elit ultricies ornare. Proin mattis ligula vel nulla imperdiet, in scelerisque lectus maximus. Pellentesque habitant morbi."}
  ];

  res.status(200).json({msg: "Post recuperado exitosamente", posts: post});
})


app.use('/api/infoUsuario',(req,res,next)=>{
  const usuario = {nombre: "Alexis", apellido: "Quezada", nacionalidad:"Peru"}
  res.status(200).json(usuario)
})

app.use('/api/listUsuarios',(req,res,next)=>{
  const usuario = [
    {nombre: "Alexis", apellido: "Quezada", nacionalidad:"Peru"},
    {nombre: "Juan", apellido: "Perez", nacionalidad:"Colombia"},
    {nombre: "Ana", apellido: "Perez", nacionalidad:"Chile"}
  ]
  res.status(200).json({lista_usuario: usuario})
})

module.exports = app;
