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
  }

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
  }
  $('button').click(function () {
    var nuovoStudente = {
      'nome' : prompt('inserisci il nome:'),
      'cognome' : prompt('inserisci il cognome:'),
      'eta' : parseInt(prompt('inserisci l\'età:'))
    }
    studenti.push(nuovoStudente);
    for (var i = 0; i < studenti.length; i++) {
      $('#3mil').append(studenti[i].nome + ' ' + studenti[i].cognome + ' ' + studenti[i].eta + '<br>');
    }
  });

});
