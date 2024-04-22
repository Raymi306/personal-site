+++
title="Part 4"
[extra]
prev="@/tutorials/python/guessing_game/102_guessing_game.md"
next="@/tutorials/python/guessing_game/104_guessing_game.md"
+++

# Defensive Coding

```py
from random import randint

while input('Play game? y/n: ').strip().lower() == 'y':
    answer = randint(1, 100)

    try:
        guess = int(input('Guess a number between 1 and 100: ').strip())
    except ValueError:
        print("That wasn't a number!")
        continue

    if guess == answer:
        print("You win!")
    else:
        print("You lose!")
```
