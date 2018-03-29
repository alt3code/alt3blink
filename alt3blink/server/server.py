import random
from flask import Flask, render_template
from blinkstick import blinkstick

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/blink')
def blink():
    for bstick in blinkstick.find_all():
        print "Found device:"
        print "    Manufacturer:  " + bstick.get_manufacturer()
        print "    Description:   " + bstick.get_description()
        print "    Serial:        " + bstick.get_serial()
        print "    Current Color: " + bstick.get_color(color_format="hex")
        print "    Info Block 1:  " + bstick.get_info_block1()
        print "    Info Block 2:  " + bstick.get_info_block2()

    for bstick in blinkstick.find_all():
        bstick.set_random_color()
        print bstick.get_serial() + " " + bstick.get_color(color_format="hex")

    return 'blink'

if __name__ == '__main__':
    app.run()
