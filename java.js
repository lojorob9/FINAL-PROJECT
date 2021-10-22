$("#submit").click(function(element){
    element.preventDefault()
    let comment = $("#comment").val()
    let com = $("#display").val()
    console.log(comment)
    console.log(com)
    $("#commentSpace").append(`
    <div id = "firstComment">
                <div id = "spacing">
                
                    <div id = "secondImage"></div>
                    <div id="flex">
                        <div id = "displayName">${com}</div>
                        <div id ="actualComment">${comment}</div>
                        <div class = "helper noDisplay">  
                            <input type="text" id="comment1" name="comment" placeholder="Comment">
                            <input type="submit" class ="submit" value="Submit">  
                        </div>     
                    </div>         
                </div>
                <div id ="editDelete">
                    <p class="right">Delete</p>
                    <p class="right1">Edit</p>
                </div>
            </div>`)
})
$("#commentSpace").on("click", ".right", function(){
    let par = $(this).parents()[1]
    $(par).remove()
})
$("#commentSpace").on("click", ".right1", function(){
    let car = $(this).parents()[1]
    let star = $(car).children()[0]
    let far = $(star).children()[1]
    let bar = $(far).children()[2]
    $(bar).toggleClass("noDisplay")
    console.log(bar)
})
$("#commentSpace").on("click", ".submit", function(){
   let newComment = $(this).prev().val()
   let commentVal = $(this).parents()[1]
   let commentParent = $(commentVal).children()[1]
   $(commentParent).text(newComment)
//    console.log(commentParent)
})
