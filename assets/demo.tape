# VHS tape for The Map Game
# Generate with: vhs assets/demo.tape
Output assets/demo.gif

Set Shell "bash"
Set Width 1200
Set Height 700
Set FontSize 18
Set Theme "Dracula"
Set Padding 20

Type "yarn start"
Sleep 500ms
Enter
Sleep 4s

# Player 0 claims region 1
Type "1"
Enter
Sleep 2s

# Player 1 claims region 2
Type "2"
Enter
Sleep 2s

# Player 2 claims region 3
Type "3"
Enter
Sleep 2s

# Player 0 claims region 4
Type "4"
Enter
Sleep 2500ms

Ctrl+C
Sleep 1s
