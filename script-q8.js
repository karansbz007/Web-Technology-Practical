 function showAlert() {
            alert("This is an alert box!");
        }

        function showConfirm() {
            let ans = confirm("Do you want to continue?");
            if (ans) {
                alert("You clicked OK");
            } else {
                alert("You clicked Cancel");
            }
        }