function bookSearch() {
    var search = document.getElementById("search").value;
    document.getElementById("results").innerHTML = "";
  
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
      dataType: "json",
      type: 'GET',
      success: function (data) {
        console.log(data);
        if (data.items && data.items.length > 0) {
          for (var i = 0; i < data.items.length; i++) {
            var jdata = data.items[i].volumeInfo;
            var newColSm4 = document.createElement('div');
            var newRow = document.createElement('div');
            var newImg = document.createElement('img');
            var newH2 = document.createElement('h2');
            var newH3 = document.createElement('h3');
            var newH4 = document.createElement('h4');
            var newAnchor = document.createElement('a');
            newRow.className = 'row';
            newColSm4.className = 'card col-sm-12 col-md-5 col-lg-2';
            newAnchor.className = 'btn btn-primary';
            newH2.innerText = jdata.title;
            newAnchor.innerText = 'View Book Info!';
            newAnchor.href = jdata.infoLink;
            newAnchor.setAttribute('target', '_blank');
            if (jdata.imageLinks) {
              newImg.src = jdata.imageLinks.thumbnail;
            } else {
              newImg.src = 'img/nobook.jpg';
            }
            if (jdata.publishedDate) {
              newH4.innerText = jdata.publishedDate;
            } else {
              newH4.innerText = 'no publish date found';
            }
            if (jdata.authors) {
              newH3.innerText = jdata.authors[0];
            } else {
              newH3.innerText = 'no author found';
            }
            newColSm4.appendChild(newImg);
            newColSm4.appendChild(newH2);
            newColSm4.appendChild(newH3);
            newColSm4.appendChild(newH4);
            newColSm4.appendChild(newAnchor);
            var results = document.getElementById("results");
            results.appendChild(newColSm4);
          }
        } else {
          window.alert('No results found for the given search query.');
        }
      },
      error: function (xhr, status, error) {
        console.error("Error: " + error);
        var errorMsg = document.createElement('p');
        errorMsg.innerText = 'Error fetching data. Please try again later.';
        var results = document.getElementById("results");
        results.appendChild(errorMsg);
      }
    });
  }
  
  function clearResults() {
    document.getElementById("results").innerHTML = "";
  }
  
  $("#clearBtn").click(function () {
    clearResults();
  });
  
  window.onload = function () {
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', bookSearch, false);
    var clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', clearResults, false);
  };
  