function return_top() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



function next (){
  
  let url = document.URL;
  let pattern = /main_10/;
  let pattern_2 = /main_11/;
  let checker = pattern.test(url);
  let checker_2 = pattern_2.test(url)
  if (checker == false && checker_2 == false) {
    let num = url.charAt(url.length-6);
    let num_parsed = parseInt(num);
    let num_def = num_parsed + 1;
    let next_page = "main_" + num_def + ".html";
    window.location.href = next_page;
  } else {
    if (checker_2 == false) {
      let num = url.charAt(url.length-6);
      let num_parsed = parseInt(num);
      let num_def = num_parsed + 11;
      let next_page = "main_" + num_def + ".html";
      window.location.href = next_page;
    } else {
      let num = url.charAt(url.length-6);
      let num_parsed = parseInt(num);
      let num_def = num_parsed + 11;
      let next_page = "main_" + num_def + ".html";
      window.location.href = next_page;
    }
  }

}

function previous (){

  let url = document.URL;
  let pattern = /main_10/;
  let pattern_2 = /main_11/;
  let pattern_3 = /main_12/;
  let checker = pattern.test(url);
  let checker_2 = pattern_2.test(url);
  let checker_3 = pattern_3.test(url);
  if (checker_3 == true) {
      let next_page = "main_11.html";
      window.location.href = next_page; } else {
    if (checker == false && checker_2 == false) {
      let num = url.charAt(url.length-6);
      let num_parsed = parseInt(num);
      let num_def = num_parsed - 1;
      let next_page = "main_" + num_def + ".html";
      window.location.href = next_page;
    } else {
      if (checker_2 == false) {
        let num = url.charAt(url.length-6);
        let num_parsed = parseInt(num);
        let num_def = num_parsed + 9;
        let next_page = "main_" + num_def + ".html";
        window.location.href = next_page;
      } else {
        let num = url.charAt(url.length-6);
        let num_parsed = parseInt(num);
        let num_def = num_parsed - 1;
        let next_page = "main_1" + num_def + ".html";
        window.location.href = next_page;
      }
    }
  }
}

