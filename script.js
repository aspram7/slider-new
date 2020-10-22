var myImage = document.getElementById("myImages");
var arr = ["1.jpg", "2.jpg"];

function func(el) {
    arr.forEach((el) => {
        if (el == 0) {
            arr[el++];
        } else {
            arr[el--];
        }
    });
    return el;
}
func(0);
