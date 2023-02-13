from flask import Flask, render_template, request,psycopg2
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postrgresql;//postgres:Diallo12@localhost/demoDb'
db = SQLAlchemy(app)
#define db model table inour database
class Data(db.Model):
    __tablename__ 'customesr_name'
    id =db.Column(db.interger, primary_key = true)
    email=db.Column(db.string(120),unique = true)
    height =db.Column(db.interger)
    weight = db.Column(db.interger)

    def __init__(self,email_,height_,weight_):
        self.email = email_
        self.height = height_
        self.weight= weight_

@app.route("/")
def index():
    return render_template('project2.html')

@app.route("/", methods=['post'])
def thankyou():
    if request.methods=='post':
        FirstName =request.form['email_address']
        LastName =request.form['height_name']
        weight =request.form['weight_name']
    return render_template('thankyou.html') 

if __name__ == '__main__':
    app.debug = True
    app.run()