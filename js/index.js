
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

document.querySelector('.list').addEventListener('click', function(e) {
  var id = e.target.id,
      item = e.target,
      index = favorites.indexOf(id);
	 
	 
  
  if (index == -1) {
	  console.log(index);
	  alert("Character is add to favorite");
    favorites.push(id);
    item.className = 'fav';
  } else {
	  alert("Character is remove from favorite");
    favorites.splice(index, 1);
    item.className = 'box';
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));

});

 