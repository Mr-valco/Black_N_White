$(function () {

    /* ******************************************* */
    //Black_list table display code
    /* ******************************************* */

    // rendering the Black_List table
    const render = function (items) {
        $('#locked_users').empty();

        //appending each item to the locked-items #
        items.forEach(function (item) {
            $('#locked_users').append(renderItemRow(item));
        });
    }

    //api call and render
    const getItems = function () {
        $.get('/api/Black_Lists').then(render);
    }

    const renderItemRow = function (item) {
        const tr = $('<tr>');


        // unlock button
        const button = $('<button>')
            .addClass('btn btn-danger unlockUsr')
            .attr('id', 'unlocking')
            .text('Remove')
            .attr('data-id', item.id);

        //appending items to the div
        tr.append(
            $('<td>').text(item.time),
            $('<td>').text(item.sso),
            $('<td>').text(item.action),
            $('<td>').text(item.device_ID),
            $('<td>').text(item.count),
            $('<td>').text(item.message),
            $('<td>').append(button)
        );
        return tr;
    }

    getItems();
    /* ******************************************* */

    //____________________________________________________________________________________________________
    //button to move to the white list and delete from black list
    const unlockUser = function (event) {
        event.preventDefault();

        const id = $(this).attr('data-id');

            $.ajax({
               url: `/api/Black_Lists/${id}`,
               type: 'DELETE',
               success: function(result) {
                   // Do something with the result
                   getItems();
                   console.log('record removed.');
               }
           });


        // this would be a post to put data to another table
  /*       $.get(`/api/Black_Lists/${id}`)
            .then(function (data) {
                console.log(data);
                $.post('/api/White_Lists/', data, function (res) {
                    console.log('added to White list');
                })

            }); */
    }
    //____________________________________________________________________________________________________

    /* ******************************************* */
    //White_List table display code
    /* ******************************************* */

    // rendering the Black_List table
    const renderWL = function (items) {
        $('#unlocked_users').empty();

        //appending each item to the locked-items #
        items.forEach(function (item) {
            $('#unlocked_users').append(renderWLRow(item));
        });
    }

    //api call and render
    const getWhiteList = function () {
        $.get('/api/White_Lists').then(renderWL);
    }

    const renderWLRow = function (item) {
        const tr = $('<tr>');

        //appending items to the div
        tr.append(
            $('<td>').text(item.time),
            $('<td>').text(item.sso),
            $('<td>').text(item.action),
            $('<td>').text(item.device_ID),
            $('<td>').text(item.count),
            $('<td>').text(item.message)
        );
        return tr;
    }

    getWhiteList();
    /* ******************************************* */

//Email Modal Cart Function



    


// $(document).ready(function(){  
//     // var name;  
//     var email;  
//     // var mobile;  
//     var message;  
//     $("#btnsendemail").click(function() {        
//         // name    = $("#txtname").val();  
//         email   = $("#txtemail").val();  
//         // mobile  = $("#txtmobile").val();  
//         message = $("#txtmessage").val();  
//         $("#message").text("Sending Email please wait ...");  
//         $.get("/sendmail",  
//             {  
//                 // name: name,  
//                 email: email,  
//                 // mobile: mobile,  
//                 message: message  
//             },  
//         function(data) {  
//         if(data == "sent") {  
//             $("#message").html("Email has been send successfully.");  
//         }  
//       });  
//     });  
// });  

    //bttons
    $('#locked_users').on('click', '.unlockUsr', unlockUser);
});
