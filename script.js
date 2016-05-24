// $(document).ready(function(){
    
    $('#todoList ul').sortable({
        // These items will not be sortable
        items: "li:not('.listTitle, .addItem')",
        // This is to connect with all 'ul', so that items can transfer between different days
        connectWith: "ul",
        // This means it CAN be dropped on an empty list
        dropOnEmpty: true,
        // This is the class assigned 'placeholder'...you can see the styling in the css file 
        placeholder: "emptySpace"
    });
    // Checking for keycode for the enter button so that it knows when to add the task item
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            // This is appending it to the 'ul'
            $(this).parent().parent().append('<li>'+ item +'</li>');
            // Resets the value of text box to empty so you can add another item
            $(this).val('');
        }
    });
    // Selecting the 'trash' div
    $('#trash').droppable({
        // Event,UI are default parameters as per jquery ui documentation
        drop: function(event, ui){
            ui.draggable.remove();
        }
    });
// });