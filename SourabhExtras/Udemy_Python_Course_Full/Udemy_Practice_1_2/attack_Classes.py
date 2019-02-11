import random


class Enemy:
    hp = 200

    def __init__(self, atkl, atkh):
        self.atkl = atkl
        self.atkh = atkh

    def getAtk(self):
        print("atk is", self.atkl)

    def getHp(self):
        print("Hp is", self.hp)


enemy1 = Enemy(40, 49)
enemy1.getAtk()
enemy1.getHp()

enemy2 = Enemy(75, 90   )
enemy2.getAtk()
enemy2.getHp()
