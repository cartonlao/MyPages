""" Button game
    Trying to hit the red button to get 1 point,
    If you hit the yellow instead, deduct 1 point.
"""

WIDTH = 500
HEIGHT = 500

alien = Actor('alien')
alien.image = 'alien_hurt'
alien.pos = (200, 200)

def draw():
    screen.fill((128, 128, 128))
    alien.draw()
