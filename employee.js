//var, let, const
//Single threaded application
//Assignments - October 13
//POST - XMLHttpRequest
//PUT - XMLHttpRequest, fetch
//DELETE - XMLHttpRequest, fetch
var news;
var url = ' http://localhost:3000/articles';
/*function getEmployeeList(){
   var xhttp = new XMLHttpRequest();
   var obj = this;
   xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            employeesList = JSON.parse(xhttp.response);
            obj.displayEmployees();
        }
    };
    xhttp.open('GET', 'http://localhost:3000/employees');
    xhttp.send();
}*/

///////////////////////////////  USING FECTH /////////////////////////

//PUt request in javaScript
//(function editEmployee() {
//    const myDataObject = { Name: "Robin", Active: "N",Email:"robin@gmail.com" };

//    fetch('http://localhost:3000/posts/1', {
//        method: 'PUT',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(myDataObject)
//    })
//        .then(response => {
//            return response.json()
//        })
//        .then(data =>

//            console.log(data)
//        );
//})



//Delete request in javaScript
    //(function deleteEmployee() {
    //    const myDataObject = { id: 1 }
    //    fetch('http://localhost:3000/posts/1', {
    //        method: 'DELETE'


    //    })
    //        .then(response => {
    //            return response.json()
    //        })
    //        .then(data =>

    //            console.log(data)
    //        );

    //})




//POST request in javaScript
//(function addEmployee() {
//    console.log("In POST request")
//    let employee = { id: "33", Name: "Indrasen", Email: "indrasen@gmail.com", Active: "Y" };
//    fetch('http://localhost:3000/posts', {
//        method: 'POST',
//        headers: {
//            'Content-type': 'application/json'
//        },
//        body: JSON.stringify(employee)
//    }).then((res) => console.log(res)).catch((err) => console.log(err));

//})



//function getEmployeeList() {
//    fetch('https://newsapi.org/v2/everything?q=apple&from=2021-10-13&to=2021-10-13&sortBy=popularity&apiKey=6aa2c474003e460b94dc2e4479d45fd2')
//        .then((res) => {
//            res.json()
//                .then((data) => {
//                    news = data;
//                    displayNews();
//                });
//        })
//        .catch((err) => {
//            console.log(err)
//        });
//}
// 1,2,3,4
// 2,4,6,8
//newArr = arr.map((elem)=>elem*2)



//function displayNews() {
    //let author = news.map((articles) => `${articles.author}`);
//    let title = news.map((articles) => `${articles.title}`); 
//    let description = news.map((articles) => `${articles.description}`);
//    let newsUrl = news.map((articles) => `${articles.url}`);
//    let image = news.map((articles) => `${articles.urlToImage}`);
//    let content = news.map((articles) => `${articles.content}`);

//    let first = document.getElementsByClassName('first');
//    let element = document.getElementsByClassName('author');
//    let newsDescription = document.getElementById("description");
//    let newsTitle = document.getElementById("title");
//    let imageDisplay = document.getElementById("imageDisplay");
   
//    //let innerHTML = "";

//    //for (let index = 0; index < 4; index++) {
//    //   /* innerHTML = innerHTML.concat(employeesDispCont[index]);*/

//    //   newsTitle.innerHTML = title[index]
//    //    newsDescription.innerHTML = description[index];
//    //    element[index].innerHTML = author[index];

//    //}
//    element[0].innerHTML = author[0];
//    imageDisplay.innerHTML = "image[0]";

   
//    newsDescription.innerHTML = description[0];
   

//}

//window.onload = () => {
//    let element = document.getElementsByName('username')[0];
//    element.value = 'John';
//}


//GET in jquery
//function help() {
//    $.get(url
//        , function (response) {
//            news = response;
//            displayNews();
//    })
//}


//$(document).ready(function () {

    //let url = "http://localhost:3000/articles/";

//    $.ajax({
//        url: url,
//        method: "GET",
//        dataType: "JSON",

//        beforeSend: function () {
//            $(".progress").show();
//        },

//        complete: function () {
//            $(".progress").hide();
//        },

//        success: function (newsdata) {
     
//            let output = "";
//            let latestNews = newsdata.articles;
   
//            for (var i in latestNews) {
//                output += `
//            <div class="col l4 m6 s12">
//            <div class="card medium hoverable">
//              <div class="card-image">
//                <img src="${latestNews[i].urlToImage}" class="responsive-img" alt="${latestNews[i].title}">
//              </div>
//              <div class="card-content">
//                <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
//                <h6 class="truncate">Title: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>
//                <p><b>Author</b>: ${latestNews[i].author} </p>
//                <p><b>News source</b>: ${latestNews[i].source.name} </p>
//                <p><b>Published</b>: ${latestNews[i].publishedAt} </p>
//              </div>
  
//              <div class="card-reveal">
//                <span class="card-title"><i class="material-icons right">close</i></span>
//                <p><b>Description</b>: ${latestNews[i].description}</p>
//              </div>
  
//              <div class="card-action">
//                <a href="${latestNews[i].url}" target="_blank" class="btn">Read More</a>
//              </div>
//             </div>
//            </div>
//          `;
//            }

//            if (output !== "") {
//                $("#newsResults").html(output);
//            }

//        },

//        error: function () {
//            let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
//            $("#newsResults").html(errorMsg);
//        }
//    })

//});


$.ajax({
    url:
        "http://localhost:3000/articles/",
    method: "GET",
    error: function () {
        console.log("error");
    },
    success: function (data) {
        processData(data);
    }
})

function processData(data) {
    var articleItems = [];
    console.log(data[1].author);

    for (var i = 0; i < data.length; i++) {
        var author = data[i].author;
        var title = data[i].title;
        var description = data[i].description;
        var artUrl = data[i].url;
        var imgurl = data[i].urlToImage;

        
      

        var $help = $('<div class = "card" style ="18rem"><img class = "card-img-top" src =' + imgurl + ' width =500px height =500px><div class = "card-body"><h2 class = "card-title">' + title + '</h2><p class="card-text">' + description + '<a href =' + artUrl +'class = "btn btn-primary">' + "read more" +'</a> </div > ');



        $(".wrapper").append($help);
        console.log(artUrl);
    }
}


//POST in jquery
//$(function {
//    $.post('http://localhost:3000/posts', function (response) {
//        employeesList = response;
//        displayEmployees();
//    })
//})
//var employee = { id: "33", Name: "Indrasen", Email: "indrasen@gmail.com", Active: "Y" };

//($.put('http://localhost:3000/posts/2', { text: employee }, function (result) {
//    employeesList = response;
//    displayEmployees();
//    //console.log(result);
//}))();

//////////////////////////////////  AJAX //////////////////////////
//GET in ajax
//$.ajax({
//    url: 'http://localhost:3000/posts',
//    type: 'GET',
//    success: function (response) {
//        employeesList = response;
//        displayEmployees();
//    }
//})

//POST using AJAX
//function addEmployee() {

    /* var employee = { id: "33", Name: "Indrasen", Email: "indrasen@gmail.com", Active: "Y" };*/
   // var employee = document.querySelector("#EmployeeID").value;
   // console.log(employee);
    //$.ajax({
    //    url: 'http://localhost:3000/posts',
    //    type: 'POST',
    //    data: employee,
    //    dataType: "text",
    //    success: function (response) {
    //        employeesList = response;
    //        displayEmployees();
    //    }
    //})
//}


// delete using AJAX
/*var employee = { id: "33", Name: "Indrasen", Email: "indrasen@gmail.com", Active: "Y" };*/
//function deleteEmployee() {

//    $.ajax({
//        url: 'http://localhost:3000/posts/33',
//        type: 'DELETE',
//        data: employee,
//        dataType: "text",
//        success: function (response) {
//            employeesList = response;
//            displayEmployees();
//        }
//    })


//}



//PUT using AJAX

//var employee = { id: "33", Name: "Indrasen", Email: "indrasen@gmail.com", Active: "Y" };
//$.ajax({
//    url: 'http://localhost:3000/posts/33',
//    type: 'PUT',
//    data: employee,
//    dataType: "text",
//    success: function (response) {
//        employeesList = response;
//        displayEmployees();
//    }
//})