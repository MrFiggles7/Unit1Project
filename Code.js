$(document).ready(
    function () {


        //event handlers
        $('#tab2').hide();
        $('#tab3').hide();
        //other functions

        var currentTab = 1;
        var size = 7;
        var meats = 0;
        var meatText = "";
        var veggies = 0;
        var veggieText = "";
        var subtotal = 0;
        var firstName;
        var lastName;
        var address;
        var city;
        var state;
        var zip;
        var phoneNumber;



        $('.next').click(function(event) {
            event.preventDefault();
            currentTab++;
            $('#tab' + currentTab).show().siblings().hide();
        });

        $('.previous').click(function(){
            currentTab--;
            $('#tab' + currentTab).show().siblings().hide();
        });


        $('.tabs input').change(function updateValues() {
            size = parseFloat($('input:radio').val());
            meats = 0;
            meatText = "";
            veggies = 0;
            veggieText = "";
            for (var i = 1; i < 6; i++) {
                if($('#Meats' + i).is(':checked'))
                {
                    meats += parseFloat($('#Meats' + i).data().value);
                    meatText += $('#Meats' + i).val() + " - $1.50" + "<br>";
                }
            }
            for (var i = 1; i < 5; i++) {
                if($('#Veggies' + i).is(':checked'))
                {
                    veggies += parseFloat($('#Veggies' + i).data().value);
                    veggieText += $('#Veggies' + i).val() + " - $1.00" + "<br>";
                }
            }

            subtotal = 0;
            subtotal += size + meats + veggies;
            var total = (subtotal * .051) + subtotal + 2;


            $('#orderDetails').text('');
            $('#orderDetails').append("<h4>Meats <br></h4>" + meatText + "<h4>Veggies <br></h4>" + veggieText);
            $('#orderDetails').append("------------<br><h4>Order Subtotal: $" + subtotal.toFixed(2) + "</h4><br> + Tax(5.1%)<br> + Delivery Fee ($2.00)" + '<h4>Total<br>= $' + total.toFixed(2) + '</h4>');



            firstName = $('#firstName').val();
            lastName = $('#lastName').val();
            address = $('#address').val();
            city = $('#city').val();
            state = $('#inputState').val();
            zip = $('#inputZip').val();
            phoneNumber = $('#phoneNumber').val();



            $('#contactInfo').text('');
            $('#contactInfo').append('<h4>Name</h4>' + firstName + ' ' + lastName + '<br><h4>Address</h4>' + address + '<br>' + city + '<br>' + state + '<br>' + zip + '<br><h4>Phone Number</h4>' + phoneNumber + '<br>')

        });

        $('#tab2.next').click(function(){

        });

        $('.submit').click(function(){
            $(':checkbox').prop('checked', false);
            currentTab = 1;
            $('#tab' + currentTab).show().siblings().hide();
            meats = 0;
            meatText = "";
            veggies = 0;
            veggieText = "";

        });
    }
);