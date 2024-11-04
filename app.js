const getColor = () =>{
    // hexadecimal code
    const randomNumber = Math.floor(Math.random()*16777215);
    // this math.random generate random float numbers
    // we are multipliying by this 16777215 to get hexadecimal number.
    // math.floor is used to pick a number lower then it.
    const randomCode = "#" + randomNumber.toString(16);
    // we  are converting it into string but not directly in 16
    // because we need hexa code that's why we pass 10 tostring(). 
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
      // this code will change the bg color on event call
    document.getElementById("changeBtn").style.backgroundColor = randomCode;
    // this code will change the button color on event call
    document.getElementById("colorcode").innerText = randomCode;
    // this code will text of h2 on event call

    navigator.clipboard.writeText(randomCode);
    // this will help to copy the hexcode on clipboard.
}
// event call(who work on pre define event occured)
document.getElementById("changeBtn").addEventListener
("click",getColor);

// init(intial call work as user reloads the page)
getColor();