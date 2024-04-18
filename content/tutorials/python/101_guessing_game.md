+++
title="Guessing Game pt. 2"
[extra]
prev="@/tutorials/python/100_guessing_game.md"
next="@/tutorials/python/102_guessing_game.md"
+++

# Randomness and the Standard Library

```py
from random import randomint

answer = random.randint(1, 100)
guess = int(input('Guess a number between 1 and 100: '))

if guess == answer:
    print('You win!')
else:
    print('You lose!')
```
