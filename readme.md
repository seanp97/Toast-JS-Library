Toast JS Library

To use, please include Toast.JS and toast.css in your file.


We instantiate the Toast class object

const t = new Toast();



Display a success box

t.Success('A Success Message');



Display a error box

t.Error('A Error Message');



Display a danger box

t.Danger('A Danger Message');



Display a info box

t.Info('A Info Message');



We can also pass in a argument to change how long the toast box displays for - 

t.Success('A Success Message', 3000);

This will then hide the box after 3 seconds. Please not if no argument is passed, it will default to 5 second (5000ms)