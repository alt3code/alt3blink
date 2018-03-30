from blinkstick import blinkstick
import random
import time

class Blink:
    def __init__(self):
        self.bstick = blinkstick.find_first()

    def find(self):
        bstick_man = self.bstick.get_manufacturer()
        bstick_desc = self.bstick.get_description()
        bstick_ser = self.bstick.get_serial()
        bstick_col = self.bstick.get_color(color_format="hex")
        bstick_name = self.bstick.get_info_block1()
        bstick_info_2 = self.bstick.get_info_block2()

        return {
            'bstick_man' : bstick_man,
            'bstick_desc' : bstick_desc,
            'bstick_ser' : bstick_ser,
            'bstick_col' : bstick_col,
            'bstick_name' : bstick_name,
            'bstick_info_2' : bstick_info_2
        }

    def blink(self):
        self.bstick.set_random_color()
        time.sleep(0.020)
        return self.get_RGB_color()

    def get_color(self):
        return self.bstick.get_color(color_format="hex")

    def get_RGB_color(self):
        return self.bstick.get_color(color_format="rgb") 
