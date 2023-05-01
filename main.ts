function quest_2 () {
	
}
function quest_3 () {
	
}
info.onLifeZero(function () {
    game.over(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
function quest_1 () {
    music.play(music.createSong(assets.song`minstrel0`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`title`)
    adventure.addToTextlog("Press {(A)/Space Bar/(Q)} to join the fun and start your adventure.")
    adventure.addToTextlog("Press {(B)/Enter/E)} to turn and run.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
        adventure.clearTextLog()
        adventure.changeScoreOverride(adventure.Currency.Coins, 20)
        quest_2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        adventure.addToTextlog("TRAVELLING BARD IS VERY UPSET WITH YOU")
        quest_3()
        info.changeLifeBy(-5)
    }
}
info.setLife(5)
quest_1()
