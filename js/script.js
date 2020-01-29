$(document).ready( function () {
  var studente = {
    'nome' : 'marco',
    'cognome' : 'patti',
    'eta' : 36
  }
  console.log('primo milestone-->');
  for (var key in studente) {
    console.log(studente[key]);
    $('#1mil').append(studente[key] + ' ');
    // /primo metodo

  }
  // secondo metodo
  var source = document.getElementById("template").innerHTML;
  var template = Handlebars.compile(source);
  var context = {
    'nome' : studente.nome,
    'cognome' : studente.cognome,
    'eta' : studente.eta
  };
  var html = template(context);
  $('#1mil_handlebarsjs').append(html);

// ----------------------------------------------------------------------------
  var studenti = [
    {
      'nome' : 'marco',
      'cognome' : 'patti',
      'eta' : 36
    },
    {
      'nome' : 'stefano',
      'cognome' : 'patti',
      'eta' : 33
    },
    {
      'nome' : 'federica',
      'cognome' : 'de santis',
      'eta' : 36
    }
  ]
  console.log('secondo milestone-->');
  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    $('#2mil').append(studenti[i].nome + ' ' + studenti[i].cognome + '<br>');
    // secondo metodo
    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      'nome' : studenti[i].nome,
      'cognome' : studenti[i].cognome,
      'eta' : studenti[i].eta
    }
    var html = template(context);
    $('#2mil_handlebarsjs').append(html);
  }

  // -------------------------------------------------------------------------
  $('button').click(function () {
    var nuovoStudente = {
      'nome' : prompt('inserisci il nome:'),
      'cognome' : prompt('inserisci il cognome:'),
      'eta' : parseInt(prompt('inserisci l\'età:'))
    }
    studenti.push(nuovoStudente);
    for (var i = 0; i < studenti.length; i++) {
      $('#3mil').append(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta + '<br>');
      // secondo metodo
      var source = document.getElementById("template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        'nome' : studenti[i].nome,
        'cognome' : studenti[i].cognome,
        'eta' : studenti[i].eta
      }
      var html = template(context);
      $('#3mil_handlebarsjs').append(html);
    }
  });

});
