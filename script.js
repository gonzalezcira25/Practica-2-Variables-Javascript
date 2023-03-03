console.log("Conectado");

let usuario1 = prompt("Inicie Sesion Usuario1"); //1
let psw1 = prompt("Ingrese su contrasena");
let esActivo=true;
let edadUsuario=29;
let correoUsuario= "correo@hotmail.com";
let LastLoginDay= "Hoy";
let subscriptionToUsers= 30;
let FavoriteVideosNumber=19;
let LikedVideos= 2;
let JoinDate= "01/01/2020"; //10
let Birthdate= "01/01/1980";
let MadeVideos= 5;
let AmigosUser1= "User40, User41, User42";
let FavHashtag1= "Literatura, Filosofia";
let UnlikeHashtag1= "Kid Movies, Chess";
let Movies1= "Spiderman";
let Country1= "USA";
let City1= "Chicago";
let FavYoutuber1= "User100";
let downloadvid1= "8";  //20
let Mascota1= "None";
let Especie1= "None";
let FavMovie1= "Robocop";
let FavMusic1= "Bon Jovvi";
let FavBrand1="Starbucks";

let usuario2 = prompt("Inicie Sesion Usuario2"); //1
let psw2 = prompt("Ingrese su contrasena");
let edadUsuario2=14;
let correoUsuario2= "correodiferente@hotmail.com";
let LastLoginDay2= "Hoy";
let subscriptionToUsers2= 100;
let FavoriteVideosNumber2=189;
let LikedVideos2= 34;
let JoinDate2= "01/01/2014"; //10
let Birthdate2= "01/01/2012";
let MadeVideos2= 14;
let AmigosUser2= "User30, User34, User89";
let FavHashtag2= "Caricaturas, Manualidades";
let UnlikeHashtag2= "Scary Movies, Crocodiles";
let Movies2= "Miraculous Ladybug";
let Country2= "Mexico";
let City2= "Ciudad de Mexico";
let FavYoutuber2= "User3000";
let downloadvid2= "4"; //20
let Mascota2= "Jerry";
let Especie2= "Gato";
let FavMovie2= "The Killer Robot Chicken";
let FavMusic2= "One Direction";
let FavBrand2="Netflix";

if (prompt=usuario1){
document.write(`
<div class="var1">
    <p>Usuario: ${usuario1}</p>
    <p>Contraseña: ${psw1}</p>
    <p>Status: ${esActivo}</p>
    <p>Edad: ${edadUsuario}</p>
    <p>Correo: ${correoUsuario}</p>
    <p>Ultima fecha de inicio de sesion: ${LastLoginDay}</p>
    <p>Numero de subscripciones de ${usuario1} : ${subscriptionToUsers} </p>
    <p>Numero de Videos Favoritos de ${usuario1} : ${FavoriteVideosNumber} </p>
    <p>Numero de videos que te gustan: ${LikedVideos} </p>
    <p>Fecha de registro: ${JoinDate}</p>
    <p>Fecha de nacimiento: ${Birthdate}</p>
    <p>Amigos: ${AmigosUser1}</p>
    <p>Tema favorito: ${FavHashtag1}</p>
    <p>Tema de desinteres: ${UnlikeHashtag1}</p>
    <p>Peliculas rentadas: ${Movies1}</p>
    <p>Pais: ${Country1}</p>
    <p>Ciudad: ${City1}</p>
    <p>Youtuber Favorito: ${FavYoutuber1}</p>
    <p>Videos descargados: ${downloadvid1}</p>
    <p>Nombre de mascota: ${Mascota1}</p>
    <p>Especie animal de mascota: ${Especie1}</p>
    <p>Pelicula Favorita: ${FavMovie1}</p>
    <p>Banda Favorita: ${FavMusic1}</p>
    <p>Marca Favorita: ${FavBrand1}</p>
    
</div>
`);
}
else{
    alert("Error");
    console.log("Usuario no existe");
}

//` <-- Esta comita permite escribir o hacer código HTML en Javascript

//crear 30 variales y desplegarlas en HTML

document.write(`
<div class="var2">
    <p>Usuario: ${usuario2}</p>
    <p>Contraseña: ${psw2}</p>
    <p>Status: ${esActivo}</p>
    <p>Edad: ${edadUsuario2}</p>
    <p>Correo: ${correoUsuario2}</p>
    <p>Ultima fecha de inicio de sesion: ${LastLoginDay2}</p>
    <p>Numero de subscripciones de ${usuario2} : ${subscriptionToUsers2} </p>
    <p>Numero de Videos Favoritos de ${usuario2} : ${FavoriteVideosNumber2} </p>
    <p>Numero de videos que te gustan: ${LikedVideos2} </p>
    <p>Fecha de registro: ${JoinDate2}</p>
    <p>Fecha de nacimiento: ${Birthdate2}</p>
    <p>Amigos: ${AmigosUser2}</p>
    <p>Tema favorito: ${FavHashtag2}</p>
    <p>Tema de desinteres: ${UnlikeHashtag1}</p>
    <p>Peliculas rentadas: ${Movies2}</p>
    <p>Pais: ${Country2}</p>
    <p>Ciudad: ${City2}</p>
    <p>Youtuber Favorito: ${FavYoutuber2}</p>
    <p>Videos descargados: ${downloadvid2}</p>
    <p>Nombre de mascota: ${Mascota2}</p>
    <p>Especie animal de mascota: ${Especie2}</p>
    <p>Pelicula Favorita: ${FavMovie2}</p>
    <p>Banda Favorita: ${FavMusic2}</p>
    <p>Marca Favorita: ${FavBrand2}</p>
</div>
`);

