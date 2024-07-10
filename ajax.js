$.get( "teste.json", function(data) {
    $.each(data, function (I, field) {
     $('div').append(
        `<table border="1" style="float: left; width: 15%; height: 600px;">
     <tr>
      <th><img src="${field.img}" alt=""></th>
     </tr>
     <tr>
      <th><p>Nome:<br>${field.nome}</p></th>
     </tr>
      <tr>
       <th><p>Classificação indicativa:<br>${field.idade}</p></th>
      </tr>
       <tr>
        <th><p>Horario do filme:<br>${field.hora}</p></th>
       </tr>
      </table>`
     );
    });
 });