+++
title="Guessing Game pt. 3"
[extra]
prev="@/tutorials/python/101_guessing_game.md"
next="@/tutorials/python/103_guessing_game.md"
+++

# Loops!

```py
from random import randomint

while True:
    answer = random.randint(1, 100)
    guess = int(input('Guess a number between 1 and 100: '))

    if guess == answer:
        print('You win!')
    else:
        print('You lose!')
```

```py
from random import randomint

while input('Play game? y/n: ') == 'y':
    answer = random.randint(1, 100)
    guess = int(input('Guess a number between 1 and 100: '))

    if guess == answer:
        print('You win!')
    else:
        print('You lose!')
```