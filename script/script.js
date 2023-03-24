let select = document.querySelectorAll(".currency");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
// fetch the API
fetch("https://api.frankfurter.app/currencies")
  // receive the promise again in .then()
  .then((res) => res.json())

  // send the json data to method

  .then((receiveResponse) => dropDown(receiveResponse));

// function
// currency display function
function dropDown(receiveResponse) {
  // OBject.entries is got key and value pair

  let curr = Object.entries(receiveResponse);
  // got the TWO Dimenstional array
  // curr is an ARRAY format so loop the array index
  for (let i = 0; i < curr.length; i++) {
    // put the option in html
    let option = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    // select[0] is first dropdown box
    // select[1] is second dropdown box
    // select box is same class name so selected parllely ,so in two length of array format
    select[0].innerHTML += option;
    select[1].innerHTML += option;
    // += is here is act concat
  }
}
// convert function

function convert(currOne, currTwo, inputVal) {
  // save the in the variable API link
  // API gives conversion in our website
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${inputVal}&from=${currOne}&to=${currTwo}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(
        (document.getElementById("result").value = Object.values(data.rates)[0])
      );
      // here data.rates is give a array format so exit the array format into number using "json parse" instesd of [0].
    });
}
// eventListener

btn.addEventListener("click", () => {
  // select[0],select[1] is dropdown
  let currOne = select[0].value;
  let currTwo = select[1].value;
  let inputVal = input.value;
  if (currOne === currTwo) alert("Invalid currency type");
  else convert(currOne, currTwo, inputVal);
});
