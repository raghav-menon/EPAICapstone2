from flask import Flask, render_template, flash, request, redirect, url_for, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField, ValidationError
from wtforms.validators import DataRequired, EqualTo, Length, Email, InputRequired
from datetime import datetime 
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash 
from datetime import date
from wtforms.widgets import TextArea
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user


# Create a Flask Instance
app = Flask(__name__)
app.config['SECRET_KEY'] = "my super secret key that no one is supposed to know"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
Bootstrap(app)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
form_template = None

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))

# Create Login Form
class LoginForm(FlaskForm):
    username = StringField("Username", validators=[InputRequired(), Length(min=4, max=20)])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=4, max=80)])
    remember = BooleanField("Remember me")

class RegisterForm(FlaskForm):
    email = StringField("Email", validators = [InputRequired(),Email(message = 'Invalid Email'), Length(max=50)])
    username = StringField("Username", validators=[InputRequired(), Length(min=4, max=20)])
    password = PasswordField("Password", validators=[InputRequired(), Length(min=4, max=80)])

# Create a route decorator
@app.route('/')
def index():
	return render_template("index.html")

@app.route('/login', methods =['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user.username =='tsai':
            if check_password_hash(user.password, form.password.data):
                login_user(user, remember=form.remember.data)
                return redirect(url_for('dashboard'))
        else:
            if check_password_hash(user.password, form.password.data):
                login_user(user, remember=form.remember.data)
                return redirect(url_for('dashboard1'))
                
        return '<h1>Invalid username or password</h1>'
        
    return render_template("login.html", form=form)

@app.route('/signup', methods =['GET', 'POST'])
def signup():
    form = RegisterForm()
    if form.validate_on_submit():
        hashed_password = generate_password_hash(form.password.data, method='sha256')
        new_user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return '<h1>' + ' '+'Newuser created'+' '+ '</h1>'
        #return '<h1>' + form.username.data + ' ' + form.email.data + ' ' + form.password.data + '</h1>'
    
    return render_template("signup.html", form=form)

@app.errorhandler(404)
def page_not_found(e):
	return render_template("404.html"), 404

# Internal Server Error
@app.errorhandler(500)
def page_not_found(e):
	return render_template("500.html"), 500

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html', name=current_user.username, form_template=globals()['form_template'])

@app.route('/dashboard1')
@login_required
def dashboard1():
    return render_template('dashboard1.html', name=current_user.username, form_template=globals()['form_template'])

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/publishForm', methods=['POST'])
def publishForm():
    templateFile=request.files.get('uploadedFile')
    print(templateFile)
    print(templateFile.filename)
    templateFile.save("./templates/"+templateFile.filename)
    form_template1 = templateFile.filename
    globals()['form_template'] = form_template1
    resp = jsonify({'message' : 'Files successfully uploaded'})
    resp.status_code = 201
    return resp