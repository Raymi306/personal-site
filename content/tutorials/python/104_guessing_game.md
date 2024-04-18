+++
title="Guessing Game pt. 5"
[extra]
prev="@/tutorials/python/102_guessing_game.md"
next="@/tutorials/python/104_guessing_game.md"
+++

# High or low?

```py
from random import randomint

MAX_GUESSES = 3

while input('Play game? y/n: ').strip().lower() == 'y':
    answer = random.randint(1, 100)
    current_guess = 0
    player_wins = False

    while current_guess < MAX_GUESSES:
        try:
            guess = int(input('Guess a number between 1 and 100: ').strip())
        except ValueError:
            print("That wasn't a number!")
            continue

        if guess == answer:
            player_wins = True
            break
        elif guess < answer:
            print('Low!')
        else:
            print('High!')

        current_guess += 1

    if player_wins:
        print("Congratulations! You won!")
    else:
        print("You lost!")
```
