//This is a helper file for using fetch() for Ajax
// Either copy the function below into your JavaScript file
// or add this line to your html head:
// <script  src="https://courses.cs.washington.edu/courses/cse154/17au/lecture/AjaxCheckStatusHelper.js" type="text/javascript"></script>

// Based on code by Matt Gaunt
// https://developers.google.com/web/updates/2015/03/introduction-to-fetch

function checkStatus(response) {  
    if (response.status >= 200 && response.status < 300) {  
      return response.text();
    } else {  
      return Promise.reject(new Error(response.status + ": " + response.statusText)); 
    } 
  }
  
  
  //then you can write code like below:
  /*
  function callAjax(){
    let url = ..... // put url string here
    fetch(url, {credentials: 'include'}) // include credentials for cloud9
      .then(checkStatus)
      .then(function(responseText) {
        //success: do something with the responseText
       })
      .catch(function(error) {
      //error: do something with error
    });
  }
  */