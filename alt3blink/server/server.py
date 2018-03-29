import random
from flask import Flask, render_template, jsonify
from blinkstick import blinkstick

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/find')
def find():
    bstick = blinkstick.find_first()
    bstick_man = bstick.get_manufacturer()
    bstick_desc = bstick.get_description()
    bstick_ser = bstick.get_serial()
    bstick_col = bstick.get_color(color_format="hex")
    bstick_info_1 = bstick.get_info_block1()
    bstick_info_2 = bstick.get_info_block2()

    return jsonify(
        manufacturer=bstick_man,
        description=bstick_desc,
        serialNumber=bstick_ser,
        color=bstick_col,
        info1=bstick_info_1,
        info2=bstick_info_2
    )

@app.route('/blink')
def blink():
    bstick = blinkstick.find_first()
    bstick.set_random_color()
    print bstick.get_serial() + " " + bstick.get_color(color_format="hex")
    return 'blink'

if __name__ == '__main__':
    app.run()
