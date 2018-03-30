from flask import Flask, render_template, jsonify
from blink import Blink

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

blink = None

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/find')
def find():
    json_dict = blink.find()
    return jsonify(
        manufacturer=json_dict['bstick_man'],
        description=json_dict['bstick_desc'],
        serialNumber=json_dict['bstick_ser'],
        color=json_dict['bstick_col'],
        name=json_dict['bstick_name'],
        info2=json_dict['bstick_info_2']
    )

@app.route('/blink')
def blink():
    rgb_list = blink.blink()
    return ','.join(str(i) for i in rgb_list)

if __name__ == '__main__':
    blink = Blink()
    app.run()
