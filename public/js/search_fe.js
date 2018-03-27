$(document).ready(function(){
  let priceClose;
  // $(document).on("submit", "#search-form", postData);
  $(document).on("submit", "#search-form", search);

  function postData(event) {
    event.preventDefault();
    console.log("button works");
    const data = {
      stock: $("#ticker").val().trim()
    }
    console.log(data);

    $.ajax({
      data: data,
      method: "POST",
      url: "api/ticker"
    }).then(function(response){
      console.log("first-button is working");
      console.log(response);
      console.log("second-button is working");

    });

  }

  function search(event) {
    event.preventDefault();
    const data = $("#ticker").val().trim();
    console.log(data);

    $.ajax({
      method: "GET",
      url: "api/" + data
    }).then(function(response){
      console.log(response);
      priceClose = response.price.regularMarketPrice;
      appendSearch();
    });

  }

  function appendSearch() {
    const list = $("<ul>");
    const searchList = $("<li>");

    list.addClass("search-list");
    searchList.addClass("stock-search");

    searchList.append(`<p>${priceClose}</p>`);
    list.append(searchList);

    $("#append-stock").append(list);
  }

});
