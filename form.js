class Form 
{ 
    constructor()
    {

    }
    display()
    {
        var title=createElement("h2")
        tittle.html("Multi")
        title.position(130,0)
        var input=createInput("Name")
        input.position(130,160)
        var button=createButton("JOIN GAME")
        button.position(250,200)
        var greeting=createElemant("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hullo!"+ name)
greeting.position(130,400)
        })
    }
}